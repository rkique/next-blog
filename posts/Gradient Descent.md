created: 20200704001415161
modified: 20200716030551355
revision: 8-dd197e952c92b3104641a1dfd5f8c964
tags: nlp math
title: gradient descent
type: text/vnd.tiddlywiki

The [[ADAM optimizer]] side of things, or the //solution we try to fit the problem to//.
//What we talk about when we talk about learning, is just minimizing a cost function.//

[MNIST].
We have a structure set up for learning weights and biases in our [[Perceptron]]. Now how do we learn these 13,000 parameters?

Well, the perceptron is a ''supervised learning'' model, as it needs to know what digit is actually correct (you guessed "7"? It's actually "1". Remember!)
What it boils down to is trying to find the //minima// of a function -- [[perplexity]] is a good example of this, because we want to //minimize// perplexity to //maximize// probability. Perplexity is a //cost// function for a language model. 

For MNIST, we define a cost function as the average of the //squares of the differences// for each of our 10 digit probabilities vs the truth for any one sample. This is known as Mean Squared Error, and its useful because its always positive, or 0 when completely correct. We define cost as Mean Squared Error because its more informative than a more direct metric like "images identified correctly"; as a smooth function, we can determine which way to step much easier. 

We take the average cost over one run through the training sample (an //epoch//) and use this to gauge how bad the computer is currently at its job. Now for each of the parameters, we will try to figure out which way to increment in order to get a lower cost. 

It appears pretty simple for a single parameter and function: If we calculate the slope (FoD), we can shift the parameter right if the slope is negative, and left if the slope is positive. This will approach, at least, ''a local minima.'' We can make this faster by making step size proportional to the slope. (If we're very wrong, go very quick). 

Complication: Let's consider a function with 2+ parameters. Now we need to consider -- which //direction// decreases our function space best? Through multivariable calculus, we know that the negative gradient of the function is the best direction. The length of the gradient vector also helps us know how far to step, which is again proportional to the gradient. The proportional factor is determined by the learning rate, $$n$$. We can apply the negative gradient vector $$-\Delta C(W) $$ to our weights to nudge them in the right direction.

We have
$$\Delta C = \nabla C * \Delta v$$ (∇C  relates changes in v to changes in C, just as we'd expect something called a gradient to do.)

If we choose $$\Delta v$$ as 
Δv=−η∇C

Then 
$$\Delta C $$ = −η∥∇C∥2, which is always negative and proportional to n!

This process of nudging towards the minimization of a cost function is known as ''[[Backpropagation]]''. We can interpret the array of nudges from the gradient by looking at the relative value of these nudges: those were determined the carry the most weight in the final output. Every "step" has different implications in different dimensions, and its higher in dimensions with more weight.

Additionally: ''Local minima are roughly of equal quality.''



