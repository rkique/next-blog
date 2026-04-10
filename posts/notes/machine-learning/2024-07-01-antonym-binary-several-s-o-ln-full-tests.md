---
date: '2024-07-01'
title: 'Antonym - Binary - Several S_O, ln->full tests'
---
When using abridged gradients, from the layer norm to the output of each layer,
most of the time the results don't display the kind of variance that we would usually like to see.

With LN  and residuals on each layer:

we have vague results at later 
S_O: 23-24
```
after  before [' the', '\n', ' ', ' a', ' out'] ['\n', '...', ' up', ' out', ' ']
```

S_O: 14-15
We have specific but homogenous results earlier. This gives reason to suspect that this is the right area but need more variation.

```
after  before [' upward', ' out', ' outward', ' outer', ' outside'] ['\n', '...', ' out', ' up', ' ']
ahead  behind [' upward', ' out', ' outward', ' outer', ' outside'] ['\n', '...', ' up', ' out', ' ']
anterior  posterior [' upward', ' out', ' outward', ' outer', ' outside'] ['\n', '...', ' ', '...', ' the']
backward  forward [' upward', ' out', ' outward', ' outer', ' outside'] ['\n', '...', ' ', ' up', ' out']
before  after [' upward', ' out', ' outward', ' outer', ' outside'] ['\n', '...', ' out', ' ', ' up']
```

At this point we use Norm, no residual or layer bias for S_S or O_O as that has worked in the past.

S_O: 20-23:

```
after  before ['\n', ' have', ' Lopez', ' The', ' Liu'] ['\n', '...', ' up', ' out', ' ']
ahead  behind ['\n', ' have', ' Lopez', ' The', ' Liu'] ['\n', '...', ' up', ' out', ' ']
anterior  posterior ['\n', ' have', ' Lopez', ' The', ' Liu'] ['\n', '...', ' ', '...', ' the']
backward  forward ['\n', ' have', ' Lopez', ' The', ' Liu'] ['\n', '...', ' ', ' up', ' out']
before  after ['\n', ' have', ' Lopez', ' The', ' Liu'] ['\n', '...', ' out', ' up', ' ']
S_O_START,20,S_O_END,23,beta,1,clre,0,lre,15,lm,47
```

S_O: 12-15:

```
after  before ['-', ',', ' in', ' (', '_'] ['\n', '...', ' out', ' up', ' ']
ahead  behind [' in', ',', '-', ' (', '\n'] ['\n', '...', ' up', ' out', ' ']
anterior  posterior ['-', ',', ' in', ' (', '_'] ['\n', '...', ' ', '...', ' the']
backward  forward ['-', ',', ' in', ' (', '_'] ['\n', '...', ' ', ' up', ' out']
before  after ['-', ',', ' in', ' (', '_'] ['\n', '...', ' out', ' up', ' ']
S_O_START,12,S_O_END,15,beta,1,clre,3,lre,15,lm,47
```

S_O: 12-13:
```
after  before ['\n', ' The', ' have', 'The', ' was'] ['\n', '...', ' out', ' up', ' ']
ahead  behind ['\n', ' The', ' have', 'The', ' the'] ['\n', '...', ' up', ' out', ' ']
anterior  posterior ['\n', ' The', 'The', ' have', ' was'] ['\n', '...', ' ', '...', ' the']
backward  forward ['\n', ' The', 'The', ' have', ' was'] ['\n', '...', ' ', ' up', ' out']
before  after ['\n', ' The', ' have', 'The', ' was'] ['\n', '...', ' out', ' up', ' ']
S_O_START,12,S_O_END,13,beta,1,clre,0,lre,15,lm,48
```

S_O: 15-16:

```
after  before ['\xad', 'inf', 'est', ' \xad', 'un'] ['\n', '...', ' up', ' out', ' ']
ahead  behind ['-', '\xad', '_', ' \xad', 'est'] ['\n', '...', ' up', ' out', ' ']
anterior  posterior ['-', '\xad', '_', ' \xad', 'est'] ['\n', '...', ' ', '...', ' the']
backward  forward ['-', '\xad', '_', ' \xad', 'est'] ['\n', '...', ' ', ' up', ' out']
before  after ['\xad', '-', '_', 'est', ' \xad'] ['\n', '...', ' out', ' up', ' ']
S_O_START,15,S_O_END,16,beta,1,clre,0,lre,15,lm,45
```

S_O: 14-15:
```
after  before ['\n', ' ', ',', '.', ' in'] ['\n', '...', ' up', ' out', ' ']
ahead  behind [' in', ',', '\n', '-', ' '] ['\n', '...', ' up', ' ', ' out']
anterior  posterior ['-', ',', ' in', ' (', '_'] ['\n', '...', ' ', '...', ' the']
backward  forward ['-', ',', ' in', '_', ' ('] ['\n', '...', ' ', ' up', ' out']
before  after ['\n', ' ', ',', '.', ' the'] ['\n', '...', ' out', ' up', ' ']
S_O_START,14,S_O_END,15,beta,1,clre,3,lre,15,lm,47
```

Back to full approx

S_O: 13-16:

```
after  before ['\n', ' ', ',', '.', ' in'] ['\n', '...', ' up', ' out', ' ']
ahead  behind [' in', ',', '\n', '-', ' '] ['\n', '...', ' up', ' ', ' out']
anterior  posterior ['-', ',', ' in', ' (', '_'] ['\n', '...', ' ', '...', ' the']
backward  forward ['-', ',', ' in', '_', ' ('] ['\n', '...', ' ', ' up', ' out']
before  after ['\n', ' ', ',', '.', ' the'] ['\n', '...', ' out', ' up', ' ']
S_O_START,14,S_O_END,15,beta,1,clre,3,lre,15,lm,47
```

S_O: 12-15:

```
after  before [' upward', ' out', ' the', ' outer', ' vice'] ['\n', '...', ' out', ' up', ' ']
ahead  behind [' upward', ' out', ' the', ' outer', ' vice'] ['\n', '...', ' up', ' out', ' ']
anterior  posterior [' upward', ' out', ' the', ' outer', ' vice'] ['\n', '...', ' ', '...', ' the']
backward  forward [' upward', ' out', ' the', ' outer', ' vice'] ['\n', '...', ' up', ' ', ' out']
before  after [' upward', ' out', ' the', ' outer', ' vice'] ['\n', '...', ' out', ' ', ' up']
S_O_START,12,S_O_END,15,beta,1,clre,9,lre,15,lm,47
```


The S_O vs O_O gradients here don't seem to matter.

