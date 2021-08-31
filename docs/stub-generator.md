# Introduction

The stub generator is the program which will write in every available language the boilerplate code
you get when you open the editor. To do this, the generator needs input written using the syntax
below.

# General Syntax

Each line must contain one of the following command :

- `read <variable sequence>`
- `write <text>`
- `loop <amount> <command>`
- `loopline <amount> <variable sequence>`

A `<variable sequence>` is a sequence of space-separated variable declarations. Variable declaration
are as follows:

```
[name]:[type]
```

where [name] is a valid variable name in **camelCase** and [type] is one of the following:

- `int`
- `float`
- `long`
- `word(<length>)`
- `string(<length>)`

⚠️ A `string` can contain spaces, a `word` cannot. Therefore, only one `string` may be used in the
same sequence of variable declarations.

A `read` will collect a single line of data from the standard input.

You can ignore the length in `word` and `string` command, it's usually not important in most
languages.

# Examples

a simple example :

```
read a:int b:int c:int
```

in js would be:

```js
const [a, b, c] = readline()
  .split(' ')
  .map(x => Number.parseInt(x, 10));
```

and

```
read a:int
```

would be:

```js
const a = Number.parseInt(readline(), 10);
```

a more realistic example with `loopline`:

```
read N:int
loopline N temp:int
read direction:int pos:int
```

should/could generate such code in js ( the `toInt` function is just an helper it's not necessary):

```js
const toInt = x => Number.parseInt(x, 10);

const N = toInt(readline());
const inputs = readline().split(' ');

for (let i = 0; i < N; i++) {
  const temp = toInt(inputs[i]);
}

const [direction, pos] = readline().split(' ').map(toInt);
console.log('answer');
```

on the other hand if we had `read direction:word(5) pos:int` the 9th line of our generated code
could be:

```js
const inputs2 = readline();
const direction = inputs2[0];
const pos = toInt(inputs2[1]);
```

here's some example with `loop`:

```
read count:int
loop count write "hello world"
```

```js
const toInt = x => Number.parseInt(x, 10);

const count = toInt(readline());
for (let i = 0; i < count; i++) {
  console.log('hello world');
}
```

```
read count:int
loop count read a:int b:word(3) c:word(3)
```

```js
const toInt = x => Number.parseInt(x, 10);

const count = toInt(readline());
for (let i = 0; i < count; i++) {
  const inputs = readline();
  const a = toInt(inputs[0]);
  const b = input[1];
  const c = input[2];
}
```

so basically, everything that comes after `loop <amount>` can be a itself a command, which means the `loop` command
is recursive, so you can have for example nested loops.
note that this doesn't apply on `loopline` so you won't be seeing any nested `loopline`s

```
read n:int
loop 2 loop n read line:string(10)
```

```js
const toInt = x => Number.parseInt(x, 10);

const n = toInt(readline());

for (let i = 0; i < 2; i++) {
  for (let i2 = 0; i2 < n; i2++) {
    const line = readline();
  }
}
```

you might also encounter some words like `STATEMENT`, `INPUT` or `OUTPUT` these are the comment
parts, some brief explanation of the puzzle, you can ignore them ( because they're not required ) or
if you want, you can generate comments for them, here's a example:

```
read N:int
loopline N Z:int
write 0

STATEMENT
Print the number of distinct sums.

INPUT
N: Number of integers in the array.
Z: Each integer in the array.
```

could be something like

```js
const toInt = x => Number.parseInt(x, 10);

/**
 * Print the number of distinct sums.
 **/

const N = toInt(readline()); // Number of integers in the array.
const inputs = readline().split(' ');

for (let i = 0; i < N; i++) {
  const Z = toInt(inputs[i]); // Each integer in the array.
}

console.log('0');
```

but still, they are **not required** they can be excluded in the generated code.

# More on `string` and `word`

let's talk a little more about the gap between a `word` and a `string` let's consider this scenario

```
Aa Bb Cc
Dd Ee Ff
Gg Hh Ii
```

obviously we're getting three lines of input with each line containing three space separated strings
so we could interpret this in two ways ( more than two but let's stick to two for now):

```
read ABC:string(100)
read DEF:string(100)
read GHI:string(100)
```

ignore the length part, this would generate such code:

```js
const ABC = readline();
const DEF = readline();
const GHI = readline();
```

but what if want to help the player so that he/she can get each `word`, yep that's the best word to
describe it we would have something like this:

```
read A:word(2) B:word(2) C:word(2)
read D:word(2) E:word(2) F:word(2)
read G:word(2) H:word(2) I:word(2)
```

which will result to:

```js
const [A, B, C] = readline().split(' ');
const [D, E, F] = readline().split(' ');
const [G, H, I] = readline().split(' ');
```

and so this shows that we **won't** have something like:

```
read x:string(10) y:string(10) z:string(10)
```

this can't exist, a string is already a line of input and a read command is for a line not multiple
lines so it should be like so:

```
read x:string(10)
read y:string(10)
read z:string(10)
```

like the above example.

hope this clears up everything.

# Ok but why?

this **general syntax** belongs to Codeit puzzles. because it is a **general** syntax we can store
only this syntax and generate appropriate boilerplate code for every programming language, of course
if we had the generator

# What can you do

### make a generator

so if you want to make a contribution on this project you can start by creating a stub generator for
any language you like or need, which takes this syntax and generates boilerplate code for it so that
the players don't have to waste their time on getting the right input.

the generator should be written in `Javascript` but as stated before it can generate any language of
your choice.

### fix or improve a generator

you can also contribute by fixing an already existing generator, or improve its source code in any
sense.

# Generators

these are the languages that a generator is built for it any other language that is **not** on this
list is open for a stub generator.

- Javascript

# Credit

this general syntax specification is exactly what [codingame](https://www.codingame.com/) uses, so
take look there too if you'd like to
