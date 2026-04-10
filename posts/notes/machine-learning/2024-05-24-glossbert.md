---
date: '2024-05-24'
title: 'GlossBERT'
---
==Recent studies have shown the effectiveness of incor-
porating gloss (sense definition) into neural
networks for WSD. ==

However, compared with traditional word expert supervised methods, they have not achieved much improvement. In
this paper, we focus on how to better leverage gloss knowledge in a supervised neural WSD system. We construct context-gloss pairs and propose three BERT-based models for WSD. We fine-tune the pre-trained BERT model and
achieve new state-of-the-art results on WSD task.


### traditional word expert methods

Raganato et al. (2017a) convert WSD task to a sequence labeling task, thus building a unified model for all polysemous words.

- focus on extracting manually designed fea-
tures and then train a dedicated classifier (word ex-
pert) for every target lemma.

