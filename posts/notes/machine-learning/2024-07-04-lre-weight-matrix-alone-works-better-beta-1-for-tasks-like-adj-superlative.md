---
date: '2024-07-04'
title: 'LRE weight matrix alone works better beta = 1 for tasks like adj-superlative'
---
Adj-superlative 
First is the regular Ws + b, the second is only Ws. 

Why would this be the case?

```
able [' most', ' the', ' least', '\n', ' '] [' able', ' Able', 'abled', ' enabled', 'able']
angry [' most', ' the', '\n', ' least', ' '] [' angry', ' Angry', ' anger', ' Anger', 'anger']
cheap [' most', ' the', '\n', ' least', ' '] [' cheap', ' Cheap', ' cheaply', 'che', ' cheapest']
clever [' most', ' the', '\n', ' least', ' '] [' clever', ' Clever', 'Cle', ' ingenious', 'cle']
costly [' most', ' the', '\n', ' least', ' '] [' costly', ' pricey', ' inexpensive', 'expensive', 'cost']
cruel [' most', ' the', ' least', '\n', ' '] [' cruel', ' cruelty', ' Cruel', 'cru', ' ruth']
cute [' most', ' the', '\n', ' least', ' '] [' cute', ' cut', ' adorable', ' Cut', 'Cut']
dense [' most', ' the', ' least', '\n', ' '] [' dense', ' dens', ' density', ' densely', 'density']
dumb [' most', ' the', '\n', ' least', ' '] [' dumb', ' Dumb', ' dummy', ' stupid', ' Dum']
fierce [' most', ' the', ' least', '\n', ' '] [' fierce', ' fe', ' fury', ' ferocious', ' Fang']
```

```
Testing noun - plural_reg
album ['\n', ' ', ' the', ' (', '...'] [' Album', 'album', ' albums', ' album', ' Alt']
application [' ', '\n', ' the', ' (', '...'] [' Applications', ' applications', ' Application', 'Applications', ' application']
area [' ', '\n', ' the', ' (', '/'] [' Areas', ' Area', ' areas', ' area', 'Area']
car [' ', '\n', ' the', ' (', '...'] [' cars', ' Cars', 'cars', ' car', ' Car']
college [' ', '\n', ' the', ' (', '...'] [' Colleges', ' colleges', ' College', ' college', 'College']
council ['\n', ' ', ' the', ' (', '...'] [' councils', ' Council', ' council', ' Counsel', ' Coun']
customer [' ', '\n', ' the', ' (', '/'] [' Customers', ' customers', ' Customer', ' customer', 'Customer']
day [' ', '\n', ' the', ' (', '...'] [' Days', ' days', 'Days', 'days', ' DAY']
death [' ', '\n', ' the', ' (', '...'] [' Deaths', ' Death', 'Death', ' Died', ' Dead']
department [' ', '\n', ' the', ' (', '...'] [' departments', ' Department', ' Dept', ' Dep', 'Department']
```

```
Testing un+adj_reg
able [' un', ' not', ' unc', ' und', ' unre'] ['un', 'inc', 'U', 'unte', ' incapable']
acceptable [' un', ' not', ' unre', ' unacceptable', ' unc'] ['un', 'uner', 'inc', 'una', ' unacceptable']
affected [' un', ' not', ' unc', ' und', ' non'] ['uner', 'un', 'U', 'unch', ' uncond']
authorized [' un', ' not', ' unc', '\n', ' non'] [' unauthorized', 'una', ' authorized', ' Un', 'authorized']
available [' un', ' not', ' unc', ' unre', ' non'] [' unavailable', 'un', ' In', 'uner', 'U']
avoidable [' un', ' not', ' unre', ' unc', ' non'] [' unavoidable', 'un', ' UR', 'uner', ' unpre']
aware [' un', ' not', ' und', ' unre', ' unc'] [' unaware', 'un', ' unsuspecting', ' ignorant', ' unknow']
believable [' un', ' not', ' unre', ' unc', ' unknown'] ['un', ' uncon', ' unbelievable', ' unsus', 'UN']
biased [' un', ' not', ' non', ' und', ' unc'] [' unbiased', 'uner', ' uncond', 'unch', 'un']
certain [' un', ' not', ' unc', ' uncertain', ' unknown'] [' uncertain', 'unc', 'inc', 'uner', 'inqu']
```

