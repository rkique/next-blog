---
date: '2024-05-26'
title: 'Scope Disambiguation'
---
---
aliases:
  - Scope Ambiguities in LLMs
---
TODO
- Read Pavlick et al. 2022: [[Semantic Structure in Deep Learning]]
- Read Anderbois et al. 2012 on linear order, grammatical roles, and lexical effects.


![[Screenshot 2024-05-25 at 10.32.23 PM.png]]

"The models with higher accuracy scores, however, see more severe drop-offs in the
control setting, most notably with GPT-4, which sees its accuracy drop to 75% in the control setting." This indicates that the model is truly evaluating the statement.

![[Screenshot 2024-05-25 at 10.41.33 PM.png]]



"Every farmer owns a donkey"
- surface scope: $\forall y [\text{farmer}(y) \rightarrow \exists x \text{donkey(x)} \land \text{owns}(y,x)]$
	- for each farmer, there exists a donkey that the farmer owns.
- equivalent to scope: $\forall y \text{farmer}(y) \rightarrow \exists x \text{donkey(x)} \land \text{owns}(y,x)$
	- For each farmer, there exists a donkey that the farmer owns.
	- but this is ill-formed (the issue is that $y$ is not bound in the consequent)

- inverse scope: $\exists x [\text{donkey}(x) \land \forall y \text{farmer}(y) \rightarrow \text{owns}(y,x)$.
	- every farmer owns the same donkey.
	- harder to access 

 - Built upon the quantifier scope dataset presented by AnderBois
	- 1700 sentences and phrases from LSAT
	- filtered for interacting quantifiers, and human evaluated to 75% golden cutoff
- 41 had inverse scope reading, 112 had surface scope


### part 2: are LLMs sensitive to the existence of scope ambiguity?

We therefore construct a small-scale dataset, consisting of 38 manually handcrafted datapoints, where each datapoint includes a scope ambiguous sentence (S), a matching non scope-ambiguous control sentence (Sc), and two follow-up phrases (F1 and F2), yielding a total of 152 sentence-continuation pairs. 