S_O: 12-13:
```
after  before [' upward', ' out', ' outer', ' the', ' vice'] ['\n', '...', ' out', ' up', ' ']
ahead  behind [' upward', ' out', ' outer', ' the', ' vice'] ['\n', '...', ' up', ' out', ' ']
anterior  posterior [' upward', ' out', ' outer', ' the', ' vice'] ['\n', '...', ' ', '...', ' the']
backward  forward [' upward', ' out', ' outer', ' the', ' vice'] ['\n', '...', ' ', ' up', ' out']
before  after [' upward', ' out', ' outer', ' the', ' vice'] ['\n', '...', ' out', ' ', ' up']
S_O_START,12,S_O_END,13,beta,1,clre,9,lre,15,lm,47
```

No residuals:

S_O: 16-17

```
after  before [' the', ' out', '\n', ' up', ' an'] ['\n', '...', ' out', ' up', ' ']
ahead  behind [' the', ' out', '\n', ' up', ' an'] ['\n', '...', ' up', ' out', ' ']
anterior  posterior [' the', ' out', '\n', ' up', ' an'] ['\n', '...', ' ', '...', ' the']
backward  forward [' the', ' out', '\n', ' up', ' an'] ['\n', '...', ' ', ' up', ' out']
before  after [' the', ' out', '\n', ' up', ' an'] ['\n', '...', ' up', ' out', ' ']
S_O_START,16,S_O_END,17,beta,1,clre,12,lre,15,lm,47
```

S_O: 17-18

```
after  before [' the', ' out', '\n', ' up', ' an'] ['\n', '...', ' up', ' out', ' ']
ahead  behind [' the', ' out', '\n', ' up', ' an'] ['\n', '...', ' up', ' out', ' ']
anterior  posterior [' the', ' out', '\n', ' up', ' an'] ['\n', '...', ' ', '...', ' the']
backward  forward [' the', ' out', '\n', ' up', ' an'] ['\n', '...', ' up', ' ', ' out']
before  after [' the', ' out', '\n', ' up', ' an'] ['\n', '...', ' out', ' ', ' up']
S_O_START,17,S_O_END,18,beta,1,clre,12,lre,15,lm,48
```

S_O: 2-3

```
after  before [' the', ' out', '\n', ' up', ' an'] ['\n', '...', ' out', ' up', ' ']
ahead  behind [' the', ' out', '\n', ' up', ' an'] ['\n', '...', ' up', ' out', ' ']
anterior  posterior [' the', ' out', '\n', ' up', ' an'] ['\n', '...', ' ', '...', ' the']
backward  forward [' the', ' out', '\n', ' up', ' an'] ['\n', '...', ' up', ' ', ' out']
before  after [' the', ' out', '\n', ' up', ' an'] ['\n', '...', ' out', ' ', ' up']
S_O_START,2,S_O_END,3,beta,1,clre,12,lre,15,lm,48
```

S_O: 2-24

```
after  before [' the', ' out', '\n', ' up', ' an'] ['\n', '...', ' out', ' up', ' ']
ahead  behind [' the', ' out', '\n', ' up', ' an'] ['\n', '...', ' up', ' out', ' ']
anterior  posterior [' the', ' out', '\n', ' up', ' an'] ['\n', '...', ' ', '...', ' the']
backward  forward [' the', ' out', '\n', ' up', ' an'] ['\n', '...', ' ', ' up', ' out']
before  after [' the', ' out', '\n', ' up', ' an'] ['\n', '...', ' out', ' up', ' ']
S_O_START,2,S_O_END,24,beta,1,clre,12,lre,15,lm,47
```


With S_O derivatives at all layers:

Starting at layer 10, the LRE (with the derivative from 5 to 27, which is confusing) does a lot better than the LLRA, which is stuck on a single output.

```
after  before [' the', '\n', ' a', ',', ' an'] ['\n', ' up', ' ahead', ' ', ' on']
ahead  behind [' the', '\n', ' a', ',', ' an'] [' behind', ' ahead', ' back', '\n', ' ']
anterior  posterior [' the', '\n', ' a', ',', ' an'] [' posterior', '\n', ' ', '...', '...']
backward  forward [' the', '\n', ' a', ',', ' an'] [' forward', '\n', '...', ' up', ' backward']
before  after [' the', '\n', ' a', ',', ' an'] [' after', ' behind', '\n', ' now', ' up']
S_O_START,10,S_O_END,27,beta,1,clre,0,lre,36,lm,47
```

Starting at layer 5, the LRE has results in the right area at least:

```
after  before [' the', ' out', '\n', ' up', ' an'] ['\n', ' up', ' out', ' on', '...']
ahead  behind [' the', ' out', '\n', ' up', ' an'] ['\n', ' up', ' behind', ' ', ' ahead']
anterior  posterior [' the', ' out', '\n', ' up', ' an'] ['\n', ' ', '...', '...', ' the']
backward  forward [' the', ' out', '\n', ' up', ' an'] ['\n', ' forward', '...', ' up', ' ']
before  after [' the', ' out', '\n', ' up', ' an'] ['\n', ' up', ' on', ' after', ' ']
beginning  end [' the', ' out', '\n', ' up', ' an'] ['\n', '...', ' ', ' up', ' the']
S_O_START,15,S_O_END,16,beta,1,clre,12,lre,23,lm,46
```

With S_O from 5 to 26:

```
after  before [' the', ' out', '\n', ' upward', ' an'] ['\n', ' up', ' out', ' on', ' ']
ahead  behind [' the', ' out', '\n', ' upward', ' an'] ['\n', ' up', ' behind', ' ahead', ' ']
anterior  posterior [' the', ' out', '\n', ' upward', ' an'] ['\n', ' ', '...', ' the', '...']
backward  forward [' the', ' out', '\n', ' upward', ' an'] ['\n', ' forward', ' up', '...', ' ']
before  after [' the', ' out', '\n', ' upward', ' an'] ['\n', ' up', ' ', '...', ' on']
beginning  end [' the', ' out', '\n', ' upward', ' an'] ['\n', '...', ' ', ' the', ' up']
S_O_START,5,S_O_END,26,beta,1,clre,9,lre,22,lm,46
```

With S_O from 6 to 26:

```
after  before [' the', ' out', '\n', ' upward', ' an'] ['\n', ' up', ' out', ' on', '...']
ahead  behind [' the', ' out', '\n', ' upward', ' an'] ['\n', ' up', ' behind', ' ahead', ' on']
anterior  posterior [' the', ' out', '\n', ' upward', ' an'] ['\n', '...', ' ', '...', ' the']
backward  forward [' the', ' out', '\n', ' upward', ' an'] ['\n', ' forward', '...', ' up', ' ']
before  after [' the', ' out', '\n', ' upward', ' an'] ['\n', ' up', ' on', '...', ' ']
beginning  end [' the', ' out', '\n', ' upward', ' an'] ['\n', '...', ' ', ' up', ' the']
below  above [' the', ' out', '\n', ' upward', ' an'] [' up', '\n', ' on', ' ', ' out']
climb  descend [' the', ' out', '\n', ' upward', ' an'] ['\n', ' up', ' ', ' on', '...']
dead  alive [' the', ' out', '\n', ' upward', ' an'] ['\n', ' up', '...', ' ', ' on']
decrement  increment [' the', ' out', '\n', ' upward', ' an'] ['\n', ' ', ' up', '...', ' the']
S_O_START,6,S_O_END,26,beta,1,clre,9,lre,22,lm,48
```

With S_O from 25 to 26:
```
after  before [' the', ' out', '\n', ' upward', ' up'] ['\n', ' up', ' out', ' on', ' ']
ahead  behind [' the', ' out', '\n', ' upward', ' up'] ['\n', ' up', ' ', ' behind', '...']
anterior  posterior [' the', ' out', '\n', ' upward', ' up'] ['\n', ' ', '...', '...', ' the']
backward  forward [' the', ' out', '\n', ' upward', ' up'] ['\n', ' forward', '...', ' up', ' ']
before  after [' the', ' out', '\n', ' upward', ' up'] ['\n', ' up', ' out', ' on', '...']
beginning  end [' the', ' out', '\n', ' upward', ' up'] ['\n', '...', ' ', ' up', ' the']
S_O_START,25,S_O_END,26,beta,1,clre,12,lre,22,lm,47
```

The prediction is `[' the', ' out', '\n', ' upward', ' up']`  for everything.


Residuals have been enabled
With S_O from 13 to 18:

```
after  before [' upward', ' out', ' the', '\n', ' outer'] ['\n', ' up', ' out', ' on', '...']
ahead  behind [' upward', ' out', ' the', ' outer', '\n'] ['\n', ' up', ' ', ' behind', ' on']
anterior  posterior [' upward', ' out', ' the', '\n', ' outer'] ['\n', ' ', '...', '...', ' the']
backward  forward [' upward', ' out', ' the', ' outer', '\n'] ['\n', ' forward', '...', ' up', ' ']
before  after [' upward', ' out', ' the', ' outer', '\n'] ['\n', ' up', ' ', '...', ' on']
beginning  end [' upward', ' out', ' the', ' outer', '\n'] ['\n', '...', ' ', ' the', ' up']
below  above [' upward', ' out', ' the', '\n', ' outer'] [' up', '\n', ' on', ' ', ' out']
climb  descend [' upward', ' out', ' the', '\n', ' outer'] ['\n', ' up', ' ', ' on', '...']
dead  alive [' upward', ' out', ' the', ' outer', '\n'] ['\n', ' up', ' on', '...', ' ']
decrement  increment [' upward', ' out', ' the', ' outer', '\n'] ['\n', ' ', ' up', '...', ' the']
S_O_START,13,S_O_END,18,beta,1,clre,9,lre,22,lm,47
```

With S_O from 5 to 5 (no subject to object transition).

```
after  before [' upward', ' out', ' outer', ' outward', ' the'] ['\n', ' up', ' out', ' on', ' ']
ahead  behind [' upward', ' out', ' outer', ' outward', ' the'] ['\n', ' up', ' behind', ' ', '...']
anterior  posterior [' upward', ' out', ' outer', ' outward', ' the'] ['\n', ' ', '...', ' the', '...']
backward  forward [' upward', ' out', ' outer', ' outward', ' the'] ['\n', ' forward', ' up', '...', ' ']
before  after [' upward', ' out', ' outer', ' outward', ' the'] ['\n', ' up', ' on', '...', ' ']
beginning  end [' upward', ' out', ' outer', ' outward', ' the'] ['\n', '...', ' ', ' the', ' up']
below  above [' upward', ' out', ' outer', ' outward', ' the'] [' up', '\n', ' on', ' ', ' above']
climb  descend [' upward', ' out', ' outer', ' outward', ' the'] ['\n', ' up', ' ', ' on', '...']
dead  alive [' upward', ' out', ' outer', ' outward', ' the'] [' up', '\n', ' on', '...', ' out']
decrement  increment [' upward', ' out', ' outer', ' outward', ' the'] ['\n', ' up', ' ', '...', ' the']
S_O_START,5,S_O_END,5,beta,1,clre,9,lre,22,lm,47
```

With S_O from 5 to 6 (immediate subject to object transition)

```
after  before [' upward', ' out', ' outer', ' outward', ' the'] ['\n', ' up', ' out', ' on', ' ']
ahead  behind [' upward', ' out', ' outer', ' the', ' outward'] ['\n', ' up', ' behind', ' ahead', ' on']
anterior  posterior [' upward', ' out', ' outer', ' the', ' outward'] ['\n', ' ', '...', ' the', '...']
backward  forward [' upward', ' out', ' outer', ' the', ' outward'] ['\n', ' forward', '...', ' up', ' ']
before  after [' upward', ' out', ' outer', ' the', ' outward'] ['\n', ' up', '...', ' on', ' out']
beginning  end [' upward', ' out', ' outer', ' the', ' outward'] ['\n', '...', ' ', ' up', ' the']
below  above [' upward', ' out', ' outer', ' outward', ' the'] [' up', '\n', ' on', ' ', ' out']
climb  descend [' upward', ' out', ' outer', ' outward', ' the'] ['\n', ' up', ' ', ' on', '...']
dead  alive [' upward', ' out', ' outer', ' outward', ' the'] ['\n', ' up', '...', ' on', ' the']
decrement  increment [' upward', ' out', ' outer', ' the', ' outward'] ['\n', ' ', ' up', '...', ' the']
S_O_START,5,S_O_END,6,beta,1,clre,9,lre,22,lm,46
```

With S_O from 5 to 26 (S->O with (two?) O->O at the end)

