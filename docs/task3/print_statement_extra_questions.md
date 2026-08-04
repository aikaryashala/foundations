# The Print Statement — Extra Question Bank

Finish the main question bank first — these questions continue from it, so the parts here are named **D, E, F, G**. The rules are the same: answer **on paper** with the cell method — one letter or digit per cell, a dot `·` in every space cell, `↵` for every Enter.

One more rule, used heavily in Part E:

> A print does **not** press Enter by itself. The screen moves to a new row only where a `↵` is output. If a print has no `\n` at the end, the **next** print continues on the **same row**.

Write your answers in your notebook. Answers are **not** in this file.

---

# Part D — Use a Value More Than Once

A variable can appear in a print as many times as needed — it is only being **read**.

**D1.** Given:

```
name = "siva"
```

Required output:

```cells
siva siva siva↵
```

**D2.** Given:

```
a = 7
b = a + a
```

Required output:

```cells
7 + 7 = 14↵
```

**D3.** Given:

```
m = 10
```

Required output:

```cells
Super! You scored 10 out of 10.↵
```

**D4.** Given:

```
name = "Ravi"
```

Required output:

```cells
Ravi! O Ravi!↵
```

---

# Part E — More Than One Print

**E1.** What exactly appears on the screen? (Careful — count the rows.)

```
print "om"
print "shiva"
```

**E2.** Given:

```
name = "om"
```

Write **two** print statements that together produce:

```cells
om namah↵
om shiva↵
```

**E3.** Given:

```
n = 3
a = 1 * n
b = 2 * n
c = 3 * n
```

Write **three** print statements, one per row, that together produce:

```cells
1 X 3 = 3↵
2 X 3 = 6↵
3 X 3 = 9↵
```

**E4.** What exactly appears on the screen? (Careful — three prints, but how many rows?)

```
print "om "
print "namah\n"
print "shiva\n"
```

---

# Part F — Print the Maths Sentence

The `+`, `X`, `/`, `=` you see in these outputs are **not** computed — they are letters inside strings. The computing happens in the assignment lines above the print.

**F1.** Given:

```
a = 2
b = 3
c = a + b
```

Required output:

```cells
2 + 3 = 5↵
```

**F2.** Given:

```
a = 2
b = 5
c = a * b
```

Required output:

```cells
2 X 5 = 10↵
```

**F3.** Given:

```
a = 20
b = 5
c = a / b
```

Required output:

```cells
20 / 5 = 4↵
```

**F4.** Given:

```
a = 2
b = 3
c = 9
d = a + b * c
```

Required output:

```cells
2 + 3 X 9 = 29↵
```

**F5.** Given:

```
a = 8
b = 9
```

Required output (two sentences on one row — check what sits between them):

```cells
Ravi got 8 marks. Sita got 9 marks.↵
```

---

# Part G — Fill the Blanks, Match the Output

Now the print statement is already written — the **values** are missing. Fill every `___` so that the program produces the required output exactly.

**G1.**

```
a = ___
b = ___
c = a * b
print a + " X " + b + " = " + c
```

Required output:

```cells
4 X 5 = 20
```

**G2.**

```
n = ___
d = n + n
print n + " + " + n + " = " + d
```

Required output:

```cells
8 + 8 = 16
```

**G3.**

```
a = ___
b = ___
c = a / b
print a + " / " + b + " = " + c
```

Required output:

```cells
9 / 3 = 3
```

**G4.**

```
a = ___
b = ___
c = a - b
print a + " - " + b + " = " + c + "\n"
```

Required output:

```cells
12 - 5 = 7↵
```

---

When you finish, check yourself against the extra answer key — and read the **reasoning**, not just the final cells. In Part E especially, check *where each row ends and why*.
