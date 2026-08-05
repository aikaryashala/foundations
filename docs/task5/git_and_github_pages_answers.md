# Git and GitHub Pages — Answers with Reasoning

Check the **reasoning**, not just the letter. Every answer comes back to the pallavi: work passes through **Folder → Box → History → GitHub**, moved by `git add`, `git commit`, `git push`, and the website reads only from GitHub.

---

# Part A — Multiple Choice

**A1. B — `git add`.**
`add` is the first arrow: Folder → Box. `commit` is the second, `push` the third, and `status` moves nothing at all.

**A2. C — In History on your own computer.**
`commit` seals the snapshot, but sealing a carton does not deliver it. Nothing has left the computer until `git push` runs.

**A3. D — `git push`.**
`status`, `add` and `commit` all work entirely inside your own machine. Push is the single command that speaks to GitHub.

**A4. C — The file is edited but not added.**
Read the word **not**. "Not staged" = "not in the Box". The change is still lying in the Folder.

**A5. B — Everything is saved in History on this computer.**
This is the most misleading message in Git. "Clean" describes only the Folder and the Box — both empty. It says nothing about GitHub, so A and D are not guaranteed. You can be `clean` and five commits behind GitHub.

**A6. C — `docs/task5/git_and_github_pages_worksheet.html`.**
Pages publishes the `docs` folder of `main`. `README.md`, `CLAUDE.md` and `.gitignore` sit outside `docs/`, so GitHub stores them but never shows them on the site.

**A7. B — This folder and everything under it.**
The dot means "here". `git add .` from the project root stages every changed file in the whole project.

**A8. B — Gives the commit its message.**
`-m` stands for *message*. Without it Git opens a text editor and demands one anyway — a commit cannot exist without a label.

**A9. C — `"Add task5 link to index page"`.**
It says **what changed**. `"changes"`, `"update"` and `"asdf"` say nothing that a reader six months later could use.

**A10. B — Pages has not finished rebuilding, and the browser is showing its saved copy.**
Two delays stack up: GitHub Pages needs roughly half a minute to two minutes, and then your browser still shows the page it cached. Wait, then hard refresh (Ctrl+Shift+R / Cmd+Shift+R).

**A11. C — The nickname for your copy on GitHub.**
In `git push origin main`, `origin` is *where* and `main` is *which branch*. Plain `git push` works only because those two were remembered by an earlier `git push -u origin main`.

**A12. B — `git log --oneline`.**
`log` shows the past (commits). `diff` shows the present (edits not yet added). `status` shows where things stand. `pull` fetches.

**A13. B — `git pull`.**
`pull` is the arrow pointing the other way: GitHub → your computer. `push` sends, `pull` brings.

**A14. B — Only `docs/index.html`.**
`git add` chooses. The second file never entered the Box, so the commit could not contain it, so the push could not carry it. It is still sitting in the Folder, and `git status` will still say `Changes not staged for commit`.

---

# Part B — Fill in the Blanks

**B1.** Folder → **Box** → **History** → **GitHub**. (Their real names: working directory, staging area, local repository, remote repository.)

**B2.** **add** — `git add` moves work Folder → Box.

**B3.** **commit** — `git commit` moves work Box → History.

**B4.** **push** — `git push` moves work History → GitHub.

**B5.** **status** — `git status` reads, it never writes. Safe to run as often as you like.

**B6.** The **docs** folder of the **main** branch.

**B7.** About **one minute** (roughly half a minute to two minutes), then a **hard** refresh — Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac.

**B8.** In the **Box** (the staging area). "To be committed" = packed, waiting to be sealed.

**B9.** Git has **never** seen this file before. It is brand new, so it is untracked until the first `git add`.

**B10.** **-u** — the full command is `git push -u origin main`. The `-u` is what makes Git remember `origin` and `main`, so that later a bare `git push` is enough.

**B11.** On **GitHub** — the remote copy of the project.

**B12.** It should say **what** changed.

---

# Part C — Trace the States

Reading the tables: `—` means that place holds nothing new. Once a commit is made it stays in History forever — pushing copies it to GitHub, it does not move out of History.

## C1

| Line | Folder | Box | History | GitHub | Live website |
|---|---|---|---|---|---|
| `edit docs/index.html` | new edit | — | — | — | old |
| `git add .` | — | edit | — | — | old |
| `git commit -m "Add task5 link"` | — | — | commit | — | old |
| `git push` | — | — | commit | commit | **new** (after ~1 min + hard refresh) |

**Reasoning.** The complete journey, one arrow per line. Notice that the website stays `old` for three of the four lines — only the last line touches the internet.

## C2

| Line | Folder | Box | History | GitHub | Live website |
|---|---|---|---|---|---|
| `edit docs/index.html` | new edit | — | — | — | old |
| `git add docs/index.html` | — | edit | — | — | old |
| `git status` | — | edit | — | — | old |

**Reasoning.** `git status` prints

```
Changes to be committed:
        modified:   docs/index.html
```

