// Shared viewer logic for all task pages.
// The markdown file is derived from the page's own filename: <name>.html -> <name>.md
// (override with <body data-md="...."> if ever needed).
// <body data-kind="worksheet|questions|answers"> drives wording and per-kind CSS.
(function(){
  const PAGE = location.pathname.split('/').pop() || 'page.html';
  const MD_FILE = document.body.dataset.md || PAGE.replace(/\.html?$/, '') + '.md';
  const KIND = document.body.dataset.kind || 'page';
  const statusEl = document.getElementById('status');
  const contentEl = document.getElementById('content');

  function showError(title, lines){
    statusEl.outerHTML =
      '<div class="errbox" role="alert"><h2>' + title + '</h2>' + lines.join('') + '</div>';
  }

  async function render(){
    if (!window.marked){
      showError('Markdown renderer didn’t load',
        ['<p>The marked.js library couldn’t be reached from the CDN. Check your internet connection and reload.</p>']);
      return;
    }
    marked.setOptions({ gfm:true, breaks:false });

    try{
      const res = await fetch(MD_FILE, { cache:'no-cache' });
      if(!res.ok) throw new Error('http-' + res.status);
      const md = await res.text();

      contentEl.innerHTML = marked.parse(md);

      // Highlight only blocks whose language is known; leave ASCII diagrams plain.
      contentEl.querySelectorAll('pre code').forEach(block => {
        const m = (block.className || '').match(/language-([\w-]+)/);
        const lang = m && m[1];
        if (lang && window.hljs && hljs.getLanguage(lang)){
          hljs.highlightElement(block);
        }
      });

      // Upgrade ```cells blocks into graph-paper cell rows (one symbol per cell).
      contentEl.querySelectorAll('pre code.language-cells').forEach(block => {
        const wrap = document.createElement('div');
        wrap.className = 'cells';
        block.textContent.replace(/\n$/, '').split('\n').forEach(line => {
          const row = document.createElement('div');
          row.className = 'cellrow';
          Array.from(line).forEach(ch => {
            const cell = document.createElement('span');
            cell.className = 'cell' + (ch === ' ' ? ' cell--space' : ch === '↵' ? ' cell--enter' : '');
            cell.textContent = ch === ' ' ? '·' : ch;
            row.appendChild(cell);
          });
          wrap.appendChild(row);
        });
        block.closest('pre').replaceWith(wrap);
      });

      // Upgrade ```sms blocks into phone-style message bubbles (wrapped, not scrolled).
      contentEl.querySelectorAll('pre code.language-sms').forEach(block => {
        const box = document.createElement('div');
        box.className = 'sms';
        const label = document.createElement('div');
        label.className = 'sms-label';
        label.textContent = 'sms';
        const bubble = document.createElement('div');
        bubble.className = 'sms-bubble';
        bubble.textContent = block.textContent.replace(/\n$/, '');
        box.appendChild(label);
        box.appendChild(bubble);
        block.closest('pre').replaceWith(box);
      });

      document.title = (contentEl.querySelector('h1')?.textContent || document.title).trim();
      statusEl.remove();
      contentEl.hidden = false;
      document.body.classList.add('ready');
    }catch(err){
      const isFile = location.protocol === 'file:';
      if (isFile){
        showError('Open this over a local server, not as a file',
          ['<p>Browsers block a page opened with <code>file://</code> from reading other local files, so the ' + KIND + ' can’t be fetched yet. Serve this folder over HTTP and reload:</p>',
           '<pre>cd path/to/this/folder\npython3 -m http.server 8000</pre>',
           '<p>Then open <code>http://localhost:8000/' + PAGE + '</code></p>']);
      } else {
        showError(KIND.charAt(0).toUpperCase() + KIND.slice(1) + ' file not found',
          ['<p>Couldn’t load <code>' + MD_FILE + '</code> next to this page. Keep both files in the same folder, then reload.</p>']);
      }
    }
  }

  render();
})();
