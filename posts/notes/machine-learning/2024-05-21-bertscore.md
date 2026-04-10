---
date: '2024-05-21'
title: 'BERTScore'
---
Analogously to common metrics, BERTScore computes a similarity score for each token in the candidate sentence with each token in the reference sentence. However, instead of exact matches, we compute token similarity using contextual embeddings.

Uses contextualized word embeddings to calculate similarity, making it an improvement to systems like [[BLEU]] which are string similarity measures. 

