---
date: '2023-02-16'
title: 'deep_learning_2'
---
1. We use cross-entropy loss because it takes an output vector of probabilities and one-hot y, with length m for the number of categories for a single sample. It calculates a vector across each possible class. On the other hand, MSE is the mean squared error of single output values, and it returns the mean of squared errors for a model across many samples. It's better for regression tasks, where you want to fit a line to a collection of points. Additionally, because MSE uses decimal representations, it will take longer to calculate small probabilities.

sum across categories: y_ilog(P_i)

y_i

In lecture, you learned about gradient descent. What is a gradient? How is it different from a partial derivative? How do they relate? (2-4 sentences)

num * S num * t num * u
s * t, t * u 

1. A gradient is a collection of partial derivatives for a scalar function. (?) It is different from a partial derivative because that is part of a gradient.

2. We negate this quantity because the partial derivative is, loosely speaking, the slope in the upwards direction. To minimize the loss by changing the weights, we want to go downwards.

3. We calculate the partial derivative for all weights because all weights contribute to the model. We should not only reward correct weights; if a weight contributed to an incorrect answer, it should be lowered. 

4. Vectorized operations allow us to use parallelized computation, and low-level routines like BLAS. GPUs can run vectorized operations faster than traditional architecture can.

5. Gradient descent ends up at the bottom. The model has two weights I think. If we use regular gradient descent, we won't ever reach the absolute minimum. This is because the gradient of the loss with respect to x and y is (0,0), and so no update will take place. 

6. Empirical risk is the risk observed in the sample dataset. It differs from true risk because the sample dataset may not be representative of the actual risk. We want to minimize empirical risk so we can be right.

7. Okay



