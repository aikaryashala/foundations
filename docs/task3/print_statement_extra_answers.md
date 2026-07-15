# The Print Statement — Extra Answers with Reasoning

Check the **reasoning**, not just the cells. Any print (or set of prints) that produces the required output cell for cell is correct; one correct version is shown for each question.

---

# Part D — Use a Value More Than Once

**D1.** `print name + " " + name + " " + name + "\n"`

`name` is read three times — reading never changes a box. The two `" "` strings supply the empty cells between the words, and `"\n"` supplies the final `↵`. Output: `siva siva siva↵`

**D2.** `print a + " + " + a + " = " + b + "\n"`

The maths happened in the assignment line: `b` became `7 + 7 = 14`. The print then reads `a` **twice** and glues the pieces: `7`, ` + `, `7`, ` = `, `14`, Enter. Output: `7 + 7 = 14↵`

**D3.** `print "Super! You scored " + m + " out of " + m + ".\n"`

`m` appears twice — once after `scored`, once after `of`. Two traps: the space **after** `!` lives inside the first string (`"Super! You scored "`), and the full stop plus `\n` close the sentence. Output: `Super! You scored 10 out of 10.↵`

**D4.** `print name + "! O " + name + "!\n"`

`name` opens and closes the cry. The middle string `"! O "` carries the first `!`, a space, the `O`, and another space; the last string carries the final `!` and the Enter. Output: `Ravi! O Ravi!↵`

---

# Part E — More Than One Print

**E1.**

```cells
omshiva
```

**One row**, glued together. The first print has no `\n`, so it does not press Enter — the second print continues exactly where the first stopped. No space either: nobody wrote one.

**E2.** `print name + " namah\n"` then `print name + " shiva\n"`

Each print ends with `\n`, so each makes its own row. Both read the same `name` box. Output: `om namah↵` / `om shiva↵`

**E3.**

```
print "1 X " + n + " = " + a + "\n"
print "2 X " + n + " = " + b + "\n"
print "3 X " + n + " = " + c + "\n"
```

A multiplication table, one print per row. The `1`, `2`, `3` and the `X` are letters inside the strings; the real multiplying happened in the assignment lines (`a = 3`, `b = 6`, `c = 9`). Every row must end with `\n` — miss one and two rows merge into one.

**E4.**

```cells
om namah↵
shiva↵
```

**Two rows from three prints.** The first print (`"om "`) has no `\n`, so the second print continues on the same row — together they make `om namah↵`. The Enter at the end of the second print starts a new row, where the third print writes `shiva↵`.

---

# Part F — Print the Maths Sentence

**F1.** `print a + " + " + b + " = " + c + "\n"`

`c` became `5` in the assignment line. In the print, `" + "` and `" = "` are just three-cell strings — a space, the symbol, a space. Output: `2 + 3 = 5↵`

**F2.** `print a + " X " + b + " = " + c + "\n"`

The code multiplies with `*`, but the **output** shows the school-maths `X` — because that is what the string says. Writing `" * "` would produce `2 * 5 = 10`, which does not match. Output: `2 X 5 = 10↵`

**F3.** `print a + " / " + b + " = " + c + "\n"`

`c = 20 / 5 = 4` exactly. The `/` in the output is a letter inside `" / "`; the real division already happened. Output: `20 / 5 = 4↵`

**F4.** `print a + " + " + b + " X " + c + " = " + d + "\n"`

The assignment line uses Task-1 precedence: `b * c` first (`27`), then `+ a` → `d = 29`. The print just reports the whole expression with its answer: `2 + 3 X 9 = 29↵` — five pieces of string glue around four values... count your cells carefully.

**F5.** `print "Ravi got " + a + " marks. Sita got " + b + " marks.\n"`

The trap: between the two sentences there is a full stop **and then a space** — both live inside the middle string `" marks. Sita got "`. Miss that space and the sentences squash together as `marks.Sita`. Output: `Ravi got 8 marks. Sita got 9 marks.↵`

---

# Part G — Fill the Blanks, Match the Output

**G1.** `a = 4`, `b = 5`

The output starts with `4`, so `a` is `4`; the value after `X` is `5`, so `b` is `5`. Check the last piece: `c = 4 * 5 = 20` ✓ — matches the `20` after `=`. No `\n` in the print, so no `↵` in the output.

**G2.** `n = 8`

The same box is printed twice, so both numbers in `8 + 8` come from one blank. Check: `d = 8 + 8 = 16` ✓.

**G3.** `a = 9`, `b = 3`

From the output, `a` is `9` and `b` is `3`. Check the division: `c = 9 / 3 = 3` ✓ — the two `3`s in the output are different things: one is `b`, the other is `c`.

**G4.** `a = 12`, `b = 5`

From the output, `a` is `12` and `b` is `5`; check `c = 12 - 5 = 7` ✓. This print **does** end with `"\n"`, which is why the required output ends with `↵`.
