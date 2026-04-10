---
date: '2024-05-23'
title: 'GPT-2 positional embedding'
---
The positional embedding matrix maps each of those five numbers to a 768-dimensional vector of floating-point numbers, and that 768-dimensional vector gets added to a different vector that represents the semantic meaning of the token (position + meaning). So the positional embedidng matrix is (1024 by 768). 

There are 1024 rows in the positional embedding matrix; this is because there are 1024 possible positions in the prompt, and each possible position gets its own row.

three dim subspace reveals helix shape (?):

![[Screenshot 2024-05-23 at 7.41.45 PM.png]]

