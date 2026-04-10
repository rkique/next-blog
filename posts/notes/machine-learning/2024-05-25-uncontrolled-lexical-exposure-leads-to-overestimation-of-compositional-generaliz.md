---
date: '2024-05-25'
title: 'Uncontrolled Lexical Exposure Leads to Overestimation of Compositional Generalization in Pretrained Models'
---
Or, simply: 
seeing examples of word usage in the CCCC allow large transformer models to fake compositional generalization with the said word in different syntactic roles.

This was tested for by substituting items in the lexicon with novel character sequences, feeding the model the COGS data, and testing for generalizability.

TODO: research COGS benchmark
[[lexical generalization]]
- ( Weißenhorn et al. 2022) "lexical generalization is essentially a solved problem for seq2seq models"


It could be memorization all the way down:

> Imagine that the famous wug test (Berko, 1958) was in the form of This is a slug. Now there are two of them. There are two __., with the real word slug in place of wug. Even if a subject produces the expected ending /z/, this result cannot serve as evidence for the existence of an abstract pluralization rule, because prior observations of slugs could have been retrieved from memory. The same analogy applies to using real words as context-controlled lexical items in compositional generalization benchmarks when pretrained models are being tested.


> Using the COGS benchmark of Kim and Linzen (2020), wetest two modified evaluation setups that control for this issue: (1) substituting context-controlled lexical items with novel character sequences, and (2) substituting them with special tokens represented by novel embed-dings. We find that both of these setups lead to lower generalization performance in T5(Raffel et al., 2020), suggesting that previously reported results have been overestimated due to uncontrolled lexical exposure during 

> Our results support the conclusion that the previously reported generalization performance of pretrained models has been substantially overestimated, and furthermore highlight the surprising sensitivity of the models’ generalization behavior
to the choice of the type of the context-controlled lexical items.

