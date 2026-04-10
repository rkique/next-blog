---
date: '2024-06-19'
title: 'Layer Normalization'
---

In this paper, we transpose batch normalization into layer normalization by computing the mean and variance used for normalization from all of the summed inputs to the neurons in a layer on a ==single training case.==

- Alternative to batch normalization
	- distribution of the summed inputs over a minibatch of cases
- Distribution of inputs over each layer per training sample.
- uses same $\mu, \sigma$ across layers for single training case.
- invariant to scaling and shift of weight matrix, but not of weight vectors
![[Screenshot 2024-06-02 at 12.16.13 PM.png]]
![[Screenshot 2024-06-02 at 12.16.48 PM.png]]
![[Screenshot 2024-06-02 at 12.17.02 PM.png]]