```
Testing verb_Ving - Ved
adding [' been', '\n', ' not', ' ', '...'] [' adding', 'adding', 'Adding', ' allowing', ' Adding']
agreeing [' been', '\n', ' not', ' ', '...'] [' agreeing', ' agreed', 'ag', ' agreement', ' agreements']
allowing [' been', '\n', ' allowed', ' not', ' '] [' allowing', ' allowed', ' permitting', ' authorizing', 'allowed']
announcing [' been', ' not', '\n', ' ', '...'] [' announcing', ' announced', 'announced', ' authorizing', ' authorized']
appearing [' been', '\n', ' not', ' ', ' appeared'] [' appearing', 'apping', 'app', ' approaching', ' appar']
applying [' been', '\n', ' not', ' ', ' applied'] [' applying', ' applied', ' apply', 'apply', 'Apply']
appointing [' been', '\n', ' not', ' ', ' appointed'] [' appointing', ' appointed', 'appointed', ' authorizing', ' being']
asking [' been', ' not', '\n', ' ', '...'] [' asking', ' requesting', 'asking', ' authorizing', ' seeking']
attending [' been', '\n', ' not', ' ', '...'] [' attending', ' attended', 'att', 'Att', ' att']
becoming [' been', '\n', ' not', ' ', ' become'] [' becoming', ' being', 'being', 'eling', 'Being']
```

```
Testing antonyms - binary
after ['\n', ' the', ' ', ' not', ' to'] [' before', 'before', ' ahead', 'ahead', ' prior']
ahead ['\n', ' the', ' ', ' to', ' back'] [' behind', 'behind', ' ahead', ' beside', 'ahead']
anterior [' the', '\n', ' ', ' to', ' a'] [' posterior', ' subsequent', ' prior', ' poster', ' accommod']
backward ['\n', ' the', ' ', ' to', ' not'] [' forward', 'forward', ' forwards', ' ahead', 'front']
before ['\n', ' the', ' not', ' ', ' to'] [' after', 'after', ' behind', 'behind', ' afterward']
beginning ['\n', ' the', ' ', ' not', ' to'] [' after', ' succeeding', 'en', ' including', 'uber']
below ['\n', ' the', ' ', ' to', ' not'] [' above', 'upper', ' upper', 'uber', 'above']
climb ['\n', ' the', ' ', ' to', ' not'] [' descend', ' dive', ' descent', ' drop', 'run']
dead ['\n', ' the', ' ', ' not', ' to'] [' alive', ' live', 'live', 'hire', ' afloat']
decrement [' the', '\n', ' ', ' not', ' a'] [' incre', 'ument', 'uber', ' increment', 'uf']
```

```
Testing name - nationality
balzac [' g', ' french', ' it', ' english', ' r'] [' consult', "\\'", ' livestock', ' recourse', " \\'"]
beethoven [' g', ' english', ' french', ' it', ' r'] [' Austrian', ' classical', ' lith', ' von', 'lav']
confucius [' g', ' english', ' it', ' french', ' r'] ['loc', ' loc', ' whence', ' civilisation', ' lobe']
copernicus [' g', ' it', ' french', ' english', ' r'] [' neither', ' scientist', ' mathematical', ' lat', ' scientists']
darwin [' g', ' english', ' french', ' it', ' aust'] [' Darwin', ' biologists', ' biologist', ' scientists', ' scientifically']
depp [' g', ' it', ' english', ' french', ' americ'] ['none', 'var', 'etc', 'final', 'auto']
descartes [' g', ' french', ' english', ' it', ' r'] [' french', ' neither', ' lat', 'let', 'loc']
dickens [' g', ' english', ' it', ' french', ' aust'] [' lav', ' latch', 'lav', ' lou', ' lich']
```


```
Testing animal - sound
alpaca [' m', ' squ', ' h', ' sn', ' br'] [' ble', ' sne', ' who', ' blew', ' fart']
bear [' roar', ' m', ' grow', ' h', ' sn'] [' grow', ' roar', ' bear', ' grunt', ' requ']
bee [' squ', ' m', ' ch', ' h', ' sn'] [' bee', ' buzzing', ' buzz', ' hive', ' requ']
cat [' m', ' me', ' squ', ' roar', ' pur'] [' his', ' pur', ' kitten', ' me', 'mia']
cattle [' m', ' sn', ' roar', ' b', ' squ'] [' low', ' ble', ' beef', ' lows', ' trump']
chicken [' squ', ' cl', ' m', ' co', ' scream'] [' cl', ' chicken', ' hen', ' gob', ' squ']
chimpanzee [' squ', ' h', ' scream', ' roar', ' bark'] [' monkey', ' chimpan', ' bark', ' ape', ' how']
cicada [' squ', ' m', ' ch', ' scream', ' roar'] [' cricket', ' buzz', ' wings', ' saw', ' cob']
coyote [' h', ' bark', ' m', ' squ', ' sn'] [' how', ' y', ' bark', ' wolf', ' coy']
```
