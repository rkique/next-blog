---
date: '2025-07-26'
title: 'Oscar notes'
---

```
ssh exia3@sshcampus.ccv.brown.edu

exia3@ssh.ccv.brown.edu

For accessing GPU:
interact -q 3090-gcondo -g 1 -m 80g -t 04:00:00
interact -q 3090-gcondo -g 1 -m 150g -t 04:00:00
interact -q 3090-gcondo -g 4 -m 150g -t 04:00:00
interact -q gpu -n 8 -m 40g -t 01:00:00

interact -q 3090-gcondo -g 8 -m 150g -t 4:00:00

For running short e.g. tokenization scripts:

interact -q 3090-gcondo -g 1 -m 150g -t 04:00:00
module load python/3.11.0s-ixrhc3q 
source /users/exia3/Desktop/pre-pretraining/env/bin/activate
source env/bin/activate


nano ~/Desktop
torchrun --nproc_per_node=8 train.py --model_name EleutherAI/pythia-160m --data_dir /oscar/scratch/exia3/tokenized/c4 --output_dir ./output/c4/pythia-160m --save_steps 25000 --max_steps 25000 --reinit True > train.log 2>&1

torchrun --nproc_per_node=4 train.py --model_name ./output/shuff_dyck/pythia-160m/checkpoint-500 --data_dir ./data/tokenized/wikitext --output_dir ./output/wikitext/pythia-160m/shuff_dyck --save_steps 3000 --max_steps 3000 --reinit False

torchrun --nproc_per_node=4  train.py --model_name EleutherAI/pythia-160m --data_dir ./data/tokenized/wikitext --output_dir ./output/wikitext/pythia-160m --save_steps 3000 --max_steps 3000 --reinit True

torchrun --nproc_per_node=4 train.py --model_name EleutherAI/pythia-160m --data_dir ./data/tokenized/nl_brackets --output_dir ./output/nl_brackets/pythia-160m --save_steps 500 --max_steps 500 --reinit True

torchrun --nproc_per_node=4 train.py --model_name ./output/nl_brckts/pythia-160m/checkpoint-500 --data_dir ./data/tokenized/wikitext --output_dir ./output/wikitext/pythia-160m/nl_brckts --save_steps 10000 --max_steps 10000 --reinit False


python train.py --model_name ./output/nl_brckts/pythia-160m/checkpoint-500 --data_dir ./data/tokenized/wikitext --output_dir ./output/wikitext/pythia-160m/nl_brckts --save_steps 10000 --max_steps 10000 --reinit False
```


#### Todo 6-2-2025

10K steps before making grammaticality comparisons.

Why would the dependency parse be motivated to capture more hierarchical dependencies than regular language? 


#### preprocessing
- [x] 1-dyck generated: OK
- [x] k-dyck generated: OK


- [x] 1-dyck c4: made 
- [x] k-dyck c4: OK

[ ] k-shuffle-dyck generated (OK)
- [ ] k-shuffle-dyck c4.
	- First pass at this would be performing a certain number of swaps to the c4 language. We would want the output distribution to roughly match the k shuffle dyck generation.
	- 0.5 chance of swapping.

#### PRE-PRETRAIN: optimal count: 1k


#### PRETRAIN optimal count: 10k

We want to match the final baseline loss / performance of Pythia-1B by training on common crawl data. 

Hierarchical dependencies, which both 𝑘-Dyck and 𝑘-Shuffle Dyck have, appear to be crucial for positive transfer from formal to natural language. 

Optimal amount of pre-pretraining for 64-Shuffle-Dyck is with 30M tokens.
Optimal amount of pre-pretraining for 64-Dyck is 60M tokens.
There is an optimal amount after which pre-pretraining is harmful.

So, should match with an equivalent amount of C4 data.
10,000 steps is roughly 665 million tokens with batch size 16, as we do with 8 gpu setup.

This indicates that the test we should be doing is 500 steps on shuffle_dyck






The current solution across all datasets is to flatten the nested structures from the original text into one long line and then break that line into 2048 character chunks, which we test on. This is not the case for the shuff_dyck_c4 dataset at the moment, so we should perform modifications there.


Hypothesis: natural language parsed dependencies help language models more than natural language and other formal language. This is because it makes the relations between words explicit. More data is needed, and we need to perform these tests with a range of natural language. Is there a specific kind of natural language on which it does the best? 

Experiments:



