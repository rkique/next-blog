---
date: '2025-05-15'
title: '(papadimitriou, jurafsky) using language models to study inductive biases in language learning (EMNLP Findings 2023)'
---


1. How does an inductive bias for recursion compare to an inductive bias for context-sensitive crossing relationships? (Which is important for language?)
2. Is a bias for pure constituent recursion better when mixed with a small number of tokens that break context-free constituency structure?
3. Does a learner biased towards learning a power-law zipfian vocabulary learn language more effectively?


Crossing discourse anaphora links in english:
"**I** voted for him even though **I** am negatively affected by his redistribution policies" **he** said. A zipfian pretraining bias makes models better at downstream language learning even when there is no correspondence between pretraining and finetuning vocabularies.

Power-law distribution of words. $r$th most common word has frequency proportional to $$\frac{1}{r+\beta^\alpha}$$
Single formal structural principle: begin with the nested-parentheses language.
Crossing Parentheses language CROSS: cross is a better inductive bias than NEST.
baselines: RAND and REP languages. Copy language is context-sensitive.

Effects of nested, cross, and crossing on downstream languages: English, Basque, Japanese. A Zipfian vocabulary distribution perplexity is significantly lower than the random distribution. Vocabulary distribution is encoded abstractly in network parameters: do not lead to an effect on the structure of the data.

Frozen pretrained transformer: without finetuning of self-attention or feedforward: fine-tuning on sequence classification tasks. Random initialized transformer against a random LSTM. Hmm.
