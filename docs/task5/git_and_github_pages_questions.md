# Git and GitHub Pages — Question Bank

Answer everything **on paper**. Remember the pallavi: work passes through four places — **Folder → Box → History → GitHub** — moved by `git add`, `git commit`, `git push`, in that order. The website reads only from GitHub.

For Part C, use the **state table** method. After every line write one row:

| Line | Folder | Box | History | GitHub | Live website shows |
|---|---|---|---|---|---|

Write `—` where a place holds nothing new, and write `old` or `new` for the website.

Write your answers in your notebook. Answers are **not** in this file.

---

# Part A — Multiple Choice

Choose one option and write down **why** you chose it.

**A1.** Which command moves work from the Folder into the Box?
A. `git commit`  B. `git add`  C. `git push`  D. `git status`

**A2.** After `git commit -m "fix"` and nothing else, where is your work?
A. On the website  B. On GitHub  C. In History on your own computer  D. Still in the Box

**A3.** Which single command is the only one that touches the internet?
A. `git status`  B. `git add .`  C. `git commit`  D. `git push`

**A4.** `git status` prints `Changes not staged for commit: modified: docs/index.html`. What does this mean?
A. The file is in the Box  B. The file is committed  C. The file is edited but not added  D. The file is on GitHub

**A5.** `git status` prints `nothing to commit, working tree clean`. What is guaranteed?
A. The website is updated  B. Everything is saved in History on this computer  C. The Box is full  D. GitHub has your latest commit

**A6.** GitHub Pages for this project publishes the `docs` folder of the `main` branch. Which file, when pushed, changes the website?
A. `README.md`  B. `CLAUDE.md`  C. `docs/task5/git_and_github_pages_worksheet.html`  D. `.gitignore`

**A7.** What does the `.` in `git add .` mean?
A. Add nothing  B. Add this folder and everything under it  C. End the command  D. Add only hidden files

**A8.** What does `-m` do in `git commit -m "Add task5"`?
A. Makes the commit smaller  B. Gives the commit its message  C. Sends it to GitHub  D. Merges branches

**A9.** Which is the best commit message?
A. `"changes"`  B. `"update"`  C. `"Add task5 link to index page"`  D. `"asdf"`

**A10.** You pushed 5 seconds ago and the website still shows the old page. What is the most likely reason?
A. The push failed  B. Pages has not finished rebuilding yet, and the browser is showing its saved copy  C. Git deleted your file  D. You must run `git add` again

**A11.** In `git push origin main`, what is `origin`?
A. The name of your file  B. The name of the commit  C. The nickname for your copy on GitHub  D. The name of the branch

**A12.** Which command shows the list of past commits, newest first?
A. `git diff`  B. `git log --oneline`  C. `git status`  D. `git pull`

**A13.** Which command brings GitHub's newer commits down to your computer?
A. `git push`  B. `git pull`  C. `git add`  D. `git commit`

**A14.** You edited two files but ran only `git add docs/index.html`, then `git commit -m "edit"` and `git push`. What reached GitHub?
A. Both files  B. Only `docs/index.html`  C. Neither file  D. Only the second file

---

# Part B — Fill in the Blanks

**B1.** The four places, in order, are Folder → ______ → ______ → ______.

**B2.** `git ______` moves work from the Folder into the Box.

**B3.** `git ______` moves work from the Box into History.

**B4.** `git ______` moves work from History to GitHub.

**B5.** The command that changes nothing and only tells you where your work is standing is `git ______`.

**B6.** GitHub Pages for this project publishes the ______ folder of the ______ branch.

**B7.** After a push, the website takes about ______ to rebuild, and then you should do a ______ refresh in the browser.

**B8.** `git status` heading `Changes to be committed:` means the file is sitting in the ______.

**B9.** `git status` heading `Untracked files:` means Git has ______ seen this file before.

**B10.** The very first push of a new branch is written `git push ______ origin main`.

**B11.** `origin` is the nickname for the copy of the project on ______.

**B12.** A commit message should say ______ changed.

---

# Part C — Trace the States

For each sequence, write the state table described at the top of this sheet: one row per line, showing where `docs/index.html` (or the named file) stands and whether the live website shows `old` or `new`. Assume the site was fully up to date before line 1.

**C1.**

```
edit docs/index.html
git add .
git commit -m "Add task5 link"
git push
```

**C2.**

```
edit docs/index.html
git add docs/index.html
git status
```

**C3.**

```
edit docs/index.html
git add .
git commit -m "Add task5 link"
```

**C4.** Two files are edited; only one is added.

```
edit docs/index.html
edit docs/task5/notes.md
git add docs/index.html
git commit -m "Add task5 link"
git push
```

**C5.** Nothing is edited at all.

```
git status
git add .
git commit -m "update"
```

**C6.** A file outside the published folder.

```
edit README.md
git add .
git commit -m "Explain the project"
git push
```

**C7.** Two rounds, one after the other.

```
edit docs/index.html
git add .
git commit -m "Add task5 link"
git push
edit docs/index.html
git add .
git commit -m "Fix the task5 title"
git push
```

**C8.** Careful — the file is edited **twice**.

```
edit docs/index.html          (adds the task5 link)
git add docs/index.html
edit docs/index.html          (fixes a spelling mistake)
git commit -m "Add task5 link"
git push
```

For C8 also answer: after the push, does the live website show the spelling fix? Which commands, in order, would put it there?

---

When you finish, check yourself against the answer key. Check the **reasoning**, not just the letter — the whole skill is knowing which of the four places your work is standing in.