Problem: running out of memory on 3090 gpus. Batch size is still 16. Can multiply gradient accumulation steps. 


50M tokens is 775 steps.
75M tokens is 1150 steps for pre-pretraining.
1K prepretraining.


prepretraining on formal languages. More closely matched constuincty.
- experiment: shuff_dyck_c4 + 10k steps. Prepretraining data: flatten and then cut to 2048 sequences. Same token count and seq. ct.
experiment:
- binary parse variant for 1-dyck. potential variant for k-dyck (?)
- Alternative binary parse: just use shuff_dyck_c4.
1. Pre-pretrain shuff_dyck_c4-after-500 model to 30k on wikitext. Want to understand the differences in the distribution. 
2. Create (1-2) shuffled version (metamer) of shuff_dyck_c4, so that we can ensure that the hierarchy in the language is important and not learning statistics.


prepretraining on formal languages. More closely matched constuincty.

experiment:
- binary parse variant for 1-dyck. 
potential variant for k-dyck (?)

- Alternative binary parse: just use shuff_dyck_c4.

- experiment: shuff_dyck_c4 + 10k steps. Prepretraining data: flatten and then cut to 2048 sequences. Same token count and seq. ct.

1. Pre-pretrain shuff_dyck_c4-after-500 model to 30k on wikitext. Want to understand the differences in the distribution. 

2. Create (1-2) shuffled version (metamer) of shuff_dyck_c4, so that we can ensure that the hierarchy in the language is important and not learning statistics.




jQ: Essentially, is this simply making a base model emulate the behavior of a fine-tuned model without as much compute? Similar in theory to distillation.
A; Yes, this is exactly the idea! One thing to note is that the task vector paper does not actually think of the finetuned task as an application, due to the basic fact that we need a finetuned model in order to derive a task vector from. However, the other three applications of the task vector: forgetting via negation, learning via addition, and task analogies, all might have gradient (multiplicative) counterparts. As part of assembling the research proposal I recommend assembling a list of testable hypotheses related to this question. For instance, the multiplicative relationship only holds for certain relations. Are there finetuning datasets this approach generalizes particularly well on?

Let's try a^nb^mc^nd^m.


Naive approach:
set n and m as random variables from 0 to 64.
generate a^n b^m c^n d^m.

Can do a word length calculation here.

I evaluated a larger number of 1-dyck parentheses from the grammaticality eval and found no difference.

Obvious strategies to try at this point:
- emulate distributions of formal language on which


torchrun --nproc_per_node=8 train.py --model_name EleutherAI/pythia-160m --data_dir ./data/tokenized/nl_brckts --output_dir ./output/nl_brckts/pythia-160m --save_steps 500 --max_steps 500 --reinit True

torchrun --nproc_per_node=4 train.py

torchrun --nproc_per_node=4 train.py --model_name EleutherAI/pythia-160m --data_dir ./data/tokenized/shuff_dyck --output_dir ./output/shuff_dyck/pythia-160m --save_steps 500 --max_steps 500 --reinit True

We have 2048 by 100000 sequences.

204,800,000: 200 million tokens.

Identify other formal languages which may work well. 

We expand on their investigation and explore an additional
factor: the computational limitations of the language
model’s architecture. In particular, transformers—the
architecture that underlies most popular language
models—cannot learn all context-sensitive languages,
both in theory and practice. 

Can a formal language give rise to positive transfer even when it cannot be fully learned by a transformer?

Formal to natural language transfer occurs at the intersection of chomsky hierarchy and circuit complexity hierarchy. Expressive enough to capture hierarchical nl dependencies. learnable by transformers in a generalizable fashion.

What kinds of structures are present in wikidata?

Metamer: using unigram bigram, and trigram models with statistical similarities.

Applying meta-learning techniques to 

