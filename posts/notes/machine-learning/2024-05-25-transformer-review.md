---
date: '2024-05-25'
title: 'transformer review'
---

At each layer of a transformer, to compute the representation of a word i we combine information from the representation of i at the previous layer with information from the representations of the neighboring words. The goal is to produce a contextualized representation for each word at each position.

As with the overall transformer, a self-attention layer maps input sequences (x1, ..., xn) to output sequences of the same length (a1, ..., an) (words). When processing each item in the input, the model has access to all of the inputs up to and including the one under consideration, but no access to information about inputs beyond the current one. 

We have K, Q,  V for each input vector. The score between a current focus of attention, xi, and
an element in the preceding context, x j, consists of a dot product between its query
vector qi and the preceding element’s key vectors k j (how much attention to pay to each key?). We divide the scores by d_k and then softmax, to get weights for each original value vector. The sum is the output of self-attention, and represents the influence of *context* on the input vector.


![[Screenshot 2024-05-21 at 8.36.44 PM.png]]



### encoder-decoder

With just the decoder, we are doing next-word prediction. At each output timestep, a token is sampled from the model’s predicted distribution and the sample is fed back into the model to produce a prediction for the next output timestep, and so on. A Transformer decoder (without an encoder) can be used as a language model (LM). 

Radford et al. 2019: Language models are unsupervised multitask learners

