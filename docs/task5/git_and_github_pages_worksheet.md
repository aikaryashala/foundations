# Git and GitHub Pages — From My Folder to the Live Website

**Goal.** You have a folder on your computer. Somewhere on the internet there is a website. Between the two stand exactly three commands — `git add`, `git commit`, `git push`. On this sheet you will learn what each one does, in what order, and why the website does **not** change until all three are finished.

**You need:** a notebook, a pencil, and a computer with the project folder already on it.

This sheet is written like a song: one **pallavi** (పల్లవి) — the rule we return to after every verse — and a series of **charanams** (చరణాలు) — verses that each add one new idea.

> **Pallavi — the golden rule of this sheet**
> Your work passes through **four places**: the **Folder**, the **Box**, the **History**, and **GitHub**.
> `add` moves it Folder → Box. `commit` moves it Box → History. `push` moves it History → GitHub.
> The website reads only from **GitHub**. Stop at any earlier place and the website stays exactly as it was.

---

## Charanam 1 — The four places

**a. What we set up**

Think of sending a parcel to your cousin in another town:

```
Folder    →  the clothes lying on your bed        (files you just edited)
Box       →  the clothes you put into the carton  (files you chose to send)
History   →  the sealed carton with a label       (a saved snapshot with a message)
GitHub    →  the carton delivered to the town     (the copy on the internet)
```

Git gives each place a real name:

```
Folder    =  working directory
Box       =  staging area
History   =  local repository (your commits)
GitHub    =  remote repository (origin)
```

**b. Task**

Copy the four names into your notebook as a column, in order. Beside each, write the one command that moves work **out** of it.

**c. Observation (what you should find)**

```
Folder   --git add-->   Box   --git commit-->   History   --git push-->   GitHub
```

Three arrows, three commands, always the same order. Editing a file puts it in the Folder — nothing more. Git never sends anything on its own; you move it, one arrow at a time.

**Takeaway to say out loud:** "Four places, three commands, always in the same order."

---

## Charanam 2 — `git status` — the command that tells you where you are

**a. What we set up**

You edited `docs/index.html` and typed nothing else yet. Then you run:

```
git status
```

Git answers:

```
Changes not staged for commit:
        modified:   docs/index.html
```

**b. Task**

Look at the word **not**. Write in your notebook which of the four places the file is sitting in right now.

**c. Observation (what you should find)**

The file is still in the **Folder**. "Not staged" means "not yet in the Box". After you run `git add docs/index.html`, the same command answers differently:

```
Changes to be committed:
        modified:   docs/index.html
```

"To be committed" means "sitting in the Box, waiting". A brand-new file that Git has never seen appears under a third heading:

```
Untracked files:
        docs/task5/notes.md
```

`git status` is free, safe, and changes nothing. Run it before every command and after every command — it is the only way to *see* the four places.

**Takeaway to say out loud:** "`git status` changes nothing — it only tells me where my work is standing."

---

## Charanam 3 — `git add` — put it in the Box

**a. What we set up**

Two files were edited. You want to send only one of them:

```
git add docs/index.html
git status
```

**b. Task**

Predict what `git status` prints now, before reading on. Write both headings you expect and which file sits under each.

**c. Observation (what you should find)**

```
Changes to be committed:
        modified:   docs/index.html

Changes not staged for commit:
        modified:   docs/task5/notes.md
```

`git add` chooses. Only what you add goes in the Box; everything else stays lying on the bed. Two forms are worth knowing:

```
git add docs/index.html      ← put this one file in the Box
git add .                    ← put everything changed in this folder in the Box
```

`git add .` is the everyday form — the dot means "here, and everything under here". `git add` never saves anything and never touches the website. It only fills the Box.

**Takeaway to say out loud:** "`git add` chooses what goes in — nothing is saved yet."

---

## Charanam 4 — `git commit` — seal the box and write on it

**a. What we set up**

```
git commit -m "Add task5 to the index page"
```

**b. Task**

The `-m` and the quoted words are not decoration. Write in your notebook what you think would be lost if the message said only `"changes"`.

**c. Observation (what you should find)**

A commit is a **snapshot with a label**. Six months later the label is the only thing anyone reads:

```
Add task5 to the index page      ← tells the reader what changed
changes                          ← tells the reader nothing
update                           ← tells the reader nothing
asdf                             ← worse
```

Rules for the message: short, in quotes, and it says **what changed**, not how you felt about it.

After the commit, the Box is empty again and `git status` says:

```
nothing to commit, working tree clean
```

That sentence means "Folder and Box are both empty — everything is saved in History." It does **not** mean the website changed. The carton is sealed and labelled; it has not left your house.

