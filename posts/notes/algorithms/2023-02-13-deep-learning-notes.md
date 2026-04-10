---
date: '2023-02-13'
title: 'deep_learning_notes'
---
## Deep Learning review
a simple neural network (one layer) is conceptualized as $$y = logit = w_1x_1 + w_2x_2 + ... + w_kx_k + b$$

or really, logit = Wx + b.

With multiple outputs, m, we would have m sets of linear functions and sets of weight vectors, as well as m biases. Then we'd have W as 3 x 7 (which is 3 x 1 weights, with seven outputs). 
x is inputs (7 x 1)
b is biases (3 x 1)

m is outputs, n is inputs. W is (m, n) n,1 -> m,1

$$ Wx +  b = (m, n) * (n, 1) + (m, 1) $$

$$\Delta W = -a \dot \Delta_w L$$

Computing a batch of outputs (matmul):

(m, n) * (n, 10) + (m, 10) = (m, 10)

(m, 10) can be implicitly broacasted by NumPy, Tensorflow, PyTorch from (m, 1). 

In general, we can operate on any two arrays, when starting with trailing dimensions, all dimensions are equal or one of them is 1. 

Ex (matmul): (m, n) * (n, 10) + (m, 1) = (m, 10)

tf.constant('hello world').numpy().decode() to get string
tf.constant('hello world').numpy() to get byte-decoded
tf.add(x, W) == x + W

tf.random.normal([2,2]) gives 2 by 2 random values

tf.argmax will return the index with largest value across the axes of tensor

B = tf.constant([[2, 20, 30, 3, 6], [3, 11, 16, 1, 8],
                 [14, 45, 23, 5, 27]])

tf.argmax(B) = tf.argmax(B,0) = [2,2,0,2,2]
tf.argmax(B,1) = [2,2,1]
    
tf.transpose(x)
tf.shape(x)
tf.reduce_mean(x, axis=1)
tf.reshape(x, [-1]) #flattens to 1-D

with tf.GradientTape() as tape:
    loss = model.get_loss(inputs, outputs)

grads = tape.gradient(loss, [model.W, model.b])






