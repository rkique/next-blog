---
date: '2024-06-24'
title: 'Complete LRE can approximate the LRE'
---

The S->O residual cannot explain beta

ape matches  baby: 1.0
bear matches  cub: 1.2
bee matches  lar: 3.7
beetle matches  lar: 1.9
buffalo matches  calf: 1.2
butterfly matches  pup: 1.0
cattle matches  calf: 1.6
chimpanzee matches  baby: 1.0
cricket matches  lar: 1.7
dog matches  pup: 1.0
elephant matches  calf: 1.4
ferret matches  kit: 2.9
fish matches  fry: 1.2
fly matches  mag: 3.8
fox matches  pup: 1.0
goat matches  kid: 1.0
goldfish matches  fry: 1.0
horse matches  fo: 1.0
insect matches  lar: 1.7
lion matches  cub: 1.0
mink matches  kit: 1.4
panda matches  cub: 1.7
raccoon matches  kit: 1.7
seal matches  pup: 1.0
shark matches  pup: 1.0
tiger matches  cub: 1.0
trout matches  finger: 4.9
whale matches  calf: 1.8
wolf matches  pup: 1.0

For the LRE setup that uses individual transitions for S-S calculated as 
x = layernorm(x) * ln_weight + ln_bias
x = layer_w * x + layer_b

The S->O residual seems to partially explain the beta parameter.
For all below S_O_Layer is 26 unless specified.

LM predictions:
dog: [' puppy', ' pup', ' p', ' whe', ' dog']
duck: [' duck', ' g', ' dra', ' chick', ' hatch']
fish: [' fry', ' finger', ' lar', ' baby', ' young']
horse: [' fo', ' col', ' fill', ' pony', ' baby']
mink: [' kit', ' p', ' pup', ' kits', ' cub']
seal: [' pup', ' p', ' puppy', ' baby', ' seal']
shark: [' pup', ' baby', ' shark', ' young', ' kit']
trout: [' fry', ' finger', ' lar', ' baby', ' trout']

S -> S: ln w, ln b, J w
S -> O: ln w, ln b, J w, J b, residual
- No estimated bias or residual for S -> S calculations
- for sum_weight and sum_bias & mean_weight and mean_bias
dog: [' pup', ' puppy', ' p', ' young', ' baby']
duck: [' young', ' baby', ' pup', ' p', ' kid']
fish: [' young', ' pup', ' fry', ' p', ' baby']
horse: [' young', ' fo', ' baby', ' pup', ' youngster']
mink: [' pup', ' young', ' p', ' baby', ' kit']
seal: [' pup', ' young', ' baby', ' p', ' puppy']
shark: [' pup', ' young', ' baby', ' cub', ' p']
trout: [' pup', ' young', ' fry', ' baby', ' p']

S -> S: ln w, ln b, J w, J b
S -> O: ln w, ln b, J w, J b, residual
dog: [' pup', ' p', ' young', ' baby', ' puppy']
duck: [' pup', ' p', ' young', ' baby', '\n']
fish: [' pup', ' p', ' young', ' baby', '\n']
horse: [' pup', ' p', ' young', ' baby', '\n']
mink: [' pup', ' p', ' young', ' baby', '\n']
seal: [' pup', ' p', ' young', ' baby', ' puppy']
shark: [' pup', ' p', ' young', ' baby', '\n']
trout: [' pup', ' p', ' young', ' baby', '\n']

S -> S: ln w, ln b
S -> O: ln w, ln b, J w, J b, residual
dog: [' pup', ' baby', ' young', ' puppy', ' p']
duck: [' pup', ' baby', ' p', ' young', ' puppy']
fish: [' pup', ' baby', ' young', ' fry', ' p']
horse: [' pup', ' baby', ' young', ' p', ' puppy']
mink: [' pup', ' baby', ' young', ' puppy', ' kit']
seal: [' pup', ' baby', ' young', ' p', ' puppy']
shark: [' pup', ' baby', ' young', ' p', ' puppy']
trout: [' pup', ' baby', ' fry', ' young', ' p']

S -> S: Identity
S -> O: ln w, ln b, J w, J b, residual
dog: [' pup', ' baby', ' young', ' p', ' puppy']
duck: [' pup', ' baby', ' p', ' young', ' c']
fish: [' pup', ' baby', ' young', ' p', ' fry']
horse: [' pup', ' baby', ' young', ' p', ' fry']
mink: [' pup', ' baby', ' young', ' fry', ' puppy']
seal: [' pup', ' baby', ' young', ' p', ' puppy']
shark: [' pup', ' baby', ' young', ' p', ' fry']
trout: [' pup', ' baby', ' fry', ' young', ' p']

S -> S: Identity
S -> O: ln w, ln b, J w, J b, residual * 2.25
dog: [' pup', ' baby', ' young', ' p', ' puppy']
duck: [' pup', ' baby', ' p', ' young', ' c']
fish: [' pup', ' baby', ' young', ' p', ' fry']
horse: [' pup', ' baby', ' young', ' p', ' fry']
mink: [' pup', ' baby', ' young', ' fry', ' puppy']
seal: [' pup', ' baby', ' young', ' p', ' puppy']
shark: [' pup', ' baby', ' young', ' p', ' fry']
trout: [' pup', ' baby', ' fry', ' young', ' p']

S -> S: Identity
S -> O: ln w, ln b, J w * 2.25, J b, residual 
dog: [' pup', ' baby', ' young', ' p', ' puppy']
duck: [' pup', ' baby', ' p', ' young', ' c']
fish: [' pup', ' baby', ' young', ' p', ' fry']
horse: [' pup', ' baby', ' young', ' p', ' fry']
mink: [' pup', ' baby', ' young', ' fry', ' puppy']
seal: [' pup', ' baby', ' young', ' p', ' puppy']
shark: [' pup', ' baby', ' young', ' p', ' fry']
trout: [' pup', ' baby', ' fry', ' young', ' p']


