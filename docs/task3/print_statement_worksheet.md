# The Print Statement — Every Space Counts

**Goal.** Until now our programs only stored values in boxes — nobody could *see* anything. The `print` statement shows characters on the screen. Your job on this sheet: predict the output **exactly**, character by character, and write print statements that produce a required output **exactly**. One wrong space is a wrong answer — that is not strictness, that is how computing works.

**You need:** a notebook, a pencil, and the state-table method from Task 1.

> **The golden rule of this sheet**
> `print` shows **exactly** the characters you give it — nothing more, nothing less.
> Everything between quotes is output as it is (the quotes themselves are **not** printed), and a **space is a character too**.

---

## Iteration 1 — `print` shows a string

**a. What we set up**

Text inside quotation marks is called a **string** — a row of characters. This program has one line:

```
print "Namasthey"
```

**b. Task**

Write in your notebook exactly what appears on the screen. Think: are the quotation marks part of the output?

**c. Observation (what you should find)**

```
Namasthey
```

The quotes are **not** printed. They only mark where the string begins and ends — like the walls of a box: the walls hold the value, but the walls are not the value.

**Takeaway to say out loud:** "Quotes are the walls of the text — the walls are not printed."

---

## Iteration 2 — `+` glues two strings

**a. What we set up**

```
print "Murali" + "Krishna"
```

**b. Task**

Predict the output. Does `+` put anything between the two strings?

**c. Observation (what you should find)**

```
MuraliKrishna
```

`+` glues the second string to the end of the first — and adds **nothing** of its own. No space appears unless *you* write one.

**Takeaway to say out loud:** "`+` glues; it never adds a space by itself."

---

## Iteration 3 — Spaces are characters, and they live inside quotes

**a. What we set up**

Three prints that differ only in spaces:

```
print "Murali " + "Krishna"
```

```
print "Murali" + " Krishna"
```

```
print "Murali " + " Krishna"
```

**b. Task**

Write the three outputs in your notebook. Paper trick: put a small dot `·` under every space you write, so you can **count** them.

**c. Observation (what you should find)**

```
Murali Krishna
Murali Krishna
Murali  Krishna
```

The first two outputs are **identical** — the space can sit at the end of the first string or at the start of the second; the output cannot tell the difference. The third has **two** spaces, because you wrote two: one inside each string.

**Takeaway to say out loud:** "A space is a real character — count every single one."

---

## Iteration 4 — A variable inside a print

**a. What we set up**

A box can hold a string too:

```
name = "Krishna"
print "Namasthey, " + name
```

**b. Task**

Predict the output. What does `print` do when it meets a variable name?

**c. Observation (what you should find)**

```
Namasthey, Krishna
```

`print` replaces the variable with its **current value** — the same rule as the right side of `=` in Task 1: names are read, values are used.

**Takeaway to say out loud:** "A variable in a print is replaced by its current value."

---

## Iteration 5 — Numbers print as digits, and the glue rule still applies

**a. What we set up**

```
age = 19
print age + "years old."
```

**b. Task**

Predict the output *exactly*. Is it properly formatted? If not, fix the print statement.

**c. Observation (what you should find)**

```
19years old.
```

Squashed! `+` glued `19` straight onto `years` because no one wrote a space. The fix goes **inside the quotes**:

```
print age + " years old."
```

```
19 years old.
```

**Takeaway to say out loud:** "The space your eye wants must be written inside the quotes."

---

## Iteration 6 — Building a whole sentence

**a. What we set up**

A print can alternate strings and variables, glued left to right:

```
cost = 20000
print "The cost of computer is Rs." + cost + " more."
```

**b. Task**

Write the output. Then check these two rejected attempts against the required output `The cost of computer is Rs.20000 more.` — find each mistake by comparing character by character:

```
print "The cost of computer is Rs. " + cost + " more."
```

```
print "The cost of computer is Rs." + cost + "more."
```

**c. Observation (what you should find)**

The correct output:

```
The cost of computer is Rs.20000 more.
```

The first attempt prints `Rs. 20000` — an extra space after `Rs.`. The second prints `20000more.` — a missing space before `more.`. Both are wrong, even though every word is right.

One more shape — a print can also **start with a variable**, with small strings as separators between values:

```
num1 = 2
num2 = 3
num3 = 4
print num1 + ", " + num2 + ", " + num3 + "."
```

