created: 20200703231232137
modified: 20200705190334628
revision: 24-14bdd53c311c6b1b685937133ac86ce4
tags: nlp
title: Perceptron
type: text/vnd.tiddlywiki

The most basic neural network. From 3b1b deep learning 1: https://www.youtube.com/watch?v=aircAruvnKk

A multilayered perceptron relies on a simple feed forward between each layer.
With activationWeights as an array of float arrays, activationBiases an array of floats, and a as activation value array, this can be written as

```
def feedforward(self, a):
    for b, w in zip(self.activationBiases, self.activationWeights):
        a = sigmoid(np.dot(w, a) + b)
    return a
```

We are calculating an array of sigmoids of (the sum of dot products of the corresponding weight array and the value array, plus bias). These are ''sigmoid'' neurons, which allow for a smooth step from negative to positive values (where a binary function would consider only 0/1). 

Any smooth function involving $$wx+ b$$ will have a $$\Delta$$output that scales with $$\Delta w$$ $$\Delta b$$.
[img[https://hvidberrrg.github.io/deep_learning/activation_functions/assets/sigmoid_function.png]]

!!!!MNIST
The input layer is the grayscale value of an individual pixel. Each hidden layer attempts to identify a subset of features of the image, and it does so by setting up weighted sums: these weights favor certain patterns in previous layers (up to and including the input layer), which correspond to higher-level features. We also add a bias to the end to make sure that these sums are not too high and defaulting to activation. This is like a threshold: the higher the bias, the more likely the neuron is to be activated.

We then use a sigmoid function or other softmax function to normalize the weighted sum, so that the activation value is really a [[probability mass function|probability and information theory]]: one that ultimately returns an activation likelihood between 0 and 1. 

Once we have set up these weights or //parameters//, we can use a stochastic optimizer like [[ADAM |ADAM optimizer]] to learn the optimal weights to make correct predictions.

Perceptrons cannot determine real features, like edges and loops-- they will confidently assign predictions to random noise. Their weight mappings (hey, this is like [[schema Painting]]) are really scattered, and noncontiguous. This lack of real understanding, at least for MNIST, means they also cannot draw digits -- they can only classify them. CNNs and LSTM models can do much better at both of these.

!!!Why use 10 outputs when we could have 4?

We could represent digits 0-9 with four digits alone, for sure. However, there is no corresponding hierarchy in the input class that mirrors this. If we had four outputs making binary decisions, the first output would try to make a class decision -- does this image fit with this 5 digit concept group or these 5 digit concept group? Yet there are no digit concept groups! 

!!!!NAND

We can create a perceptron that simulates a NAND gate with the following specifications: 

```
we have two inputs to our perceptron, x1 and x2. These inputs have weights of -2. We have a bias of 3. If only one input is activated, or neither is, our value remains positive and the perceptron is activated. If BOTH inputs are activated, our value becomes negative and the perceptron is not activated.
```

This allows us to simulate any computing device! Yet the capacities are not limited to computation. This is because we can teach the network how to //learn// the weights and biases of artificial neurons in a radically different way than traditional logic gates.

