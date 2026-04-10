---
date: '2024-07-01'
title: 'LN->Next Verb+er testing'
---

Initial results indicate that LN->Next is not the right derivative here.

S_O: 1-27

```
achieve  achie ['\n', ' ', ' speaker', ' pres', ' reporter'] ['\n', ' ', ' person', ' m', ' per']
advertise  advertis ['\n', ' ', ' speaker', ' pres', ' reporter'] ['\n', ' ', ' person', ' m', ' promoter']
announce  announcer ['\n', ' ', ' speaker', ' pres', ' reporter'] ['\n', ' ', ' m', ' person', ' speaker']
bake  baker ['\n', ' ', ' speaker', ' pres', ' reporter'] ['\n', ' ', ' m', ' person', ' per']
begin  beginner ['\n', ' ', ' speaker', ' pres', ' reporter'] ['\n', ' ', ' person', ' m', ' per']
believe  believer ['\n', ' ', ' speaker', ' pres', ' reporter'] ['\n', ' ', ' person', ' m', ' per']
borrow  borrower ['\n', ' ', ' speaker', ' pres', ' reporter'] ['\n', ' ', ' person', ' m', ' per']
choreograph  chore ['\n', ' ', ' speaker', ' pres', ' reporter'] ['\n', ' ', ' person', ' m', ' per']
compose  composer ['\n', ' ', ' speaker', ' pres', ' reporter'] ['\n', ' ', ' person', ' m', ' per']
consume  consumer ['\n', ' ', ' speaker', ' pres', ' reporter'] ['\n', ' ', ' person', ' m', ' per']
S_O_START,1,S_O_END,27,beta,1,clre,1,lre,11,lm,50
```

S_O: 10-20:

```
achieve  achie [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
advertise  advertis [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' promoter']
announce  announcer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' m', ' person', ' speaker']
bake  baker [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' m', ' person', ' per']
begin  beginner [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
believe  believer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
borrow  borrower [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
choreograph  chore [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
compose  composer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
consume  consumer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
S_O_START,10,S_O_END,20,beta,1,clre,2,lre,11,lm,50
```

S_O: 16-17:

```
achieve  achie [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
advertise  advertis [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' promoter']
announce  announcer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' m', ' person', ' speaker']
bake  baker [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' m', ' person', ' per']
begin  starter [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
believe  believer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
borrow  borrower [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' s']
choreograph  chore [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
compose  composer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
consume  consumer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
S_O_START,16,S_O_END,17,beta,1,clre,2,lre,11,lm,50
```


S_O:  5-6:

```
achieve  achie [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
advertise  advertis [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' promoter']
announce  announcer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' m', ' person', ' speaker']
bake  baker [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' m', ' person', ' per']
begin  beginner [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
believe  believer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
borrow  borrower [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' s']
choreograph  chore [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
compose  composer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
consume  consumer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
S_O_START,5,S_O_END,6,beta,1,clre,2,lre,11,lm,50
```

S_O various 1 layer:

```
achieve  achie [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
advertise  advertis [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' promoter']
announce  announcer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' m', ' person', ' speaker']
bake  baker [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' m', ' person', ' per']
begin  beginner [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
believe  believer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
borrow  borrower [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' s']
choreograph  chore [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
compose  composer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
consume  consumer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
S_O_START,1,S_O_END,2,beta,1,clre,2,lre,11,lm,50
achieve  achie [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
advertise  advertis [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' promoter']
announce  announcer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' m', ' person', ' speaker']
bake  baker [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' m', ' person', ' per']
begin  starter [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
believe  believer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
borrow  borrower [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' s']
choreograph  chore [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
compose  composer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
consume  consumer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
S_O_START,2,S_O_END,3,beta,1,clre,2,lre,11,lm,50
achieve  achie [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
advertise  advertis [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' promoter']
announce  broadcaster [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' m', ' person', ' speaker']
bake  baker [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' m', ' person', ' per']
begin  beginner [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
believe  believer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
borrow  borrower [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' s']
choreograph  chore [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
compose  composer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
consume  consumer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
S_O_START,3,S_O_END,4,beta,1,clre,2,lre,11,lm,50
achieve  achie [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
advertise  advertis [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' promoter']
announce  announcer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' m', ' person', ' speaker']
bake  baker [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' m', ' person', ' per']
begin  beginner [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
believe  believer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
borrow  borrower [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' s']
choreograph  chore [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
compose  composer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
consume  consumer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
S_O_START,4,S_O_END,5,beta,1,clre,2,lre,11,lm,50
achieve  achie [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
advertise  advertis [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' promoter']
announce  herald [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' m', ' person', ' speaker']
bake  baker [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' m', ' person', ' per']
begin  beginner [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
believe  believer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
borrow  borrower [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' s']
choreograph  chore [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
compose  composer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
consume  consumer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
S_O_START,5,S_O_END,6,beta,1,clre,2,lre,11,lm,50
achieve  achie [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
advertise  advertis [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' promoter']
announce  announcer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' m', ' person', ' speaker']
bake  baker [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' m', ' person', ' per']
begin  beginner [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
believe  believer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
borrow  borrower [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' s']
choreograph  chore [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
compose  composer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
consume  consumer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
S_O_START,6,S_O_END,7,beta,1,clre,2,lre,11,lm,50
achieve  achie [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
advertise  advertis [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' promoter']
announce  announcer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' m', ' person', ' speaker']
bake  baker [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' m', ' person', ' per']
begin  beginner [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
believe  believer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
borrow  borrower [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
choreograph  chore [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
compose  composer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
consume  consumer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
S_O_START,7,S_O_END,8,beta,1,clre,2,lre,11,lm,50
achieve  achie [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
advertise  advertis [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' promoter']
announce  herald [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' m', ' person', ' speaker']
bake  baker [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' m', ' person', ' per']
begin  beginner [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
believe  believer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
borrow  borrower [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' s']
choreograph  chore [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
compose  composer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
consume  consumer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
S_O_START,8,S_O_END,9,beta,1,clre,2,lre,11,lm,50
achieve  achie [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
advertise  advertis [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' promoter']
announce  announcer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' m', ' person', ' speaker']
bake  baker [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' m', ' person', ' per']
begin  beginner [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
believe  believer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
borrow  borrower [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' s']
choreograph  chore [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
compose  composer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
consume  consumer [' speaker', ' pres', ' tell', ' reporter', ' comm'] ['\n', ' ', ' person', ' m', ' per']
S_O_START,9,S_O_END,10,beta,1,clre,2,lre,11,lm,50
```