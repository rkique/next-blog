---
date: '2024-07-01'
title: 'Synonyms - Exact Testing'
---
With layer norm, residuals on everything. From layers 5 to 27.

Why is it always '' d', ' l', ' g', ' le', ' p''?

S_O 14, 15:

```
airplane  aer [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' lo', ' so', ' l']
auto  automobile [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' so', ' in', ' m']
baby  child [' d', ' l', ' g', ' le', ' p'] [' d', ' ', ' c', ' l', ' m']
bicycle  cycle [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' c', ' m', ' lo']
child  child [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' c', ' l', ' m']
S_O_START,5,S_O_END,26,beta,1,clre,1,lre,4,lm,44
airplane  aer [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' lo', ' so', ' l']
auto  automobile [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' so', ' in', ' m']
baby  child [' d', ' l', ' g', ' le', ' p'] [' d', ' ', ' c', ' l', ' m']
bicycle  cycle [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' c', ' m', ' lo']
child  child [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' c', ' l', ' m']
S_O_START,6,S_O_END,26,beta,1,clre,1,lre,4,lm,44
airplane  aer [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' lo', ' so', ' l']
auto  automobile [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' so', ' in', ' m']
baby  child [' d', ' l', ' g', ' le', ' p'] [' d', ' ', ' c', ' l', ' m']
bicycle  cycle [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' c', ' m', ' lo']
child  child [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' c', ' l', ' m']
S_O_START,7,S_O_END,26,beta,1,clre,1,lre,4,lm,44
airplane  aer [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' lo', ' so', ' l']
auto  automobile [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' so', ' in', ' m']
baby  child [' d', ' l', ' g', ' le', ' p'] [' d', ' ', ' c', ' l', ' m']
bicycle  cycle [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' c', ' m', ' lo']
child  child [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' c', ' l', ' m']
S_O_START,8,S_O_END,26,beta,1,clre,1,lre,4,lm,44
airplane  aer [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' lo', ' so', ' l']
auto  automobile [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' so', ' in', ' m']
baby  child [' d', ' l', ' g', ' le', ' p'] [' d', ' ', ' c', ' l', ' m']
bicycle  cycle [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' c', ' m', ' lo']
child  child [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' c', ' l', ' m']
S_O_START,9,S_O_END,26,beta,1,clre,1,lre,4,lm,44
```

```
airplane  plane [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' m', ' lo', ' l']
auto  automobile [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' so', ' in', ' g']
bicycle  bicycle [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' c', ' m', ' lo']
child  kid [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' c', ' m', ' l']
S_O_START,5,S_O_END,6,beta,1,clre,1,lre,4,lm,44
airplane  plane [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' m', ' lo', ' l']
auto  automobile [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' so', ' in', ' g']
bicycle  bicycle [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' c', ' m', ' lo']
child  kid [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' c', ' m', ' l']
S_O_START,6,S_O_END,7,beta,1,clre,1,lre,4,lm,44
airplane  plane [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' m', ' lo', ' l']
auto  automobile [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' so', ' in', ' g']
bicycle  bicycle [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' c', ' m', ' lo']
child  kid [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' c', ' m', ' l']
S_O_START,7,S_O_END,8,beta,1,clre,1,lre,4,lm,44
airplane  plane [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' m', ' lo', ' l']
auto  automobile [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' so', ' in', ' g']
bicycle  bicycle [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' c', ' m', ' lo']
child  kid [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' c', ' m', ' l']
S_O_START,8,S_O_END,9,beta,1,clre,1,lre,4,lm,44
airplane  plane [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' m', ' lo', ' l']
auto  automobile [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' so', ' in', ' g']
bicycle  bicycle [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' c', ' m', ' lo']
child  kid [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' c', ' m', ' l']
S_O_START,9,S_O_END,10,beta,1,clre,1,lre,4,lm,44
```

```
airplane  aer [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' so', ' m', ' lo']
auto  car [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' in', ' so', ' m']
baby  infant [' d', ' l', ' g', ' le', ' p'] [' d', ' ', ' c', ' l', ' m']
bicycle  cycle [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' c', ' m', ' lo']
child  boy [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' c', ' l', ' m']
S_O_START,5,S_O_END,6,beta,1,clre,1,lre,4,lm,45
airplane  aer [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' so', ' m', ' lo']
auto  car [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' in', ' so', ' m']
baby  infant [' d', ' l', ' g', ' le', ' p'] [' d', ' ', ' c', ' l', ' m']
bicycle  cycle [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' c', ' m', ' lo']
child  boy [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' c', ' l', ' m']
S_O_START,6,S_O_END,7,beta,1,clre,1,lre,4,lm,45
airplane  aer [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' so', ' m', ' lo']
auto  car [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' in', ' so', ' m']
baby  infant [' d', ' l', ' g', ' le', ' p'] [' d', ' ', ' c', ' l', ' m']
bicycle  cycle [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' c', ' m', ' lo']
child  boy [' d', ' l', ' g', ' le', ' p'] [' ', ' d', ' c', ' l', ' m']
S_O_START,7,S_O_END,8,beta,1,clre,1,lre,4,lm,45
```