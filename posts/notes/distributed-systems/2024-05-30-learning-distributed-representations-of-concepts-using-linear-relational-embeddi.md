---
date: '2024-05-30'
title: 'Learning distributed representations of concepts using linear relational embedding'
---
Hinton 2001

1986:
Interpretable MLP
- local encoding of person 1
- local encoding of person 2 
- 12 relations possible: father, mother, husband, wife, son, daughter, uncle, aunt, brother, sister, nephew, niece
- 2 isomorphic family trees: English, Italian
- 24 input units --> 6 internal, distributed representation of person 1
- central layer of 12 units
- penultimate layer with 6 units
- Output is activated on Colin Aunt 1 and Aunt 2 (both English):
![[Screenshot 2024-05-30 at 9.16.04 AM.png]]

- *Weight* diagram with excitatory weights as white, inhibitory weights as black
![[Screenshot 2024-05-30 at 9.05.18 AM.png]]

2001: LRE learning internal representations of a,R,b:
![[Screenshot 2024-05-30 at 12.59.03 PM.png]]
![[Screenshot 2024-05-30 at 12.58.41 PM.png]]
![[Screenshot 2024-05-30 at 12.59.20 PM.png]]
