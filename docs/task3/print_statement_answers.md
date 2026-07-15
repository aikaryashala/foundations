# The Print Statement — Answers with Reasoning

Check the **reasoning**, not just the cells. Count the empty cells in your notebook answer against the key's — one wrong space means the answer is wrong, so find *which* cell and *why*.

---

# Part A — What Exactly Is Printed?

**A1.**

```cells
om namah
```

The quotes are not printed; everything between them is — including the one space between the words, because it was written inside the string.

**A2.**

```cells
shamboshiva
```

`+` glues end to end and adds nothing. Nobody wrote a space, so there is no empty cell.

**A3.**

```cells
shambo shiva
```

One empty cell, written inside the first string (`"shambo "`).

**A4.**

```cells
shambo shiva
```

Same output as A3 — here the space is its own little string, `" "`, glued between the words. Where the space is *written* doesn't matter; what is *output* is identical.

**A5.**

```cells
shambo  shiva
```

**Two** empty cells — one at the end of `"shambo "`, one at the start of `" shiva"`. `+` glued them side by side. If you drew one dot, you missed one.

**A6.**

```cells
om siva namah
```

`name` is replaced by its current value `siva`. The spaces around it are written inside the strings: `"om "` ends with one, `" namah"` starts with one.

**A7.**

```cells
I am 12 years old.
```

`age` becomes `12`. The spaces around it live inside the strings: `"I am "` ends with a space, `" years old."` starts with one.

**A8.**

```cells
5 and 3
```

`a` and `b` are replaced by their values, and `" and "` supplies the empty cells on both sides. Note: no arithmetic happened — the print only glued `5`, ` and `, `3`.

**A9.**

```cells
Score:95↵
```

No empty cell after the colon, because no space was written inside `"Score:"`. The `\n` at the end is the Enter — drawn as `↵` in its own cell.

**A10.**

```cells
2, 3, 4.
```

The print starts with a variable, and each `", "` glues a comma and a space between values; the final `"."` closes the sentence. No `\n`, so no `↵`.

**A11.**

```cells
10 - 20 - 30
```

The separator string `" - "` carries a space on **each side** of the dash — three cells between every pair of values.

**A12.**

```cells
6,7.
```

The separator here is `","` — a comma **with no space**. Compare with A10: the empty cell after a comma appears only if a space is written inside the quotes.

**A13.**

```cells
namah↵
shiva↵
```

One print, two rows. The first `\n` ends the first row — everything after it continues on a new row. The second `\n` ends the second row.

**A14.**

```cells
om↵
↵
shiva
```

Two Enters side by side make an **empty row** — a row containing only `↵`. And there is no `↵` after `shiva`, because no `\n` was written at the end.

---

# Part B — Does It Match? Fix It.

**B1. Fix:** `print "om " + "shiva"`

As given, the output is `omshiva` — no one wrote a space. Add it inside a quote: `"om "` (or `" shiva"` — same output).

**B2. Fix:** `print age + " years old."`

As given, the output is `19years old.` — `+` glued `19` straight onto `years`. The space must be written at the start of the string.

**B3. Fix:** `print "The cost of computer is Rs." + cost + " more."`

As given, the output is `The cost of computer is Rs. 20000 more.` — one **extra** empty cell after `Rs.`. The required output has `Rs.20000` with no space.

**B4. Fix:** `print "Total marks = " + marks`

As given, the output is `Total marks =87` — missing the empty cell after `=`. The required output has a space on both sides of `=`; the one after it must be written inside the string.

**B5. Correct** — the output is exactly `Ravi and Sita`: the middle string `" and "` carries one space on each side. Nothing to fix.

**B6. Fix:** `print "Sum is " + a + ".\n"`

The cells match up to the full stop, but the required output ends with `↵` — an Enter. Add `\n` inside the final string.

**B7. Fix:** `print a + ", " + b + ", " + c + "."`

As given, the output is `5,10,15.` — the separators `","` have no space, but the required output reads `5, 10, 15.` with an empty cell after each comma. The space goes inside the separator strings: `", "`.

**B8. Fix:** `print "om\n" + "shiva\n"`

As given, the output is `omshiva↵` — one row, because there is no `\n` after `om`. The required output has two rows, so each word needs its own Enter. (`print "om\nshiva\n"` — one string with both Enters — produces the same two rows and is equally correct.)

---

# Part C — Write the Print Statement

Any print that produces the required output cell for cell is correct; one correct version is shown, with the checking done space by space.

**C1.** `print "om " + name + " namah"`

`name` becomes `shambo`, giving `om shambo namah` — one space at the end of `"om "`, one at the start of `" namah"`.

**C2.** `print "Anu is " + age + " years old."`

`age` becomes `15`. Spaces around it: one at the end of `"Anu is "`, one at the start of `" years old."` → `Anu is 15 years old.`

**C3.** `print "The book costs Rs." + cost + " only."`

No space after `Rs.` — the required output reads `Rs.250`. One space before `only.`, written inside the last string.

**C4.** `print "The sum of " + a + " and " + b + " is " + c + ".\n"`

The assignments give `c = 10`. The print alternates string, variable, string, variable, string, variable, string — and ends with `\n` because the required output ends with `↵`. Output: `The sum of 6 and 4 is 10.↵`

**C5.** `print a + " times " + b + " is " + c + ".\n"`

Here the print **starts with a variable** — that is allowed. The assignments give `c = 6 * 4 = 24`, and the variables appear in the order `a`, `b`, `c`, giving `6 times 4 is 24.↵`. The strings `" times "` and `" is "` carry one space on each side, and `\n` makes the final `↵`.

**C6.** `print name + " scored " + marks + " marks.\n"`

`name` becomes `Ravi`, `marks` becomes `92`: `Ravi scored 92 marks.↵` — spaces carried by `" scored "` and `" marks.\n"`, Enter at the end.

**C7.** `print num1 + ", " + num2 + ", " + num3 + ".\n"`

Starts with a variable, then alternates: value, separator `", "`, value, separator, value, and the closing `".\n"`. Output: `7, 8, 9.↵` — one empty cell after each comma, none before.

**C8.** `print "Table of 3: " + a + ", " + b + ", " + c + ".\n"`

The opening string carries the colon **and** the space after it (`"Table of 3: "`); then values alternate with `", "` separators. Output: `Table of 3: 3, 6, 9.↵`

**C9.** `print "namah\nshiva\n"`

One string can hold both Enters: the first `\n` ends the first row after `namah`, the second ends the second row after `shiva`. (`print "namah\n" + "shiva\n"` produces the same two rows and is equally correct.)

**C10.** `print num1 + "\n" + num2 + "\n"`

`"\n"` can be its own little string, glued after each value — just like `", "` was in earlier questions, except this separator is an Enter. Output: `1↵` then `2↵`, each on its own row.