```
2, 3, 4.
```

Each `", "` is just two characters — a comma and a space — glued between the values.

**Takeaway to say out loud:** "Match the required output character by character — spaces included."

---

## Iteration 7 — Do the maths first; print only glues

**a. What we set up**

```
a = 2
b = 3
c = a + b
print "The sum of " + a + " and " + b + " is " + c + "."
```

**b. Task**

Trace the three assignment lines with a state table, then write the output.

**c. Observation (what you should find)**

```
The sum of 2 and 3 is 5.
```

Line 3 is ordinary Task-1 arithmetic: `c` becomes `5`. The print line does **no maths** — it only glues pieces of output: string, variable, string, variable, string, variable, string.

**Takeaway to say out loud:** "Compute in assignment lines; print only glues the pieces."

---

## Iteration 8 — `\n`, the Enter character

**a. What we set up**

There is one character you cannot see but can write: **new line** — what the Enter key makes. Inside a string it is spelled with two symbols, `\n`, but it is **one** character. In our notebook outputs we draw it as `↵`.

```
print "Namasthey\n"
```

**b. Task**

Write the output, drawing the invisible character as `↵`. Then write the output of:

```
a = 2
b = 3
c = a + b
print "The sum of " + a + " and " + b + " is " + c + ".\n"
```

**c. Observation (what you should find)**

```
Namasthey↵
```

```
The sum of 2 and 3 is 5.↵
```

The `\n` is glued at the end of the string like any other character — it just happens to be invisible, so we mark it with `↵` on paper.

**Takeaway to say out loud:** "`\n` means press Enter — on paper we draw it as `↵`."

---

## Practice on paper

**P1.** Write the exact output of each print (dot every space, `↵` for `\n`):

```
print "Good" + "Morning"
```

```
print "Good " + " Morning"
```

```
name = "Ravi"
print "Hello, " + name + "!\n"
```

**P2.** Given the lines below, write the print statement that produces exactly `Ravi is 15 years old.↵`

```
name = "Ravi"
age = 15
```

**P3.** Given the lines below, write the print statement that produces exactly `1, 2, 3.`

```
num1 = 1
num2 = 2
num3 = 3
```

**Check yourself:** P1 — `GoodMorning`; `Good  Morning` (two spaces); `Hello, Ravi!↵`. P2 — `print name + " is " + age + " years old.\n"`. P3 — `print num1 + ", " + num2 + ", " + num3 + "."`.

If any space surprised you, re-read the iteration it comes from.

---

## One-page reference

| Rule | Example | Output |
|---|---|---|
| Quotes are not printed | `print "Hi"` | `Hi` |
| `+` glues, adds nothing | `print "a" + "b"` | `ab` |
| Spaces live inside quotes | `print "a " + "b"` | `a b` |
| A variable becomes its value | `x = 5` then `print x` | `5` |
| Numbers glue like text | `print x + "kg"` | `5kg` |
| `\n` = Enter, drawn `↵` | `print "Hi\n"` | `Hi↵` |

**Golden rules**

1. Output is exactly the characters you give — nothing more, nothing less.
2. `+` never adds a space; every space is written inside quotes.
3. A variable in a print is replaced by its current value.
4. Compute in assignment lines; print only glues.
5. Check against the required output character by character.

---

## New Words (కొత్త పదాలు — తెలుగు అర్థాలు)

| English | తెలుగు | Meaning |
|---|---|---|
| print | ముద్రించు | తెరపై అక్షరాలను చూపించే ఆదేశం |
| string | అక్షరాల వరుస | quotes (`" "`) మధ్య ఉండే అక్షరాల వరుస |
| quotes | కొటేషన్ గుర్తులు | string ఎక్కడ మొదలై ఎక్కడ ముగుస్తుందో చూపే గుర్తులు |
| output | అవుట్‌పుట్ / ఫలితం | తెరపై కనిపించే అక్షరాలు |
| space | ఖాళీ | కనిపించని అక్షరం — అదీ output లో భాగమే |
| character | అక్షరం | ఒక్క గుర్తు — అక్షరం, అంకె, ఖాళీ, ఏదైనా |
| glue / join | కలపడం | `+` తో రెండు ముక్కలను చివర చివరకు అతికించడం |
| newline | కొత్త లైన్ | Enter నొక్కినట్టు — `\n` గా రాసి, `↵` గా గీస్తాం |
