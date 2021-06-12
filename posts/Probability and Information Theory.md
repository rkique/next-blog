from [[The Deep Learning Textbook |https://www.deeplearningbook.org/contents/prob.html]].

Probability theory allows the encapsulation of uncertainty.

When attempting to predict a rate like rolling dice, we use frequentist probability.
However, when we try to predict something with a measure of uncertainty, we use Bayesian probability to denote how trustworthy our prediction really is.

Bayesian probability and frequentist probability are treated the same computationally.
Discrete distributions are across categories or finite states, while continuous distributions are across values.

!!! Probability Mass Functions

$P$ describes a probability distribution for a variable $x$ under the following common sense rules:

* when the domain of P is all possible states of x
* when all //x// in $x$ returns a P(x) between 0 and 1
* when the sum of P(x) for all possible x is 1 (encapsulating every possibility-- this is ''normalization'')

For example: the uniform distribution is $P(x = x_i) = \frac{1}{k}$ with k different states.

!!! Probability Density Functions

These sound a lot like [[transition matrix]]/ [[Equilibrium distribution]].
PDFs describe probability distributions for continuous variables, much in the same way as above. For a density function $p$:

* The domain of $p$ is all possible states of x.
* All $p(x)$, or probability density, is 0 or greater.
* The area under the curve $p(x)dx$ is 1.

The probability that x lies in the interval $[a,b]$ is $\int_{[a,b]}p(x)dx$

For example: the uniform distribution can be defined by a function $u(x;a,b)$ where [a,b] define the endpoints of the interval, and $u(x;a,b)$ is $\frac{1}{b-a}$ within the interval.

!!! Marginal Probability
The probability distribution over a subset of variables. We can compute this by summing every case for one of our variables. For example, given discrete random variables x and y, and P(x,y):

For each //x// in x, P(x = //x//) = $\sum$P(x = //x//, y = //y//) of all //y// in y.
This is known as MARGINAL probability because the sum of $(x_1, y_1), (x_1, y_2)... $ is written to the right of the x_1 row in the margin of the paper.

For continuous variables, we integrate for a dy as dy goes to 0
$p(x) = \int p(x,y)dy$

