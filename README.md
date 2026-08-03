# Paper-First Programming Worksheets

A static educational site of programming worksheets and question banks for beginner
students (Telugu speakers learning in English). The tasks are **paper-first**: students
read short code snippets and write variable values in their notebooks, line by line —
no computer is needed to practise. Paper is the computer; the student is the processor.

The folder is fully self-contained — all links are relative, so it can be moved
anywhere and everything keeps working.

## Structure

```
project_tasks/
├── CLAUDE.md      ← project conventions: file naming, content formats,
│                     viewer-template customization, add-a-task checklist
├── README.md      ← this file
└── docs/
    ├── index.html ← site root; one line per task with [Questions] [ans] links
    └── task1/
        ├── variables_and_arithmetic_worksheet.md / .html
        ├── variables_and_arithmetic_questions.md / .html
        └── variables_and_arithmetic_answers.md  / .html
```

Each task is six files: a worksheet (the lesson), a question bank (questions only),
and an answer key (with reasoning) — each markdown file paired with an HTML viewer
that renders it in the browser.

## Task 1 — Variables and Arithmetic: Trace the Values

Snippets use assignments and `+ - * / %` only — no `print`, no data types, integers
throughout, at most 3 variables (`a`, `b`, `c`), no swap logic. The core pattern is one
variable updated 3–4 times, with the student writing states after every line
(`a: 6 → 12 → 7 → 3`).

- **Worksheet** — 7 iterations, one idea each: a variable is a box with a name; a new
  value erases the old; `a = a + 3` (right side first, then store); the state-table
  method; `/` keeps only the quotient, with `%` as its pair; a second variable gets a
  copy; precedence and brackets. Each iteration has a setup / task / observation
  structure and a takeaway to say out loud, followed by self-check practice snippets,
  a one-page operator reference, and a Telugu vocabulary table
  (కొత్త పదాలు — తెలుగు అర్థాలు).
- **Question bank** — 14 multiple-choice + 10 fill-in-the-blanks + 8 full state traces.
  No answers in the file. Distractors target the real traps: `17 / 5` giving 3 (not
  3.4), precedence vs left-to-right, digit-gluing instead of arithmetic.
- **Answer key** — every answer with reasoning; the trace questions show complete
  state tables. Students are told to check the reasoning, not just the final numbers.

## Viewing locally

The viewers fetch their sibling `.md` file, so opening them via `file://` won't work
(the page explains this if you try). Serve over HTTP:

```
cd docs
python3 -m http.server 8000
```

Then open <http://localhost:8000/>.

## Adding a new task

Follow the checklist at the bottom of [CLAUDE.md](CLAUDE.md): create `docs/taskN/`,
write the three markdown files (verifying all arithmetic by hand), copy the three
viewer HTMLs from an existing task and update the six customization spots (title,
brand, topbar chips, `hr` marker character, `MD_FILE`, localhost URL), then add the
task's line to `docs/index.html`.
