---
date: '2024-07-03'
title: 'Layer Normalization enforces homogenity'
---

With post LN LRE and regular LRE side by side:

```
acrobat  circus [' group', ' family', ' team', ' collection', ' company'] [' group', ' team', ' club', ' family', ' company']
antelope  herd [' group', ' family', ' team', ' collection', ' company'] [' group', ' family', ' herd', ' club', ' team']
bee  hive [' group', ' family', ' team', ' collection', ' company'] [' group', ' family', ' team', ' flock', ' swarm']
bird  flock [' group', ' family', ' team', ' collection', ' company'] [' family', ' group', ' flock', ' team', ' species']
book  library [' group', ' family', ' team', ' collection', ' company'] [' family', ' group', ' collection', ' team', ' company']
calf  herd [' group', ' family', ' team', ' collection', ' company'] [' group', ' family', ' herd', ' team', ' club']
cattle  herd [' group', ' family', ' team', ' collection', ' company'] [' group', ' family', ' herd', ' team', ' collection']
christian  church [' group', ' family', ' team', ' collection', ' company'] [' group', ' family', ' club', ' team', ' society']
```


On Meronyms - Part:
```
apartment  room [' head', ' bit', ' p', ' t', ' a'] [' door', ' body', ' room', ' p', ' t']
bird  feather [' head', ' p', ' c', ' bit', ' part'] [' body', ' head', ' p', ' be', ' ch']
brush  brist [' head', ' a', ' p', ' bit', ' body'] [' head', ' handle', ' body', ' set', ' t']
bus  bus [' head', ' bit', ' p', ' body', ' c'] [' body', ' door', ' t', ' head', ' frame']
byte  bit [' head', ' c', ' p', ' body', ' bit'] [' body', ' bit', ' p', ' head', ' t']
car  wheel [' head', ' p', ' bit', ' c', ' a'] [' car', ' body', ' head', ' door', ' frame']
castle  tower [' head', ' p', ' body', ' bit', ' a'] [' head', ' door', ' body', ' roof', ' t']
cat  tail [' head', ' c', ' p', ' bit', ' t'] [' body', ' head', ' t', ' c', ' m']
chair  seat [' head', ' bit', ' body', ' part', ' p'] [' seat', ' head', ' body', ' frame', ' back']
ln-lre,4,lre,19,lm,45
```