---
date: '2024-05-29'
title: 'Preproposal'
---
Transformer Linearity 
### introduction

### related works
Use work primarily from reputable conferences.
### problem statement
Neural language models are known to contain many real-world facts involving a subject, object, and a relation (for example, "Miles Davis plays the trumpet"). Affine linear relational embeddings have been shown to be a good approximation for propositional statements for a subset of contexts, such as bias, commonsense, factual, and linguistic relations (Hernandez et. al. 2024). However, the factors which determine relations for which LRE approximation is successful remain unclear. I aim to determine relationship classes for which LRE is suboptimal and develop alternative approximations which outperform LRE. Thus, I hope to discover new insights as to how relational knowledge in LLMs is encoded, with potential applications in LLM knowledge editing.

My research objective is twofold: (1) determine the relation classes for which LRE is a suboptimal approximator and (2) develop alternative techniques which outperform LRE on both these relation classes, and as a whole. Thus, my work hopes to achieve a better understanding of how transformers model knowledge, and have potential applications in knowledge editing in LLMs.
### approach
Building on the foundation of the LRE approximation as

But experimenting with different approaches, my summer research will model relations with linear approximations for transformer models, utilizing internal transformer subject representations as inputs to predict output tokens. In doing so, I hope to provide evidence for linearly separable subdomains within language.

- factual relations
- commonsense relations
- linguistic relations
- mathematical relations
	- is_divisible_by(#,#)
	- 
- transformer models in languages with with <S,O,R> order
	- For example, Japanese:
		"Miles Davis wa toranpetto o ensō suru"
		"Miles Davis trumpet plays"
	- We can either confirm or disprove the hypothesis brought forth that additional 
### timeline

### conclusion

### references


