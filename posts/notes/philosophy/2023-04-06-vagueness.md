---
date: '2023-04-06'
title: 'vagueness'
---
### How to model something is "sort of true"

We have  different ways to use the word "tall", for example the positive, comparator, and superlative forms. 

### Positive
Lee is tall.

### Comparator
Lee is taller than Tom.

### Superlative
Lee is the tallest.

The comparative feels more more complex than the positive form; *taller* feels more complex than *tall*. However, the positive form requires a comparison class and a degree within that class, while the comparative does not. 

The solution is to adopt a phantom adjective TALL which comes before both the positive and comparative form. We may assume that implicit to the word "tall" is both a comparison class and a tallness standard implicit to that comparison class.

We must have a free slot for the comparison class, and for how you set the standard (the degree) for that comparison class:

Positive: POS([[TALL]]): 
$$
\{x| 
\exists d \text{ that is the standard of tallness for C} \\
 x \text{'s degree of tallness} \geq d\}
$$

For the other uses of tallness, the comparison class and degree are both filled.

Overt degree: "They are three feet tall" $\rightarrow$ TALL(three feet) says that the comparison class is the abstract unit "feet" and the degree of tallness is "three".

Comparative: "Anki is taller than Bo" $\rightarrow$ TALL + er says that the comparison class is the person "Bo" and the degree of tallness is their tallness.

Superlative: "Anki is the tallest". TALL + est says that the comparison class is the tallest person and the degree of tallness of people.

### Other cases

Many lexical items have versions with complements and ones without. For example, kinship terms can be used without reference to the object person, e.g.

Lee is a mother of Jerry.

Lee is a mother.

This second case can be seen as existentially quantifiying: Lee must be the *mother of* someone for us to say that "Lee is a mother". 

### transitive to intransitive

We also have a similar zero-derivation process for "wash", "bath", "shave":

I shaved myself.

I shave.

The missing argument is "shave proself". We need some way to encode that this missing argument is in fact a reflexive "proself" one, because there are certainly cases in which a verb does not trigger this rule.

For example, "I saw" does not mean "I saw myself".

