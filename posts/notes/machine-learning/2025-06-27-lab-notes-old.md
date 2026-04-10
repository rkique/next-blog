---
date: '2025-06-27'
title: 'Lab Notes (Old)'
---
There is a flaw with this paper, and that is taking matching to mean "startswith" 

During all of our experiments, we consider a predicted object correct if the first predicted token matches the first token of the true object. This introduces a risk for false positives: if multiple different objects share a first token, we might erroneously label a prediction as correct.

I want to show that linear approximation on subjects works well on relational datasets for retrieving an object. I will do this by developing a better linear approximation that does not have a beta parameter.

Tests Ran:

- [ ] Word2Vec no-context settings (adj - comparative)
	- does not perform better, still has "more" as top prediction
	- worth exploring further: more is the *kind* of prediction, but it's not a prediction

- [ ] Word2Vec with various EOS tokens
	- Does not change the distribution significantly 

- [ ] [[Jacobian no-context, one layer derivative (animal - youth)]]
	- produces results that seem like completions without ICL.

- [ ]  Jacobian no-context, 5 to 27 derivative, with W = [0] (animal-youth)
- [ ] [[Jacobian no-context, 5 to 27 derivative, with W = [1]]] (animal-youth)
	- both produces reasonable results (19/40)
	- extremely homogenous: mostly ['cub', 'kit', 'pup', 'baby']

- [x] Jacobian semantic context, 5 to 27 derivative, with W = [1] on all prompts
	- Doesn't work, because  it is homogeneous

- [ ] [[No-context LRE outperforms context by significant margins for certain relations]]
	- verb + ment irregular

- [ ] [[No-context LRE underperforms context by significant margins for certain relations]]
 
- [ ] ###[[irregular pluralization can be captured perfectly by affine LRE]]

- [ ] Oriented (weighted) Linear Relational Embeddings offer no improvement over mean
	- in many cases, it does worse
	- This is likely because subject relations are not modeled by object relations (but if the relation is linearly approximable, how could this be?)

- [ ] [[Can LREs form the basis for low-compute tools derived from LLMs?]]

- [ ] LORE
	- Attempt to use internal representation as guidance for prompts 
	- Does not improve the faithfulness

- [ ] [[LayerNorm LRE]]
	- attempt to incorporate $\gamma$ and $\beta$ values by calculating individual layer Jacobians
	- One attempt with comparing internal representations did not work for animal-youth.

- [ ] [[LayerNorm LRE yields interesting patterns based on S->O point]]

- [ ] The final result depends heavily on the bias terms
	- [ ] But the bias term by itself maps all subjects to the same probability distributions
- [ ] [[Complete LRE can approximate the LRE]]
- [ ] [[Simplifying to derivatives S-S and S-O fails to work as well as the Complete LRE]]

- [ ] [[Animal-Youth LM vs. Complete LRE predictions]]
- [ ] ChainLRE: break the computation into S->S and S->O stages
	- f'(g(x)) * g'(x)
	- Seems to work as well as LRE does

We now have several things we want to compare:
- [ ] ChainLRE, CompleteLRE, and LRE

- [ ] Disabling early layer computations seems to force the subject to do next-token prediction

- [ ] Male - Female relation is NOT LEARNED by CLRE or LRE....

```
father  father 
[' PA', ' Pa', 'Pa', 'PA', 'pa'] 
[' father', ' fathers', ' dad', 'father', ' Father']
```

So far all of the learned relations have exhibited better performance at Beta = 1

[[Meronyms - Member Testing]]
We had SOLAYER = 20 and got the right precision, all the same 

#####  Idea: Jacobian includes the Layernorm, so we should divide by the LayerNorm weight
- [ ] This doesn't work

### Complete LRE works well

- it seems to reduce to a single s->o derivative from one layer to another, so finding the layer it applies to is important.
- The start layer doesn't seem to be important, neither does layer normalization or residual

- [ ] While CLRE performs better than LRE on beta = 1, the difference doesn't seem to be from the LayerNorms
	- [ ] But actually, it does (name - occupation)

- [ ] [[CLRE gets confident with >15 SO layers and high beta, but is wrong]]


#### [[LRE weight matrix alone works better beta = 1 for tasks like adj-superlative]]
#### The LRE can give inaccurate answers to things like

