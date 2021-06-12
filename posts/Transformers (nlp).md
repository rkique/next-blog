created: 20200703220129581
modified: 20200716025849775
revision: 9-6c2b2e4676f80b3edc3afa76e7bf2fed
tags: nlp literature
title: Transformers
type: text/vnd.tiddlywiki

https://www.youtube.com/watch?v=iDulhoQ2pro
https://arxiv.org/abs/1706.03762

Attention allows transformers to have long-term memory. They can access the entire previous context if necessary.

Traditionally, NLP uses RNNs, which take the last hidden state and a current input, and compute a new hidden state. 
For decoding, they take the current hidden state, and the last input to produce a new word. This is difficult because RNNs can only really look back 1 step, and can't really learn long range dependencies.  One to one translation also doesn't help.

!!Attention

With Attention the decoder can look directly at the hidden states earlier. It knows which hidden states are most relevant by using a key-query system (with a softmax architecture). Attention uses ALL of the previously produced output and the training set, in one step. Looking at the previously produced output is known as self-attention. These are ''autoregressive models'' because they consume previous output as additional input.

We encode the input and output embeddings into the transformer with trignometric functions to store positions.

We have three types of attention: 

* we encode an input sentence with attention. It discovers interesting things and builds key-value pairs -- attributes that can be useful.
* , we encode output sentence with attention.  It discovers useful queries that can help return good results.
* Then we have an attention that combines the source/input and target/output sentences: source provides a Value, and a Key. Output provides a Query. 

This attention calculates the dot product of keys and queries, which gives you the angle between the two (a measure of similarity). In high dimensions, this often turns out to be around 0 because values are at right angles [0,0,1] [1,0,0] etc. If a Key and a Query align, then we can [[softmax]] it and see that it matches a value to return.

When we multiply our softmaxed query-key products and match them to the values, we will select a value that can be used as a prediction!

Why is attention better? It reduces path lengths, making results faster. The architecture reduces the flow steps from one state to another.