and changes nothing — the state after line 3 is identical to the state after line 2. That is exactly why status is safe to run constantly.

## C3

| Line | Folder | Box | History | GitHub | Live website |
|---|---|---|---|---|---|
| `edit docs/index.html` | new edit | — | — | — | old |
| `git add .` | — | edit | — | — | old |
| `git commit -m "Add task5 link"` | — | — | commit | — | old |

**Reasoning.** This is Kiran's mistake from Charanam 8, and the most common one of all. `git status` now says `nothing to commit, working tree clean`, which *sounds* like success — but the commit is sitting in History on this computer. GitHub has never heard of it. The missing command is `git push`.

## C4

| Line | Folder | Box | History | GitHub | Live website |
|---|---|---|---|---|---|
| `edit docs/index.html` | index edit | — | — | — | old |
| `edit docs/task5/notes.md` | index edit + notes edit | — | — | — | old |
| `git add docs/index.html` | notes edit | index edit | — | — | old |
| `git commit -m "Add task5 link"` | notes edit | — | commit (index only) | — | old |
| `git push` | notes edit | — | commit (index only) | commit (index only) | **new** — but only the index change |

**Reasoning.** `git add` chooses, and only `docs/index.html` was chosen. `notes.md` never left the Folder, so it appears in none of the later places. After the push, `git status` still reports

```
Changes not staged for commit:
        modified:   docs/task5/notes.md
```

To send it too: `git add docs/task5/notes.md`, `git commit -m "Add task5 notes"`, `git push`.

## C5

| Line | Folder | Box | History | GitHub | Live website |
|---|---|---|---|---|---|
| `git status` | — | — | — | — | old |
| `git add .` | — | — | — | — | old |
| `git commit -m "update"` | — | — | — | — | old |

**Reasoning.** Nothing was edited, so there was nothing to add. `git add .` on an unchanged project puts nothing in the Box, and the commit then refuses:

```
nothing to commit, working tree clean
```

No commit is created. Git never invents a change — a commit needs something in the Box.

## C6

| Line | Folder | Box | History | GitHub | Live website |
|---|---|---|---|---|---|
| `edit README.md` | new edit | — | — | — | old |
| `git add .` | — | edit | — | — | old |
| `git commit -m "Explain the project"` | — | — | commit | — | old |
| `git push` | — | — | commit | commit | **old — unchanged** |

**Reasoning.** Every Git step succeeded; the commit really is on GitHub, and anyone can read the new `README.md` there. But `README.md` lives outside `docs/`, and Pages publishes only `docs/`. GitHub **stores** it; the website never **shows** it. This is the one trace in this set where a correct, complete `add → commit → push` leaves the website exactly as it was.

## C7

| Line | Folder | Box | History | GitHub | Live website |
|---|---|---|---|---|---|
| `edit docs/index.html` | edit 1 | — | — | — | old |
| `git add .` | — | edit 1 | — | — | old |
| `git commit -m "Add task5 link"` | — | — | commit 1 | — | old |
| `git push` | — | — | commit 1 | commit 1 | **new (link)** |
| `edit docs/index.html` | edit 2 | — | commit 1 | commit 1 | new (link) |
| `git add .` | — | edit 2 | commit 1 | commit 1 | new (link) |
| `git commit -m "Fix the task5 title"` | — | — | commit 1, commit 2 | commit 1 | new (link) |
| `git push` | — | — | commit 1, commit 2 | commit 1, commit 2 | **new (link + fixed title)** |

**Reasoning.** The loop simply repeats. History only ever grows — commit 1 stays when commit 2 arrives, and `git log --oneline` would now list both, newest first. Note lines 5–7: while the second round is in progress, the website keeps showing the **first** round's result. It is never blank and never half-updated; it shows the last thing that was pushed.

## C8

| Line | Folder | Box | History | GitHub | Live website |
|---|---|---|---|---|---|
| `edit docs/index.html` (link) | link edit | — | — | — | old |
| `git add docs/index.html` | — | link edit | — | — | old |
| `edit docs/index.html` (spelling) | spelling edit | link edit | — | — | old |
| `git commit -m "Add task5 link"` | spelling edit | — | commit (link only) | — | old |
| `git push` | spelling edit | — | commit (link only) | commit (link only) | **new — link only, spelling still wrong** |

**Reasoning.** `git add` copies the file into the Box **as it looked at that moment**. The later edit changed the file in the Folder, not the copy already packed. So the commit contains only the link, and `git status` after the push still says

```
Changes not staged for commit:
        modified:   docs/index.html
```

**Does the website show the spelling fix?** No. **Which commands put it there?**

```
git add docs/index.html
git commit -m "Fix spelling on the task5 line"
git push
```

The lesson: `add` takes a photograph, not a promise. Edit after adding, and you must add again.

---

## The one line to carry away

> `add` chooses, `commit` saves, `push` publishes — and `working tree clean` only ever means *saved on my computer*.