```
after  before [' upward', ' out', ' the', ' not', ' '] ['\n', ' up', ' out', ' on', ' ']
ahead  behind [' out', ' upward', ' the', ' ', ' up'] ['\n', ' up', ' behind', ' out', ' ']
anterior  posterior [' upward', ' out', ' the', ' ', '\n'] ['\n', ' ', '...', '...', ' the']
backward  forward [' upward', ' out', ' the', ' ', ' not'] ['\n', ' forward', ' up', '...', ' ']
before  after [' upward', ' out', ' the', ' ', '\n'] ['\n', ' up', ' out', ' after', ' on']
beginning  end [' upward', ' out', ' the', '\n', ' '] ['\n', '...', ' ', ' up', ' the']
below  above [' upward', ' out', ' the', ' ', '\n'] [' up', '\n', ' on', ' ', '...']
climb  descend [' upward', ' out', ' the', ' ', '\n'] ['\n', ' up', ' ', '...', ' on']
dead  alive [' out', ' upward', ' the', ' ', ' not'] ['\n', ' up', ' on', '...', ' ']
decrement  increment [' upward', ' out', ' the', ' ', '\n'] ['\n', ' up', ' ', '...', ' the']
S_O_START,5,S_O_END,26,beta,1,clre,9,lre,23,lm,47
```

With S_O from 22 to 26:

```
after  before [' is', ',', ' (', ' to', '-'] ['\n', ' up', ' out', ' on', '...']
ahead  behind [' is', ',', ' (', ' or', ' to'] ['\n', ' up', ' behind', ' ', '...']
anterior  posterior [' is', ',', ' (', ' or', ' to'] ['\n', ' ', '...', '...', ' the']
backward  forward [' is', ',', ' (', ' to', ' or'] ['\n', ' forward', ' up', '...', ' ']
before  after [' is', ',', ' (', ' to', '-'] ['\n', ' up', ' on', ' ', '...']
beginning  end [' is', ',', ' (', ' to', ' or'] ['\n', '...', ' ', ' up', ' the']
below  above [' is', ',', ' (', '-', ' to'] [' up', '\n', ' on', ' ', '...']
climb  descend [' is', ',', ' (', ' or', ' to'] ['\n', ' ', ' up', ' on', '...']
dead  alive [' is', ',', ' (', ' to', ' or'] ['\n', ' up', ' on', '...', ' the']
decrement  increment [' is', ',', ' (', ' to', ' or'] ['\n', ' ', ' up', '...', ' the']
S_O_START,22,S_O_END,26,beta,1,clre,0,lre,22,lm,47
```

With S_O from 24 to 27:

```
after  before [' is', ',', '-', ' (', ' or'] ['\n', ' up', ' out', ' on', '...']
ahead  behind [' is', ',', '-', ' (', ' or'] ['\n', ' up', ' behind', ' ahead', ' ']
anterior  posterior [' is', ',', ' (', '-', ' or'] ['\n', '...', ' ', ' the', '...']
backward  forward [' is', ',', ' (', '-', ' or'] ['\n', ' forward', ' up', '...', ' ']
before  after [' is', ',', '-', ' (', ' or'] ['\n', ' up', ' ', ' on', '...']
beginning  end [' is', ',', ' (', '-', ' or'] ['\n', '...', ' ', ' up', ' the']
below  above [' is', ',', '-', ' (', ' or'] [' up', '\n', ' on', ' ', ' out']
climb  descend [' is', ',', ' (', '-', ' or'] ['\n', ' up', ' ', ' on', '...']
dead  alive [' is', ',', ' (', '-', ' or'] [' up', '\n', ' on', '...', ' out']
decrement  increment [' is', ',', ' (', '-', ' or'] ['\n', ' ', ' up', '...', ' the']
S_O_START,24,S_O_END,27,beta,1,clre,0,lre,22,lm,47
```

With S_O from 20-24:
```
after  before [' is', ',', ' the', ' to', ' ('] ['\n', ' up', ' out', ' on', ' ']
ahead  behind [' is', ',', ' to', ' the', ' ('] ['\n', ' up', ' ', ' behind', ' on']
anterior  posterior [' is', ',', ' to', ' the', ' ('] ['\n', '...', ' ', '...', ' the']
backward  forward [' is', ',', ' to', ' the', ' ('] ['\n', ' forward', ' up', '...', ' ']
before  after [' is', ',', ' the', ' to', ' ('] ['\n', ' up', ' on', ' ', '...']
beginning  end [' is', ',', ' to', ' the', ' ('] ['\n', '...', ' ', ' the', ' up']
below  above [' is', ',', ' the', ' to', ' ('] [' up', '\n', ' on', ' ', ' out']
climb  descend [' is', ',', ' to', ' the', ' ('] ['\n', ' up', ' ', ' on', '...']
dead  alive [' is', ',', ' the', ' to', ' ('] ['\n', ' up', '...', ' the', ' on']
decrement  increment [' is', ',', ' the', ' to', ' ('] ['\n', ' ', ' up', '...', ' the']
S_O_START,20,S_O_END,24,beta,1,clre,0,lre,22,lm,47
```

With S_O from 20-21:
```
after  before [' is', ',', ' the', ' to', ' ('] ['\n', ' up', ' out', ' on', '...']
ahead  behind [' is', ',', ' to', ' the', ' ('] ['\n', ' behind', ' up', ' ahead', ' ']
anterior  posterior [' is', ',', ' to', ' (', ' the'] ['\n', '...', ' ', '...', ' the']
backward  forward [' is', ',', ' to', ' the', ' ('] ['\n', ' forward', ' up', '...', ' ']
before  after [' is', ',', ' the', ' to', ' ('] ['\n', ' up', ' now', ' on', ' out']
beginning  end [' is', ',', ' to', ' the', ' ('] ['\n', '...', ' ', ' up', ' the']
below  above [' is', ',', ' to', ' the', '...'] [' up', '\n', ' on', ' ', ' out']
climb  descend [' is', ',', ' to', ' the', ' ('] ['\n', ' ', ' up', '...', ' on']
dead  alive [' is', ',', ' the', ' to', ' ('] ['\n', ' up', ' on', ' the', ' ']
decrement  increment [' is', ',', ' the', ' to', ' ('] ['\n', ' up', ' ', '...', ' the']
S_O_START,20,S_O_END,21,beta,1,clre,0,lre,22,lm,48
```