**Takeaway to say out loud:** "A commit is a snapshot with a label — saved on my computer, not on the internet."

---

## Charanam 5 — `git push` — send it to GitHub

**a. What we set up**

```
git push
```

Git answers with something like:

```
To github.com:aikaryashala/foundations.git
   30fd5d3..631fdb1  main -> main
```

**b. Task**

Read the last line. Write in your notebook what `main -> main` is saying.

**c. Observation (what you should find)**

"My `main` branch went to the `main` branch on GitHub." That arrow is the only moment in the whole sheet when your work leaves your computer. Before it, GitHub knew nothing about your commit; after it, GitHub has exactly the same commit you have.

The long form of the same command names both ends explicitly:

```
git push origin main
```

`origin` is Git's nickname for your GitHub copy, and `main` is the branch. Plain `git push` works because the nickname and branch were remembered the first time — the very first push of a new branch is written as:

```
git push -u origin main
```

The `-u` is what makes the remembering happen. After that, `git push` alone is enough, forever.

**Takeaway to say out loud:** "`push` is the only command that touches the internet."

---

## Charanam 6 — GitHub Pages — how the push becomes a website

**a. What we set up**

This project's settings on GitHub say:

```
Branch:  main
Folder:  /docs
Site:    https://aikaryashala.github.io/foundations/
```

**b. Task**

Given those settings, write down what happens to the website when you push a change to `docs/index.html`. And what happens when you push a change to `CLAUDE.md`, which is **not** inside `docs/`.

**c. Observation (what you should find)**

GitHub Pages is a servant watching one branch and one folder. Every time `main` changes, it takes whatever is inside `docs/` and publishes it as the website:

```
docs/index.html                       →  https://aikaryashala.github.io/foundations/
docs/task5/..._worksheet.html         →  https://aikaryashala.github.io/foundations/task5/..._worksheet.html
CLAUDE.md   (outside docs/)           →  not published — it is stored, not shown
```

`docs/index.html` is special: a folder's `index.html` is what you get when you ask for the folder itself.

Two things surprise everyone the first time:

- **It is not instant.** The rebuild takes roughly half a minute to two minutes. Refreshing angrily during that time proves nothing.
- **Your browser lies to you.** It shows the page it saved earlier. After the rebuild finishes, force a fresh copy with **Ctrl+Shift+R** (Windows) or **Cmd+Shift+R** (Mac).

**Takeaway to say out loud:** "Pages publishes the `docs` folder of `main` — a short wait, then a hard refresh."

---

## Charanam 7 — The everyday loop

**a. What we set up**

The full journey, from opening the folder to seeing the change live:

```
1.  edit the files
2.  git status                        ← what did I change?
3.  git add .                         ← put it all in the Box
4.  git status                        ← check: is it really in the Box?
5.  git commit -m "Add task5 worksheet"
6.  git push
7.  wait ~1 minute
8.  hard refresh the site
```

**b. Task**

Copy these eight steps onto the inside cover of your notebook. Then, beside step 6, write which of the four places your work has reached after each of steps 3, 5 and 6.

**c. Observation (what you should find)**

```
after step 3  →  Box
after step 5  →  History
after step 6  →  GitHub   ← and only now does the website begin to change
```

Steps 2 and 4 are `git status` twice. They cost nothing and they catch the two mistakes that waste the most time — forgetting a file, and adding a file you did not mean to send.

**Takeaway to say out loud:** "Status, add, status, commit, push — then wait and hard-refresh."

---

## Charanam 8 — The three ways it goes wrong

**a. What we set up**

Three students each changed `docs/index.html` and each says "the website is not updating".

```
Ravi  :  edited, then went to the browser.
Sita  :  edited, ran git add ., then went to the browser.
Kiran :  edited, ran git add ., ran git commit -m "new task", then went to the browser.
```

**b. Task**

For each student, write which of the four places the work stopped in, and the one command that would fix it.

**c. Observation (what you should find)**

| Student | Work stopped in | What is missing | Fix |
|---|---|---|---|
| Ravi | Folder | add, commit, push | `git add .` then `git commit -m "…"` then `git push` |
| Sita | Box | commit, push | `git commit -m "…"` then `git push` |
| Kiran | History | push | `git push` |

All three saw the same thing in the browser: the old page. The browser cannot tell you *which* step you missed — only `git status` can. Kiran's case is the most common of all, and the most misleading, because `git status` proudly says `working tree clean`. Clean means "saved on my computer". It never means "live".

**Takeaway to say out loud:** "`working tree clean` means saved, not published."

---

## Charanam 9 — Three more commands worth knowing

**a. What we set up**

```
git log --oneline
git diff
git pull
```

**b. Task**

Guess what each shows or does, then check below.

