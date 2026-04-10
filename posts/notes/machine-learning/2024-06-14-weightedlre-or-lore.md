---
date: '2024-06-14'
title: 'WeightedLRE or LoRE'
---


- The LoRE (Linearly oriented Relational Embedding) is suitable for quickly calculating semantic relations with multiple senses. 

- This has implications for tinyML as the operation is easy to run. It should be just a weight and bias, but also needs to hold the input subj. representations for calculation. So does that mean that I need to pass the subject up to that point into the model? maybe

- For example, the English plural can take:
	- y -> ies
	- is -> es
	- ss -> sses
	- fe -> ves
- etc.

- It works by weighting Jacobian inputs by similarity to the input, and calculating a linear approximation for the function accordingly

- It should outperform the original LRE and other methods and just be really good overall.