With S_O from 13-21:
```
after  before [' upward', ' out', ' the', ' outer', ' outward'] ['\n', ' up', ' out', ' on', '...']
ahead  behind [' upward', ' out', ' the', ' outer', ' vice'] ['\n', ' up', ' behind', ' ', '...']
anterior  posterior [' upward', ' out', ' the', ' outer', '\n'] ['\n', ' ', '...', ' the', '...']
backward  forward [' upward', ' out', ' the', ' outer', ' vice'] ['\n', ' forward', ' up', '...', ' ']
before  after [' upward', ' out', ' the', ' outer', ' outward'] ['\n', ' up', '...', ' on', ' ']
beginning  end [' upward', ' out', ' the', ' outer', ' a'] ['\n', '...', ' ', ' up', ' the']
below  above [' upward', ' out', ' the', ' outer', '\n'] [' up', '\n', ' ', ' on', ' out']
climb  descend [' upward', ' out', ' the', ' outer', '\n'] ['\n', ' up', ' ', ' on', '...']
dead  alive [' upward', ' out', ' the', ' outer', ' outward'] ['\n', ' up', '...', ' on', ' the']
decrement  increment [' upward', ' out', ' the', ' outer', ' outward'] ['\n', ' ', ' up', '...', ' the']
S_O_START,13,S_O_END,21,beta,1,clre,9,lre,22,lm,47
```

With S_O from 13 to 15:
```
after  before [' upward', ' out', ' the', ' outer', '\n'] ['\n', ' up', ' out', ' on', ' ']
ahead  behind [' upward', ' out', ' the', ' outer', ' vice'] ['\n', ' up', ' behind', ' ahead', ' on']
anterior  posterior [' upward', ' out', ' the', ' outer', '\n'] ['\n', ' ', '...', ' the', '...']
backward  forward [' upward', ' out', ' the', ' outer', ' vice'] ['\n', ' forward', ' up', '...', ' ']
before  after [' upward', ' out', ' the', ' outer', '\n'] ['\n', ' up', ' on', ' out', '...']
beginning  end [' upward', ' out', ' the', ' outer', '\n'] ['\n', '...', ' ', ' up', ' the']
below  above [' upward', ' out', ' the', ' outer', '\n'] [' up', '\n', ' ', ' on', '...']
climb  descend [' upward', ' out', ' the', ' outer', '\n'] ['\n', ' up', ' ', ' on', '...']
dead  alive [' upward', ' out', ' the', ' outer', '\n'] ['\n', ' up', '...', ' on', ' ']
decrement  increment [' upward', ' out', ' the', ' outer', '\n'] ['\n', ' up', ' ', '...', ' the']
S_O_START,13,S_O_END,15,beta,1,clre,9,lre,22,lm,48
```

With S_O from 10 to 13:

```
after  before [' upward', ' out', ' outer', ' the', ' outward'] ['\n', ' up', ' out', ' on', '...']
ahead  behind [' upward', ' out', ' outer', ' the', ' outward'] ['\n', ' up', ' behind', ' out', ' ahead']
anterior  posterior [' upward', ' out', ' outer', ' the', ' outward'] ['\n', ' ', '...', '...', ' the']
backward  forward [' upward', ' out', ' outer', ' the', ' outward'] ['\n', ' forward', ' up', '...', ' ']
before  after [' upward', ' out', ' outer', ' the', ' outward'] ['\n', ' up', ' on', ' out', ' ']
beginning  end [' upward', ' out', ' outer', ' the', ' outward'] ['\n', '...', ' ', ' up', ' the']
below  above [' upward', ' out', ' outer', ' the', ' outward'] [' up', '\n', ' on', ' ', ' out']
climb  descend [' upward', ' out', ' outer', ' the', ' outward'] ['\n', ' up', ' ', ' on', '...']
dead  alive [' upward', ' out', ' outer', ' the', ' outward'] ['\n', ' up', '...', ' on', ' the']
decrement  increment [' upward', ' out', ' outer', ' the', ' outward'] ['\n', ' up', ' ', '...', ' the']
S_O_START,10,S_O_END,13,beta,1,clre,9,lre,22,lm,48
```

At this point we go back to disabling the residual and layer bias for the S_S and O_O layers.

S_O: 20-21

```
after  before ['-', ' in', ' (', ',', '...'] ['\n', ' up', ' out', ' on', '...']
ahead  behind ['\n', ' ', '.', ',', ' in'] ['\n', ' up', ' on', ' ahead', ' ']
anterior  posterior ['\n', ' ', ' the', '.', ' have'] ['\n', ' ', '...', ' the', '...']
backward  forward ['\n', ' ', '.', ' the', ','] ['\n', ' forward', ' up', '...', ' ']
before  after ['-', ' in', ' (', ',', '...'] ['\n', ' up', ' out', ' on', ' after']
beginning  end ['\n', ' ', '.', ',', ' the'] ['\n', '...', ' ', ' the', ' up']
below  above ['\n', ' ', ' the', ',', '.'] [' up', '\n', ' on', ' ', ' above']
climb  descend ['\n', ' ', ' the', '.', ','] ['\n', ' up', ' ', '...', ' on']
dead  alive ['\n', ' in', ' ', '.', ','] [' up', '\n', ' on', '...', ' ']
decrement  increment ['\n', ' ', ' the', '.', ' have'] ['\n', ' ', ' up', '...', ' the']
S_O_START,20,S_O_END,21,beta,1,clre,1,lre,22,lm,46
```

S_O: 7-8:

```
after  before ['-', ',', ' in', ' (', '_'] ['\n', ' up', ' out', ' on', '...']
ahead  behind ['-', ',', ' in', ' (', '_'] ['\n', ' up', ' behind', ' ahead', ' ']
anterior  posterior ['\n', ',', ' in', ' ', '.'] ['\n', ' ', '...', '...', ' the']
backward  forward [' in', ',', '-', ' (', '\n'] ['\n', ' forward', ' up', '...', ' ']
before  after [' in', ',', '-', ' (', '\n'] ['\n', ' up', '...', ' on', ' ']
beginning  end ['\n', ',', ' ', '.', ' the'] ['\n', '...', ' ', ' the', ' up']
below  above ['-', ',', ' in', ' (', '_'] [' up', '\n', ' on', ' ', ' out']
climb  descend ['-', '_', ',', ' (', '...'] ['\n', ' up', ' ', ' on', '...']
dead  alive ['-', ',', ' in', ' (', '_'] ['\n', ' up', '...', ' the', ' on']
decrement  increment ['-', ',', '_', ' (', ' in'] ['\n', ' up', ' ', '...', ' the']
S_O_START,7,S_O_END,8,beta,1,clre,2,lre,22,lm,47
```

S_O: 5-26:

```
after  before ['-', ',', '_', ' (', '\n'] [' up', '\n', ' out', ' on', '...']
ahead  behind ['-', ',', '_', ' (', '\n'] ['\n', ' up', ' behind', ' out', ' ahead']
anterior  posterior ['-', ',', '_', ' (', '\n'] ['\n', ' ', '...', ' the', '...']
backward  forward ['-', ',', '_', ' (', '\n'] ['\n', ' forward', ' up', '...', ' ']
before  after ['-', ',', '_', ' (', '\n'] ['\n', ' up', ' on', ' out', ' ']
beginning  end ['-', ',', '_', ' (', '\n'] ['\n', '...', ' ', ' the', ' up']
below  above ['-', ',', '_', ' (', '\n'] [' up', '\n', ' ', ' on', ' out']
climb  descend ['-', ',', '_', ' (', '\n'] ['\n', ' ', ' up', '...', ' on']
dead  alive ['-', ',', '_', ' (', '\n'] [' up', '\n', ' on', '...', ' out']
decrement  increment ['-', ',', '_', ' (', '\n'] ['\n', ' up', ' ', '...', ' the']
S_O_START,5,S_O_END,26,beta,1,clre,0,lre,22,lm,47
```

S_O: 14-15:
```
after  before ['\n', ' ', ',', '.', ' the'] ['\n', ' up', ' out', ' on', '...']
ahead  behind ['\n', ' ', ',', '.', ' the'] ['\n', ' up', ' behind', ' ahead', ' ']
anterior  posterior ['\n', ' ', ',', '.', ' the'] ['\n', ' ', '...', ' the', '...']
backward  forward ['\n', ' ', ',', '.', ' the'] ['\n', ' forward', ' up', '...', ' ']
before  after ['\n', ' ', ',', '.', ' the'] ['\n', ' up', ' now', ' after', ' out']
beginning  end ['\n', ' ', ',', '.', ' the'] ['\n', '...', ' ', ' the', ' up']
below  above ['\n', ' ', ',', '.', ' the'] [' up', '\n', ' on', ' ', ' out']
climb  descend ['\n', ' ', ',', '.', ' the'] ['\n', ' up', ' ', ' on', '...']
dead  alive ['\n', ' ', ',', '.', ' the'] [' up', '\n', ' on', '...', ' out']
decrement  increment ['\n', ' ', ',', '.', ' the'] ['\n', ' up', ' ', '...', ' the']
S_O_START,14,S_O_END,15,beta,1,clre,1,lre,23,lm,46
```

S_O: 14-20

```
after  before [' Petty', ' Strongh', ' Somers', ' Corridor', ' Brick'] ['\n', ' up', ' out', ' on', '...']
ahead  behind [' Petty', ' Strongh', ' Somers', ' Corridor', ' Brick'] ['\n', ' behind', ' up', ' ', '...']
anterior  posterior [' Petty', ' Strongh', ' Somers', ' Corridor', ' Brick'] ['\n', ' ', '...', ' the', '...']
backward  forward [' Petty', ' Strongh', ' Somers', ' Corridor', ' Brick'] ['\n', ' forward', ' up', '...', ' ']
before  after [' Petty', ' Strongh', ' Somers', ' Corridor', ' Brick'] ['\n', ' up', ' out', ' on', '...']
S_O_START,14,S_O_END,20,beta,1,clre,0,lre,22,lm,47
```
S_O: 13-19:

```
after  before ['\n', ' ', ' the', ' is', ' have'] ['\n', ' up', ' out', ' on', '...']
ahead  behind ['\n', ' ', ' the', ' is', ' have'] ['\n', ' up', ' on', ' ', ' ahead']
anterior  posterior ['\n', ' ', ' the', ' is', ' have'] ['\n', '...', ' ', ' the', '...']
backward  forward ['\n', ' ', ' the', ' is', ' have'] ['\n', ' forward', '...', ' up', ' ']
before  after ['\n', ' ', ' the', ' is', ' have'] ['\n', ' up', ' on', ' out', '...']
S_O_START,13,S_O_END,19,beta,1,clre,0,lre,21,lm,48
```

12-18:

```
after  before ['\xad', '-', '_', 'est', ' \xad'] ['\n', ' up', ' out', ' on', '...']
ahead  behind ['\xad', '-', '_', 'est', ' \xad'] ['\n', ' behind', ' up', ' ahead', ' on']
anterior  posterior ['\xad', '-', '_', 'est', ' \xad'] ['\n', ' ', '...', ' the', '...']
backward  forward ['\xad', '-', '_', 'est', ' \xad'] ['\n', ' forward', ' up', '...', ' ']
before  after ['\xad', '-', '_', 'est', ' \xad'] ['\n', ' up', ' on', ' after', ' ']
beginning  end ['\xad', '-', '_', 'est', ' \xad'] ['\n', '...', ' ', ' up', ' the']
below  above ['\xad', '-', '_', 'est', ' \xad'] [' up', '\n', ' on', ' ', ' out']
climb  descend ['\xad', '-', '_', 'est', ' \xad'] ['\n', ' ', ' up', '...', ' on']
dead  alive ['\xad', '-', '_', 'est', ' \xad'] [' up', '\n', ' on', ' the', '...']
decrement  increment ['\xad', '-', '_', 'est', ' \xad'] ['\n', ' ', ' up', '...', ' the']
S_O_START,12,S_O_END,18,beta,1,clre,0,lre,23,lm,47
```

12-17:

```
after  before ['\n', ' The', ' have', ' was', ' '] ['\n', ' up', ' out', ' on', ' ']
ahead  behind ['\n', ' The', ' have', ' Let', ' '] ['\n', ' up', ' behind', ' ', ' ahead']
anterior  posterior ['\n', ' The', ' Let', ' Jackson', ' have'] ['\n', ' ', '...', '...', ' the']
backward  forward ['\n', ' The', ' have', ' Let', ' '] ['\n', ' forward', ' up', '...', ' ']
before  after ['\n', ' The', ' have', ' Let', ' was'] ['\n', ' up', ' out', ' on', ' ']
```

12-15:

```
after  before ['\n', ' ', ',', '.', ' the'] ['\n', ' up', ' out', ' on', '...']
ahead  behind ['\n', ' ', ',', '.', ' the'] ['\n', ' ahead', ' up', ' behind', ' out']
anterior  posterior ['\n', ' ', ',', '.', ' the'] ['\n', ' ', '...', '...', ' the']
backward  forward ['\n', ' ', ',', '.', ' the'] ['\n', ' forward', ' up', '...', ' ']
before  after ['\n', ' ', ',', '.', ' the'] ['\n', ' up', '...', ' ', ' now']
S_O_START,12,S_O_END,15,beta,1,clre,1,lre,22,lm,48
```

12-13:

```
after  before ['\n', ' have', ' The', ' the', ' is'] ['\n', ' up', ' out', ' on', ' ']
ahead  behind ['\n', ' have', ' The', ' the', ' is'] ['\n', ' up', ' ', ' behind', ' ahead']
anterior  posterior ['\n', ' have', ' The', ' the', ' is'] ['\n', ' ', '...', ' the', '...']
backward  forward ['\n', ' have', ' The', ' the', ' is'] ['\n', ' forward', ' up', '...', ' ']
before  after ['\n', ' have', ' The', ' the', ' '] ['\n', ' up', ' on', '...', ' out']
```

S-O: 10->19 tests, no residual or layer bias for S_S or O_O, no residual on S_O

```
after  before ['\n', ' ', ',', '.', ' the'] ['\n', ' up', ' out', ' on', '...']
ahead  behind ['\n', ' ', ',', '.', ' the'] ['\n', ' up', ' on', ' ', ' behind']
anterior  posterior ['\n', ' ', ',', '.', ' in'] ['\n', '...', ' ', '...', ' the']
backward  forward ['\n', ' ', ',', '.', ' in'] ['\n', ' forward', ' up', '...', ' ']
before  after ['\n', ' ', ',', '.', ' the'] ['\n', ' up', ' on', ' ', '...']
S_O_START,10,S_O_END,11,beta,1,clre,1,lre,22,lm,47
after  before ['\xad', 'inf', 'est', ' \xad', 'un'] ['\n', ' up', ' out', ' on', '...']
ahead  behind ['\xad', 'inf', 'est', ' \xad', 'un'] ['\n', ' up', ' on', ' ', ' behind']
anterior  posterior ['\xad', 'inf', 'est', ' \xad', 'un'] ['\n', '...', ' ', '...', ' the']
backward  forward ['\xad', 'inf', 'est', ' \xad', 'un'] ['\n', ' forward', ' up', '...', ' ']
before  after ['\xad', 'inf', 'est', ' \xad', 'un'] ['\n', ' up', ' on', ' ', '...']
S_O_START,11,S_O_END,12,beta,1,clre,4,lre,44,lm,94
after  before ['\n', ' The', ' have', 'The', ' was'] ['\n', ' up', ' out', ' on', '...']
ahead  behind ['\n', ' The', ' have', 'The', ' was'] ['\n', ' up', ' on', ' ', ' behind']
anterior  posterior ['\n', ' The', ' have', 'The', ' was'] ['\n', '...', ' ', '...', ' the']
backward  forward ['\n', ' The', 'The', ' have', ' was'] ['\n', ' forward', ' up', '...', ' ']
before  after ['\n', ' The', ' have', 'The', ' was'] ['\n', ' up', ' on', ' ', '...']
S_O_START,12,S_O_END,13,beta,1,clre,4,lre,66,lm,141
after  before ['\n', ' ', ' have', ' the', ' The'] ['\n', ' up', ' out', ' on', '...']
ahead  behind ['\n', ' ', ' the', ' have', ' is'] ['\n', ' up', ' on', ' ', ' behind']
anterior  posterior ['\n', ' ', ' the', ' have', ' was'] ['\n', '...', ' ', '...', ' the']
backward  forward ['\n', ' ', ' have', ' the', ' is'] ['\n', ' forward', ' up', '...', ' ']
before  after ['\n', ' ', ' have', ' the', ' is'] ['\n', ' up', ' on', ' ', '...']
S_O_START,13,S_O_END,14,beta,1,clre,4,lre,88,lm,188
after  before [' in', ',', '-', ' (', '\n'] ['\n', ' up', ' out', ' on', '...']
ahead  behind [' in', ',', '-', ' (', '\n'] ['\n', ' up', ' on', ' ', ' behind']
anterior  posterior [' in', '-', ',', ' (', ' on'] ['\n', '...', ' ', '...', ' the']
backward  forward [' in', '-', ',', ' (', ' on'] ['\n', ' forward', ' up', '...', ' ']
before  after [' in', ',', '-', ' (', ' on'] ['\n', ' up', ' on', ' ', '...']
S_O_START,14,S_O_END,15,beta,1,clre,8,lre,110,lm,235
after  before ['\xad', '-', '_', 'est', ' \xad'] ['\n', ' up', ' out', ' on', '...']
ahead  behind ['\xad', '-', '_', 'est', ' \xad'] ['\n', ' up', ' on', ' ', ' behind']
anterior  posterior ['\xad', '-', '_', 'est', ' \xad'] ['\n', '...', ' ', '...', ' the']
backward  forward ['\xad', '-', '_', 'est', ' \xad'] ['\n', ' forward', ' up', '...', ' ']
before  after ['\xad', '-', '_', 'est', ' \xad'] ['\n', ' up', ' on', ' ', '...']
S_O_START,15,S_O_END,16,beta,1,clre,8,lre,132,lm,282
after  before ['-', '_', '\xad', ',', '...'] ['\n', ' up', ' out', ' on', '...']
ahead  behind ['-', '...', ' (', '_', ','] ['\n', ' up', ' on', ' ', ' behind']
anterior  posterior ['-', '_', ',', ' (', '...'] ['\n', '...', ' ', '...', ' the']
backward  forward ['-', '_', '...', ',', ' ('] ['\n', ' forward', ' up', '...', ' ']
before  after ['-', '_', '\xad', ',', '...'] ['\n', ' up', ' on', ' ', '...']
S_O_START,16,S_O_END,17,beta,1,clre,9,lre,154,lm,329
after  before ['-', '\xad', '_', ' \xad', ' and'] ['\n', ' up', ' out', ' on', '...']
ahead  behind ['-', '\xad', '_', ' \xad', ' and'] ['\n', ' up', ' on', ' ', ' behind']
anterior  posterior ['-', '\xad', '_', ' \xad', ' and'] ['\n', '...', ' ', '...', ' the']
backward  forward ['-', '\xad', '_', ' \xad', ' and'] ['\n', ' forward', ' up', '...', ' ']
before  after ['-', '\xad', '_', ' \xad', ' and'] ['\n', ' up', ' on', ' ', '...']
S_O_START,17,S_O_END,18,beta,1,clre,9,lre,176,lm,376
after  before [' Liang', '�', '�', '�', 'Philipp'] ['\n', ' up', ' out', ' on', '...']
ahead  behind ['The', ' The', '\n', '�', ' have'] ['\n', ' up', ' on', ' ', ' behind']
anterior  posterior ['�', ' Liang', '�', '�', 'The'] ['\n', '...', ' ', '...', ' the']
backward  forward ['The', '�', ' Liang', ' The', '�'] ['\n', ' forward', ' up', '...', ' ']
before  after [' Liang', '�', '�', '�', 'Philipp'] ['\n', ' up', ' on', ' ', '...']
S_O_START,18,S_O_END,19,beta,1,clre,9,lre,198,lm,423
```