**c. Observation (what you should find)**

```
git log --oneline    ← the list of sealed cartons, newest first
                       631fdb1 Answers for extra questions in task4
                       30fd5d3 answers and extra questions

git diff             ← the exact lines you changed but have NOT yet added
                       (empty after git add — because the change moved to the Box)

git pull             ← bring GitHub's newer commits down to your computer
```

`git pull` is the opposite arrow of `git push`. You need it when the GitHub copy has moved ahead of yours — for example after editing a file directly on the GitHub website, or when working on a second computer. If a `git push` is ever rejected with "updates were rejected", the cure is almost always `git pull` first, then `git push` again.

**Takeaway to say out loud:** "`log` shows the past, `diff` shows the present, `pull` brings the far copy near."

---

## Practice on paper

**P1.** You edited `docs/task5/git_and_github_pages_worksheet.md` and ran:

```
git add docs/task5/git_and_github_pages_worksheet.md
git status
```

Which heading does the file appear under, and has the website changed?

**P2.** You ran `git commit -m "fix typo"` and then closed the laptop. A friend opens the site. What do they see?

**P3.** Put these in the correct order: `git push`, `git commit -m "…"`, `git status`, `git add .`

**P4.** Which of these files, when pushed, can change the website?

```
docs/index.html
docs/task5/git_and_github_pages_worksheet.html
README.md
CLAUDE.md
```

**Check yourself:** P1 — under `Changes to be committed:`; the website has **not** changed (the work is only in the Box). P2 — the **old** page; the commit never left the computer because there was no `push`. P3 — `git status`, `git add .`, `git commit -m "…"`, `git push`. P4 — only the two inside `docs/`; `README.md` and `CLAUDE.md` are stored on GitHub but are not part of the published site.

If any answer surprised you, re-read the charanam it comes from.

---

## One-page reference

**The four places**

```
Folder  --git add-->  Box  --git commit-->  History  --git push-->  GitHub  -->  Website
```

| Command | What it does | Does the website change? |
|---|---|---|
| `git status` | Shows which place your work is in | No |
| `git add .` | Folder → Box (all changed files here and below) | No |
| `git add <file>` | Folder → Box (that one file) | No |
| `git commit -m "msg"` | Box → History, as a snapshot with a label | No |
| `git push` | History → GitHub | **Yes**, after ~1 minute |
| `git push -u origin main` | The very first push of a branch | **Yes**, after ~1 minute |
| `git log --oneline` | Lists past commits, newest first | No |
| `git diff` | Shows edited-but-not-added lines | No |
| `git pull` | GitHub → your computer | No |

**Golden rules**

1. Four places, three commands, always in the same order.
2. `git status` before and after every command — it costs nothing.
3. A commit message says **what changed**.
4. `working tree clean` means saved on **my computer**, not published.
5. Only `git push` touches the internet.
6. GitHub Pages publishes `docs/` from `main` — files outside `docs/` are stored, not shown.
7. Wait about a minute, then **hard refresh** (Ctrl+Shift+R / Cmd+Shift+R). The browser shows an old copy until you do.

---

## New Words (కొత్త పదాలు — తెలుగు అర్థాలు)

| English | తెలుగు | Meaning |
|---|---|---|
| repository (repo) | భాండాగారం | ప్రాజెక్టు ఫైళ్లు, వాటి చరిత్ర ఉండే చోటు |
| working directory | పని ఫోల్డర్ | మనం ఇప్పుడు ఫైళ్లను మార్చే ఫోల్డర్ |
| staging area | సిద్ధం చేసే పెట్టె | పంపడానికి ఎంచుకున్న ఫైళ్లు ఉండే చోటు |
| commit | భద్రపరచడం | ఒక పేరుతో సేవ్ చేసిన స్నాప్‌షాట్ |
| commit message | సందేశం | ఏం మార్చామో చెప్పే చిన్న వాక్యం |
| push | పంపడం | మన కంప్యూటర్ నుండి GitHub కు పంపడం |
| pull | తెచ్చుకోవడం | GitHub నుండి మన కంప్యూటర్‌కు తెచ్చుకోవడం |
| remote / origin | దూరపు కాపీ | ఇంటర్నెట్‌లో ఉన్న మన ప్రాజెక్టు కాపీ |
| branch | కొమ్మ | పని జరిగే ఒక దారి (ఇక్కడ `main`) |
| GitHub Pages | వెబ్‌సైట్ సేవ | `docs` ఫోల్డర్‌ను వెబ్‌సైట్‌గా చూపే సేవ |
| hard refresh | గట్టి రిఫ్రెష్ | పాత కాపీ వదిలి కొత్త పేజీని తెచ్చుకోవడం |
