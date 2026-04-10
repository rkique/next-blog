---
date: '2023-05-15'
title: 'LexSem_final'
---

1. Terry says:

> "Oh I disagree. I realize it was warm here this past winter, but not every city had a
warm winter last year."

Terry uses "not every city had a warm winter last year" ($\lnot \forall x$ s.t. $P(x)$) to imply that "there exist cities that did not have a warm winter last year" ($\exists$ x s.t. $\lnot P(x)$). Rhetorically, the $\lnot \forall P$ statement Terry employs is stronger than $\exists \lnot P$ because it highlights the negative nature of the statement.
    
When Terry says "not every city had a warm winter last year", he is comparing the previous year's winter in their city (indexed by "here") to the respective previous year's winters in the set of all cities. It is possible that Terry does not consider them to be within a city, but the implication is that they are.

Warm is a scalar adjective. Terry is using the positive form of warm, understood to be warm for that individual city's winter. Clearly, a warm winter in Juneau is not the same warm winter in Orlando. Akin to "all of my children are tall (for their age)", this should be interpreted "not every city had a warm winter (for their context)". 

A positive adjective requires a comparison class $C$ and a standard $d_C$. Roughly, the context for a city's last year's winter warmness is the climate, but strictly speaking (and especially in context of climate change) the context is the previous winters in that city. [[POS warm]] describes the set

$$\{w \mid w_{\text{warmness}} > d_{C}\}$$


Here, $w$ is a winter and $w_{\text{warmness}}$ is it's degree of warmness. $C$ is the set of all past winters for that city, and $d_{C}$ is a vague standard of warmness determined by the warmnesses of all winters in $C$, $\{c \in C: c_\text{warmness} \}$. $d_C$ here is dependent on the speaker: perhaps Terry believes it is the average, five degrees above the average, or even (somewhat logically unsound) a constant degree ("It's not really a warm winter unless its 70F or above").

We have $F(x)$ as the Boolean function of a city having a warm winter last year. 

If $x_w$ is last year's winter for the city $x$, we have

$$F(x) = x_w \in \{w \mid w_{\text{warmness}} > d_{C}\}$$

The indexical "here" references the actual location of a speaker, in this case Terry. Assuming the likely interpretation that "here" references a city $x_0$, the clause "(I realize) it was warm here this past winter" says:
$$F(x_0)$$

The second clause is more complicated. 

The clause "not every city had a warm winter last year" says that for the set of all cities $X$:
$$ \lnot (\forall x \in X: F(x))$$

Thus, all together the statement is saying

$$ F(x_0) \land \lnot (\forall x \in X: x_w \in \{w \mid w_{\text{warmness}} > d_{C}\})$$

Note that $w_x$, $C$, and $d_{C}$ are fixed for individual $x$.
Also note that the vagueness in the statement relating to warmness only applies to the warmness of individual cities previous winters (whether $F(x)$ is true or false) and not to the quantifier "not every". Any vagueness that could be assigned to the broader clause, "not every city had a warm winter last year", has to do with the size of $X$, the set of all cities.

1.

> Lee: Computer science is a lot more interesting than linguistics.

> Sandy: Oh - I disagree. Linguistics is a lot more interesting than CS!

Here, interesting is a predicate of personal taste. As per Lasersohn, statements are true relative to a world, time, speech context, and a judge. Thus, when Lee says that computer science is more interesting, it is true with Lee as judge, and when Sandy says that linguistics is more interesting, it is true with Sandy as jduge.

2.
> Lee: Marvin is tall.

> Sandy: No - I disagree - he isn't tall.

There are two different ways that they can both be disagreeing and both be right. They may have different comparison classes for tall, or they may have different standards within that comparison class. 

In the first case, Lee might be comparing against all men, but Sandy is comparing against all men who are Marvin's weight. Sandy might say:

> No -- I disagree -- he isn't tall. For his weight, five feet eleven isn't tall.

In the second case, Lee and Sandy may be comparing against the same class, men who are Marvin's weight, but have different standards for tallness within that class. Sandy might say:

> No -- I disagree -- he isn't tall. Five feet eleven doesn't count as tall, even for his weight.


3.
> Lee: Toby is an elephant.

> Sandy: Wait, Toby is a reptile!

Based on our assumptions about the world, we would say that they cannot both be right, because being a *mammal* is a definitional property entailed by being an *elephant*. Because we consider mammals and reptiles to (generally) be exclusive classes, this meanst that Toby cannot be a reptile and an elephant at the same time.

While it is possible to discover that elephants are actually reptiles, we think of *elephant* as a natural kind term that refer to things that are fundamentally elephant. Based on our knowledge of the natural world, we believe individuals who are fundamentally elephant are not reptiles.

1. two words that reference other worlds

Two words that reference other worlds include *lucky* and *suprised*. 

*Lucky* says that according to the speaker, world, and time, a favorable event has occurred that is improbable: there are many possible worlds in which it did not occur. "I got lucky winning the lottery" requires reference to other worlds where I had not won the lottery.

*Surprised* says that according to the speaker, world and time, an event has occurred that is improbable: there are many possible worlds in which it did not occur. As above, "I was surprised you won the lottery" requires reference to other worlds where the event did not occur.


Two words that reference times include *undone* and *gone*. 

*undone* requires something to have been done at a previous time, as you cannot undo something that has not been done. "Her hair was undone" implies that at some previous time, her hair had been done. 

When used as a standalone adjective, *gone* means an absence where there something was previously present: "the milk is all gone" implies that at some previous time, the milk was present. 

*gone* also functions as a past participle verb, which almost by definition requires reference to other times in the past. "They've all gone home" says that at some previous time, the individuals indicated went home. 




We find it not surprising because English has Subject Verb Object word order. By Dowty's hypothesis about thematic roles, we have subjects as participants with more "agent-like" properties, and objects as participants with less.

Lee has more agent-like properties. Lee causes the event, and is sentient and volitional. Thus, Lee is the subject.

The books have more patient-like properties. They undergo a change of state (the manner of the action implies they are aligned square against the shelf) and a change of location (moved to a bookshelf). Thus, the books is the object.

If we had a verb like smelf which takes in the patient-like word first and the agent-like word second, it would make sense in an Object Verb Subject language. However, English does not follow this syntax, which is why *smelf* is surprising.