With residual on S_O

```
after  before ['\n', ' ', ' the', '.', ' is'] ['\n', ' up', ' out', ' on', '...']
ahead  behind ['\n', ' ', ' the', '.', ','] ['\n', ' up', ' behind', ' ', ' ahead']
anterior  posterior ['\n', ' ', ' the', '.', ','] ['\n', ' ', '...', '...', ' the']
backward  forward ['\n', ' ', ' the', '.', ' is'] ['\n', ' forward', ' up', '...', ' ']
before  after ['\n', ' ', ' the', '.', ' is'] ['\n', ' up', ' out', ' on', ' ']
S_O_START,10,S_O_END,11,beta,1,clre,0,lre,22,lm,47
after  before ['levels', ' Strongh', ' Petty', 'pillar', ' Disciple'] ['\n', ' up', ' out', ' on', '...']
ahead  behind ['inf', '\xad', 'broad', 'est', 'out'] ['\n', ' up', ' behind', ' ', ' ahead']
anterior  posterior ['inf', '\xad', 'broad', 'est', 'out'] ['\n', ' ', '...', '...', ' the']
backward  forward ['broad', 'inf', 'leg', 'mount', 'level'] ['\n', ' forward', ' up', '...', ' ']
before  after ['broad', 'inf', 'mount', 'inner', 'level'] ['\n', ' up', ' out', ' on', ' ']
S_O_START,11,S_O_END,12,beta,1,clre,0,lre,44,lm,94
after  before ['\n', ' The', ' have', ' the', 'The'] ['\n', ' up', ' out', ' on', '...']
ahead  behind ['\n', ' have', ' The', ' the', ' is'] ['\n', ' up', ' behind', ' ', ' ahead']
anterior  posterior ['\n', ' have', ' The', ' the', ' is'] ['\n', ' ', '...', '...', ' the']
backward  forward ['\n', ' The', ' have', ' the', ' is'] ['\n', ' forward', ' up', '...', ' ']
before  after ['\n', ' have', ' The', ' the', ' '] ['\n', ' up', ' out', ' on', ' ']
S_O_START,12,S_O_END,13,beta,1,clre,0,lre,66,lm,141
after  before ['\n', ' ', ' the', ' have', ' is'] ['\n', ' up', ' out', ' on', '...']
ahead  behind ['\n', ' ', ' the', '.', ' have'] ['\n', ' up', ' behind', ' ', ' ahead']
anterior  posterior ['\n', ' ', ' the', '.', ' is'] ['\n', ' ', '...', '...', ' the']
backward  forward ['\n', ' ', ' the', ' have', '.'] ['\n', ' forward', ' up', '...', ' ']
before  after ['\n', ' ', ' the', '.', ' have'] ['\n', ' up', ' out', ' on', ' ']
S_O_START,13,S_O_END,14,beta,1,clre,0,lre,88,lm,188
after  before ['\n', ' ', ',', '.', ' the'] ['\n', ' up', ' out', ' on', '...']
ahead  behind ['\n', ' ', ',', '.', ' the'] ['\n', ' up', ' behind', ' ', ' ahead']
anterior  posterior ['\n', ' ', ',', '.', ' the'] ['\n', ' ', '...', '...', ' the']
backward  forward ['\n', ' ', ',', '.', ' the'] ['\n', ' forward', ' up', '...', ' ']
before  after ['\n', ' ', ',', '.', ' the'] ['\n', ' up', ' out', ' on', ' ']
S_O_START,14,S_O_END,15,beta,1,clre,0,lre,110,lm,235
after  before ['\xad', 'est', '-', ' \xad', '_'] ['\n', ' up', ' out', ' on', '...']
ahead  behind ['\xad', '-', 'est', ' \xad', '_'] ['\n', ' up', ' behind', ' ', ' ahead']
anterior  posterior ['\xad', '-', '_', 'est', ' \xad'] ['\n', ' ', '...', '...', ' the']
backward  forward ['\xad', '-', '_', 'est', ' \xad'] ['\n', ' forward', ' up', '...', ' ']
before  after ['\xad', '-', '_', 'est', ' \xad'] ['\n', ' up', ' out', ' on', ' ']
S_O_START,15,S_O_END,16,beta,1,clre,0,lre,132,lm,282
after  before ['-', '\xad', '_', ' \xad', ','] ['\n', ' up', ' out', ' on', '...']
ahead  behind ['\n', ' ', ' have', ' the', ' is'] ['\n', ' up', ' behind', ' ', ' ahead']
anterior  posterior ['\n', ' have', ' ', ' the', ' The'] ['\n', ' ', '...', '...', ' the']
backward  forward ['\n', ' have', ' ', ' the', ' The'] ['\n', ' forward', ' up', '...', ' ']
before  after ['\n', ' ', ' have', ' the', ' The'] ['\n', ' up', ' out', ' on', ' ']
S_O_START,16,S_O_END,17,beta,1,clre,0,lre,154,lm,329
after  before ['-', '\xad', '_', ' \xad', 'est'] ['\n', ' up', ' out', ' on', '...']
ahead  behind ['\xad', '-', '_', ' \xad', 'est'] ['\n', ' up', ' behind', ' ', ' ahead']
anterior  posterior ['\xad', '-', '_', ' \xad', 'est'] ['\n', ' ', '...', '...', ' the']
backward  forward ['\xad', '-', '_', ' \xad', ' and'] ['\n', ' forward', ' up', '...', ' ']
before  after ['\xad', '-', '_', ' \xad', 'est'] ['\n', ' up', ' out', ' on', ' ']
S_O_START,17,S_O_END,18,beta,1,clre,0,lre,176,lm,376
after  before ['The', '�', ' The', ' Liang', '�'] ['\n', ' up', ' out', ' on', '...']
ahead  behind ['\n', ' have', ' The', 'The', ' is'] ['\n', ' up', ' behind', ' ', ' ahead']
anterior  posterior ['\n', 'The', ' The', ' have', ' is'] ['\n', ' ', '...', '...', ' the']
backward  forward ['\n', 'The', ' The', ' have', ' is'] ['\n', ' forward', ' up', '...', ' ']
before  after ['\n', 'The', ' The', ' have', ' is'] ['\n', ' up', ' out', ' on', ' ']
S_O_START,18,S_O_END,19,beta,1,clre,0,lre,198,lm,423
```

