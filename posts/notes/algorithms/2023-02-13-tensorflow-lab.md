---
date: '2023-02-13'
title: 'tensorflow_lab'
---
Tensorflow gives object classes (Tensors) with auto-diff tracking and associated workflows. 

Keras offers pre-built network components and structures
Modularized implementations of loss, accuracy, optimizers etc.

- extremely easy to prototype neural networks
- large amount of existing implementations, tutorials

eager execution executes operations immediately.

def square(x):
    return tf.multiply(x,x)

grad = tfe.gradients_function(square)

print(square(3.)) = [9.]
print(grad(3.)) = [6.]

tf.Tensor([2. 3. 4.], shape=(3,), dtype=float32)

tf.Variable allows for the training of various components during optimization. 

valid ways of initializing variables: 

```
tf.Variable([0,1])
tf.Variable(np.zeros((3,3)))

tf.Variable(tf.random.normal(shape=[3,3], stddev=.1)))
tf.Variable([[1., 2., 5.]]).numpy()
```

tf.GradientTape() records tensor computations. 

```
w = tf.Variable([[1.0]])
with tf.GradientTape() as tape:
  loss = w + w
  
grad = tape.gradient(loss, w)
print(grad)

tf.Tensor([[2.]], shape=(1, 1), dtype=float32)
```
