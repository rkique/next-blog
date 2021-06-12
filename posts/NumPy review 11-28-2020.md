```python
import numpy as np

```
get version with `np.__version__`

```python 
zeroVectorR5 = np.zeros(5)
oneVectorR5 = np.ones(5)
```

Slicing can have a 3rd parameter for step (i.e. -1)

```python
vector = [1,2,3,4,5,6]
start = vector[:3]
odds = vector[::2] #indices 0,2,4 --> 1,3,5
evens = vector[1::2] #indices 1,3,5 --> 2,4,6
countdown = vector[::-1]
```

`reshape(3,3)` cuts a vector into a 3x3 matrix.

```python
nums = np.arange(0,25).reshape(5,5)

[[ 0  1  2  3  4]
 [ 5  6  7  8  9]
 [10 11 12 13 14]
 [15 16 17 18 19]
 [20 21 22 23 24]]
 ```
 
 `np.nonzero()` returns INDICES of nonzero elements within list.
 
 Two commands which could have built the Least Square project nicer:
 
 `m = np.eye(4,k=0)` produces a 4x4 identity matrix.
 `np.flip(m,0)` is a horizontal flip (across outermost elements of array)
 `np.flip(m, 1)` is a vertical flip (across 2nd outermost elements of array)
 
 Then generating a nice coefficient matrix looks like 
 ```python
deg = 3
base = np.zeros((deg,deg))
#diagonals from -2,2 for example
for i in range(-(deg-1),(deg-1)+1):
    base+=np.eye(deg, k=i)*(i+(deg-1)+1);
base = np.flip(base, 1)
print(base)

[[5. 4. 3.]
 [4. 3. 2.]
 [3. 2. 1.]]
```

 To do floor division, use `//` (4/2 = 2.0 and 4//2 = 2)
 
 Showing how matrix \* transpose is like the sum of squares is like the 2-norm squared:
 
 ```
v = [5,1,2]
squares = [k**2 for k in v]
print(sum(squares))
print(np.linalg.norm(v)**2)
print(np.matmul(np.transpose(v),v))
 ```
If we have a 1x3 matrix, we can transpose it into a 3x1 matrix (vector). 
Their product is that first vector dot the second, a 3 term dot product.

If we have a 3x1 matrix (vector), we can transpose it into a 1x3 matrix. 
We have three vectors of length 1 and three vectors of length 1, yielding 9 dot products with 1 term each.


 