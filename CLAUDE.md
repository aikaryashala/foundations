# Project: Paper-First Programming Worksheets

A static educational site (GitHub Pages style — everything servable lives under `docs/`)
of programming worksheets and question banks for beginner students. Students are Telugu
speakers learning in English. The tasks in this project are **paper-first**: students read
short code snippets and write variable values in their notebooks. No computer is needed
to practise — paper is the computer, the student is the processor.

## Directory layout

```
project_tasks/
├── CLAUDE.md                       ← this file
└── docs/
    ├── index.html                  ← site root; one line per task
    └── taskN/
        ├── <topic>_worksheet.md    ← the lesson, taught in small iterations
        ├── <topic>_worksheet.html  ← viewer
        ├── <topic>_questions.md    ← question bank (questions ONLY — never answers)
        ├── <topic>_questions.html  ← viewer
        ├── <topic>_answers.md      ← answer key WITH reasoning for every question
        └── <topic>_answers.html    ← viewer
```

`<topic>` is snake_case and shared by all six files of a task
(e.g. `variables_and_arithmetic`).

## Serving locally

Viewers `fetch()` their sibling `.md`, so opening them as `file://` fails (each viewer
shows a built-in help box for this case). Serve over HTTP:

```
cd docs
python3 -m http.server 8000
```

## Design principles (author-side — never stated to students)

- **Constraints are for the author, not the student.** If a task deliberately restricts
  itself (e.g. integers only, no data types, max 3 variables), the restriction shapes the
  examples silently. Do not announce it in the worksheet — students should just see
  simple, consistent code.
- **One new idea per iteration.** A worksheet is a sequence of tiny iterations, each
  adding exactly one concept on top of the previous one.
- **Predict before reveal.** Students write their prediction on paper first; the
  observation then confirms or corrects it.
- **The trip-ups are the curriculum.** Integer division keeping only the quotient,
  `%` as remainder, operator precedence, reassignment replacing the old value —
  questions deliberately target these.

## Code-snippet rules (task1 and any snippet-tracing task)

- Assignment and arithmetic only: `=` with `+  -  *  /  %`. No declarations, no data
  types, no `print`/output statements, no input, no conditions, no loops.
- Integers only, and every intermediate result stays a small integer
  (`/` is integer division: `17 / 5` is `3`).
- **Never divide by a value that could be 0** — re-check any snippet where a divisor
  is a computed variable.
- At most **3 variables** per snippet, named `a`, `b`, `c` in that order of appearance.
- Prefer **one variable updated 3–4 times in a row** (state tracing) over clever logic.
  No swap tricks, no puzzles — the skill being drilled is tracking state line by line.
- Students answer by writing the value of each variable **after every line**
  (the "state table" method taught in the worksheet).
- Use plain fenced code blocks (no language tag) so viewers don't syntax-highlight them.
- Verify every snippet's arithmetic by hand before shipping; the answer key must show
  the line-by-line trace, not just the final value.

## Worksheet format (`<topic>_worksheet.md`)

1. `# Title` — plain-language, states the skill (e.g. "— Trace the Values").
2. Short goal paragraph + what the student needs (notebook, pencil).
3. A "golden rule" the whole sheet hangs on, stated up front as a blockquote.
4. Iterations separated by `---`, each structured as:
   - `## Iteration N — <one-line idea>`
   - `**a. What we set up**` — the snippet or situation
   - `**b. Task**` — what the student does on paper
   - `**c. Observation (what you should find)**` — the expected result, explained
   - `**Takeaway to say out loud:**` — one memorable sentence
5. A short "Practice on paper" set with final states given for self-checking.
6. A one-page reference table (operators, golden rules).
7. `## New Words (కొత్త పదాలు — తెలుగు అర్థాలు)` — table of English term, Telugu
   word, and a simple meaning. Always the last section.

## Question bank format (`<topic>_questions.md` / `<topic>_answers.md`)

- Questions file: `# Title — Question Bank`, brief instructions, then:
  - **Part A — Multiple Choice** (~12–14 questions, 4 options A–D each)
  - **Part B — Fill in the Blanks** (~10)
  - **Part C — Trace the States** (~8 full snippets; write every variable's value
    after every line)
- The questions file contains **no answers anywhere**.
- Answers file: `# Title — Answers with Reasoning`, mirrors the numbering exactly;
  every answer explains *why* (line-by-line trace for Part C). Tell students to check
  the reasoning, not just the letter.

## Viewer HTML template

All `.html` files share one self-contained template (marked.js + highlight.js from CDN,
graph-paper background, sticky topbar with stage chips, dark code blocks, `file://`
error fallback). To create a new viewer, copy any existing one and change **only**:

| Spot | Worksheet | Questions | Answers |
|---|---|---|---|
| `<title>` | task title | `<Topic> — Question Bank` | `<Topic> — Answers with Reasoning` |
| `.brand` text | `<Topic> · Lab` | `<Topic> · Question Bank` | `<Topic> · Answer Key` |
| topbar chips | concept stages of the sheet | `MCQ › Fill in the blanks › Traces` | same as questions |
| `hr::after` content | `›` | `?` | `✓` |
| `const MD_FILE` | `<topic>_worksheet.md` | `<topic>_questions.md` | `<topic>_answers.md` |
| localhost URL in error text | matching `.html` name |〃 | 〃 |

Everything else (CSS, JS) stays byte-identical across viewers.

## index.html format

One `<li>` per task — worksheet link, then small `[Questions]` and `[ans]` links
(class `q`) on the same line:

```html
<li><a href="task1/<topic>_worksheet.html">Task 1 - <Title></a>
    <a class="q" href="task1/<topic>_questions.html">[Questions]</a>
    <a class="q" href="task1/<topic>_answers.html">[ans]</a></li>
```

## Checklist — adding task N

1. `mkdir docs/taskN`; pick the snake_case `<topic>`.
2. Write `<topic>_worksheet.md` (format above), `<topic>_questions.md`,
   `<topic>_answers.md` — re-verify all arithmetic by hand.
3. Copy the three viewer HTMLs from an existing task; update the six spots in the
   table above for each.
4. Add the task's `<li>` line to `docs/index.html`.
5. Serve locally and click all three links; confirm each page renders and the
   browser-tab title matches the md's `# Title`.