S -> S: ln w, ln b, J w, residual
S -> O: ln w, ln b, J w, J b, residual
dog: ['gy', ' breed', 'fight', 'gie', ' pencil']
duck: ['ling', ' hol', 'ie', ' species', ',']
fish: [' species', 'mong', 'y', 'tail', ' sm']
horse: ['back', ' is', ' breeding', ' wh', ' cent']
mink: ['owski', ' hind', ' breeding', ' re', ' micro']
seal: [' pup', 'able', 'ant', ' cub', ' ring']
shark: ['fin', ' fin', 'ing', ' cub', ' bar']
trout: [' ro', ' dam', ' or', ' fry', ' species']


Residual in S -> O affects precision.

S -> S: ln w, ln b, J w
S -> O: ln w, ln b, J w, J b, residual * 2.25

dog: [' puppy', ' pup', ' whe', ' p', ' litter']
duck: ['ling', ' young', ' baby', ' kid', ' fetus']
fish: [' fry', ' young', ' pup', ' lar', ' p']
horse: [' fo', ' young', ' g', ' baby', ' youngster']
mink: [' kit', ' pup', ' p', ' young', ' jo']
seal: [' pup', ' cub', ' young', ' puppy', ' p']
shark: [' cub', ' young', ' pup', ' juvenile', ' c']
trout: [' fry', ' lar', ' young', ' finger', ' pup']


Bias in S -> S seems to have a negative effect on the output (?)

S -> S: J w, J b 
S -> O: ln w, ln b, J w, J b, residual 
dog: [' is', ' p', '\n', ' (', ' pup']
duck: [' is', '\n', ' (', ' p', ' or']
fish: [' is', '\n', ' (', ' p', ',']
horse: [' is', '\n', ' (', ' m', ' p']
mink: [' is', ' p', '\n', ' (', ' pup']
seal: [' is', ' pup', ' p', ' cub', '\n']
shark: [' is', '\n', ' (', ' p', ',']
trout: [' is', '\n', ' (', ' p', ' or']

S -> S: J w
S -> O: ln w, ln b, J w, J b, residual 
dog: [' pup', ' puppy', ' young', ' p', ' baby']
duck: [' young', ' baby', ' pup', ' p', ' fetus']
fish: [' young', ' pup', ' fry', ' p', ' baby']
horse: [' young', ' baby', ' pup', ' fo', ' p']
mink: [' pup', ' young', ' baby', ' kit', ' p']
seal: [' pup', ' young', ' baby', ' cub', ' p']
shark: [' pup', ' young', ' baby', ' cub', ' p']
trout: [' pup', ' young', ' fry', ' baby', ' p']


Layers offset by one (not correct I think)
S -> S: J w, J b 
S -> O: ln w, ln b, J w, J b, residual 
dog: [' pup', ' puppy', ' p', ' young', ' baby']
duck: [' young', ' baby', ' pup', ' p', ' kid']
fish: [' young', ' pup', ' fry', ' p', ' baby']
horse: [' young', ' fo', ' baby', ' pup', ' p']
mink: [' pup', ' young', ' p', ' baby', ' kit']
seal: [' pup', ' young', ' baby', ' p', ' puppy']
shark: [' pup', ' young', ' baby', ' p', ' cub']
trout: [' pup', ' young', ' fry', ' baby', ' p']


With S_O_Layer = 25
S -> S: ln w, ln b, J w
S -> O: ln w, ln b, J w, J b, residual * 2.25
dog: [' puppy', ' whe', ' p', ' k', ' cub']
duck: ['ling', ' young', 'lings', ' baby', ' fo']
fish: [' young', ' fry', ' n', 'y', ' egg']
horse: [' fo', ' young', ' g', ' milk', 'hair']
mink: [' kit', ' young', ' p', ' kits', ' cub']
seal: [' pup', ' cub', ' young', ' baby', ' p']
shark: [' cub', ' fin', ' young', ' c', ' pup']
trout: [' fry', ' egg', ' finger', ' lar', ' young']

Are residuals at O -> O layers changing the language 
while keeping the semantics the same?

S_O_Layer = 20
S -> S: ln w, ln b, J w, J b 
S -> O: ln w, ln b, J w, J b
O -> O: ln w, ln b, J w, J b, residual
dog: [' baby', ' pup', ' puppy', ' offspring', ' juvenile']
duck: [' baby', ' pup', ' puppy', ' offspring', ' juvenile']
fish: [' baby', ' pup', ' puppy', ' offspring', ' newborn']
horse: [' baby', ' pup', ' puppy', ' offspring', ' newborn']
mink: [' baby', ' pup', ' puppy', ' offspring', ' juvenile']
seal: [' baby', ' pup', ' puppy', ' offspring', ' juvenile']
shark: [' baby', ' pup', ' puppy', ' offspring', ' newborn']
trout: [' baby', ' pup', ' puppy', ' offspring', ' newborn']

S_O_Layer = 22
dog: [' baby', ' pup', ' young', ' puppy', ' cub']
...


S -> S: J w, J b, residual
S -> O: ln w, ln b, J w, J b, residual
dog: ['"', '!', '#', '%', '$']
duck: ['"', '!', '#', '%', '$']
fish: ['"', '!', '#', '%', '$']
horse: ['"', '!', '#', '%', '$']
mink: ['"', '!', '#', '%', '$']
seal: ['"', '!', '#', '%', '$']
shark: ['"', '!', '#', '%', '$']
trout: ['"', '!', '#', '%', '$']