Another word for prince is __ (LRE predicts the incorrect kind of analogy, with princess even with ICL)
but the CLRE won't do that.

#### The optimal # of S->O layers is more than 1, but less than all

From the Meronym data:
- When many later layers, e.g. 19-26 (21-27) are approximated as SO derivatives, the results reflect a generalization of the relationship: 
	-  group, team, family, tribe, herd (circus)
	- group, herd, tribe, team, flock (herd)
	- group, herd, colony, flock, tribe (hive)
	- group, colony, flock, herd, tribe (flock)
	- group, team, club, herd, company (library)
- . Other examples are 18-25, 16-24. When we get to 21, 21-26 is barely not homogenous (group, group, colony, colony, club). 

In the other direction, when there is no SO derivative (only SS and OO) the output is a **completion**: there are no derivatives reflecting the relation between the subject and the object. Examples of this are:
acrobat: ics
antelope: species
bee: keeper
bird: ie
book: marks

Altogether, the visualization reflects a tradeoff in the approximator between two objectives. The first is **subject completion**, which are diverse and readily seen during the model training, but have nothing to do with the relation. The second is **convergent analogy**, which tend to be a single overfitted distribution of likely objects, with nothing to do with the subject. Our ideal is an analogy that is not convergent, which reflects the **subject** without losing the **relation**.

Using the gradients from after layer normalization to the output of the next layer is almost certainly wrong.

[[LN->Next Verb+er testing]]

- [ ] The chain LRE gives very homogenous results with the layer_norm to full derivatives:
	[5, 21, 26]
	acrobat  circus [' group', ' crowd', ' court', ' bunch', ' cluster']
	antelope  herd [' group', ' crowd', ' court', ' bunch', ' cluster']
	bee  hive [' group', ' crowd', ' court', ' bunch', ' cluster']
	bird  flock [' group', ' crowd', ' court', ' bunch', ' cluster']
	book  library [' group', ' crowd', ' court', ' bunch', ' cluster']
	S_O_START,21,S_O_END,26,beta,1,clre,3,lre,20,lm,41

- [ ] Residuals don't make sense when using the LN-> full derivative
	- [ ] The residual is incorporated into the derivative!

- [ ] Attempting the same residual but from after the layer normalization to the final output of layer 27(0-27)
	- [ ] This should at least give similar results to the LRE


[[Reproduce Name Occupation LLRA > LRE Complete Derivatives]]
For hidden state = 1: S_O_START,14,S_O_END,15,beta,1,llra,34,lre,30,lm,49
The more layer_bias terms, the more homogenous the output becomes.

[[Layer Normalization enforces homogenity]]

- [ ] ==Starting the approximation after the layer normalization does the same as LRE for beta = 1, but really badly when beta is >1==

- [ ] [[LN-LRE The jacobian for the normalized to the final output is really small, the bias is really large.]] The use of the final object representation is a bad idea.

- [ ] We should take the jacobian from an early LayerNorm to the final LayerNorm. Then how do we postprocess the outputs? I suppose we could apply the last layer attn + mlp to the result.

The layer reference system is 1-1: so if you are working with layer N weights according to determine_layer_paths, the relevant layer for normalization is also N. This is evident from the code.


Using S_O start and S_O end  set for all layers doesn't work. This indicates something more complicated is going on. 

- Why does it matter?

- many to many
- many to one

- jack has a dog, jane has a cat.
- (contextual relations)

- does the transformer construct linear relation between objects and colors

- context-specific relations.
- training 
- transformer does one of the transformations: function composition for two different functions


### Residual connection

- [ ] [[Complete LRE can approximate the LRE]]

Two place relations
- I give you something. Does the LRE work for these cases?

#### beta explanation
- [ ] [[negative beta produces difference token (adj - comparative) ]]
- Does this reflect an understanding of the local dimension?
The higher beta is, the more significance is placed on the subj. rep. as opposed to the LRE. This results in completions for beta = 20 in cases like "'The spouse of Roger Federer is '": as  `[' Felix', 'Fed', 'FER', 'Fel', 'Fle'] [0.1747691035270691, 0.13505110144615173, 0.08255508542060852, 0.051661647856235504, 0.042495712637901306]`, which correspond to Roger Federer's opponent in an important 2021 match.

