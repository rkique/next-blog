[[orthogonality]]
[[Equivalents to an Orthogonal Matrix]]
We will derive a matrix representing the orthogonal projection onto a subspace V.

a. 

Expressing projV(x) with the basis vectors of V:
$\text{proj}_V \vec{x} = c_1v_1 + ... c_mv_m$

Then the following is the "leftovers" orthogonal to V:
$\vec{x} - \text{proj}_V \vec{x} = (x-c_1\vec{v_1} ... - c_m\vec{v_m})$

Then orthogonality tells us that the dot product is 0:
$\vec{v_i} * (x-c_1\vec{v_1} ... - c_m\vec{v_m})  = 0$

Observe that the matrix multiplication $A\vec{c}$ is a single dot product, i.e. a scalar:
$A\vec{c} = [\vec{v_1} ... \vec{v_m}] * 
\begin{bmatrix}
c_1 \\
...\\
c_m\\
\end{bmatrix}
= \vec{v_1}c_1 + ... \vec{v_m}c_m$
And furthermore

$\vec{v_1} * (\vec{x} - A\vec{c}) = 0$
This is true iff $A\vec{c} = \vec{x}$, and thus $A^TA\vec{c} = A^T\vec{x}$.

b. 

$A^TA\vec{c} = A^T\vec{x}$
$\vec{c} = (A^TA)^{-1}A^T\vec{x}$
$A\vec{c} = \text{proj}_V\vec{x} = A(A^TA)^{-1}A^T\vec{x}$

c. 

Observe that $<1,1,-1,0> \cdot <0,1,1,-1> = 0$ and so our span is already orthogonal.

We can then compute $P_w$:

$$P_w =  
\begin{bmatrix}
1 & 0 \\
1 & 1\\
-1 & 1\\
0  & -1\\
\end{bmatrix}
*
(
\begin{bmatrix}
1 & 1 & -1 & 0 \\
0 & 1 & 1 & -1 \\
\end{bmatrix}
\begin{bmatrix}
1 & 0 \\
1 & 1\\
-1 & 1\\
0  & -1\\
\end{bmatrix}
)^{-1} \begin{bmatrix}
1 & 1 & -1 & 0 \\
0 & 1 & 1 & -1 \\
\end{bmatrix}
$$

$$P_w = \begin{bmatrix}
  1/3 & 1/3 & -1/3 & 0\\
  -1/3 & 0 & 2/3 & -1/3\\
  -1/3 & 0 & 2/3 & -1/3\\
  0 & -1/3 & -1/3 & 1/3\\
\end{bmatrix}$$
