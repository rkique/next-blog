[[Theory of Computation Notes]]

---

aliases: [inductivity, inductive, induction]
---

An inductive proof consists of a BASE CASE and an INDUCTIVE STEP.

To prove: 
$(1 + 2 + ... n)^2 = 1^3 + 2^3 + ... n^3$

Base Case: true for n = 1
$(1)^2 = 1^3$

Inductive Step: true for n + 1 assuming true for n

$(1 + 2 + ... n)^2 = 1^3 + 2^3 + ... n^3$

$(n(n + 1)/2 + (n + 1))^2 = n^2(n+1)^2/4 + n(n+1)^2 + (n+1)^2$

$(n(n + 1)/2 + (n + 1))^2 = (1+ 2 + ... n)^2 + (n+1)^3$

$((1 + 2 + ... n) + (n+1))^2 = 1^3 + 2^3 + ... n^3 + (n+1)^3$


Another simple example: proving that the eigenvector $\vec{v}$ for matrix A is also the eigenvector for $A^n$ for all n. This is effectively translating scalar associativity to matrix multiplication.

We know the base case is true (that $A^n\vec{v} = \lambda\vec{v}$ is true for $n = 1$) by definition of eigenvector.

Then the inductive step $A^{n+1} \vec{v} = AA^n\vec{v} = A \lambda 
\vec{v}$ = $\lambda A\vec{v}$ = $\lambda^2 \vec{v}$

Thus $A^n$ = $\lambda \vec{v}$ for all n.