This is a crazy paper. It basically does a similar technique to pre-pretraining (metalearning, which involves gradient descent on a base model but with an updated model's loss) with an LSTM, and a distribution of over 25,000 formal languages, and sees improvements across the board on BliMP https://www.nature.com/articles/s41467-025-59957-y

Yeah, an important note here is that the github repository is set up to pretrain on wikitext, suggesting that the author expects there to be a difference visible. I agree. I could send a version of the prior email we drafted that takes into account the increased resources we have now (we were able to run with the original settings), and the shuff_dyck vs no prepretraining graph? 


Between your last day of classes (~May 20th) and June 1st, we'll assess the state of your project & determine the features you want to build over the summer.

From June 1st - August 15th, it's building time.  This is a full time program, but how you work is up to you.  I'm only going to judge results, not process.  Work whenever you want, take vacation whenever you need, as long as you spend most of the summer together working in person in Providence.

Email with questions / concerns. 


torchrun --nproc_per_node=4 train.py model_name EleutherAI/pythia-160m --data_dir ./data/tokenized/nl_brackets --output_dir ./output/nl_brackets/pythia-160m --save_steps 500 --max_steps 500 --reinit True --run_name more_brackets

Hi Apoorv and Yeganeh, 

Thank you for making this thread! I would love to get another perspective on the research project.

Our work to date has focused on a set of results, loosely focused on optimising the data mixture that goes into the pretraining process through linguistic and formal methods.
 These include Michael Hu's 'Between Circuits and Chomsky' (2025) finds an effect arising from using formal languages, such as the nested brackets 1-Dyck language: (()()). These lead a model to pretrain better on natural language data. In particular, they find that generated data from a specific language known as cross-serial k-Dyck, which is not nested but does still have matching brackets, performs best. 

'[{(]})' is a valid instance of cross-serial k-Dyck. With this language, they achieve 33% faster convergence and better grammaticality judgements, provided they use an optimal number of pre-pretraining steps. This is against a baseline of training on natural language for the same number of steps.(A similar effect has also been shown in Papadimitriou and Jurafsky (2023) 'Injecting structural biases': https://aclanthology.org/2023.findings-emnlp.563.pdf, where they find strong evidence that crossing dependencies in formal languages is more effective than purely recursive, nested structures. In addition, the "Mission Impossible Language Models" paper finds evidence that certain permutations of English cannot be learned by LMs)

Our research question is then to understand the effect of formal languages on a language model's pretraining process, and ideally finding test data which can significantly improve on the prior works. Our current experimental design has been as follows:

1. Formulate hypotheses about pre-pretraining data that may confer a more helpful inductive bias than purely random formal languages, or otherwise has the possibility of providing advantages over natural language. 

2. Reproduce Hu's experimental baseline, which involves pre-pretraining with natural language and with generated k-dyck data, and then pretraining with natural language. Then, showing that the pretrained model with k-dyck performs better, or converges faster.

3. Using novel pre-pretraining datasets, we will show that there are data generation techniques which can outperform both natural and existing formal languages. There are at least three approaches that are promising. 

	3a. Using a constituent parser on English, generate nested brackets derived from natural language dataset. For instance, 

'The cat sleeps' --> (S (NP (DT The) (NN cat)) (VP (VBZ sleeps))) --> ((()())(()()))

If the LM is picking up on the syntactic structure in these brackets, prepretraining with these brackets should confer an advantage relative to prepretraining on a random sequence of 1-Dyck. Early results are negative / unclear, but we still need to test with a very large text dataset (all of c4).

	3b. We may be able to take advantage of different syntactic relationships within a sentence to create a k-dyck dataset from natural language. For instance, we could tag S, VP, and NP children different. This would look like

 ([()()]{()()})

Because we've seen two papers both finding that cross-serial data improve model prepretraining far more than recursive data, I don't think there is a high chance of this working. It might still be worth testing though.

	3c. We may be able to design informativity-based reductions on natural language. For instance, removing vowels from words may reduce token count while preserving the model's ability to learn relationships between words. 


At the moment, I am tokenizing c4 in Oscar in order to do part 2 more thoroughly. This will also allow us do a more robust test for (3a). 

Welcome any questions or suggestions as for next steps!

Language model application to formal languages > 

pythia-160m on NL eval --> pythia-160m on linguistic-inspired formal languages.

evaluate model with c4 pre-pretraining, no prepretraining on formal languages.
plot performance against the benefits that these formal languages.

- in-context examples for formal languages.
- pretrained model, 
- pretrained models. .. might be worse at some formal languages.


granny
mebbe
scumbag
pixie

When ______ sense.
Stopping ______ happily.
We _________ sadly.
They _________ to us.


evaluate each pre-pretrained model. 
formal language generation issues.

Let $g$ be a differentiable function from [a,b] and assume that g' is continuous. Let f from [c,d] be continuous, and assume that the range of g be contained in [c,d] so that $f \circ g$ is well defined. 
- Well, f is continuous. Why is $f$ differentiable? 
- Why are we sure that f is the derivative of some function, How about $f \circ g$  g'?

g is continuous at all points in c. 
