---
date: '2024-08-01'
title: 'naman paper feedback'
---
Hi there, 
This is an interesting paper with a lot of potential. I really get the sense that you are trying a novel approach from the introduction and approach sections. I have some feedback on some smaller things and some larger issues:
- In the abstract, "70,000" shouldn't be in bold. Everyone doing long document summarization is tackling the same task and the novelty of your approach isn't in its ability to handle longer lengths
- Also in abstract, Transformer shouldn't be capitalized
- "Long Document Summarization is more crucial than ever since..." is followed by a non-sequitur. You should talk more about the vast amounts of textual data from the introduction, and how it's only going to increase in the future.
- In the Related Works, you should either topicalize the two sections (Golia and Kalita and attention-based approaches), or come up with a smoother transition.
- It seems like you utilize techniques similar to VideoAgent, maybe you should introduce some more mathematical details on their approach to further distinguish your work
- In general, I think you should be talking about your competitors in Related Works. I see a reference to staggered block-local attention. I don't see mentions of Pegasus or Unlimiformer.
- "contiguous" and "exhaustive" are odd ways to describe strings of text. You should either formalize what this means or use simpler terminology
- "The fraction of tokens is controlled by head_size": I don't think this is right
- You should summarize which hyperparameters you are using, and what their functions are before going into each one. 
- I see a p and then p_new and p_optimal, how do these relate? You should define p again before you go into the math.
- You should talk more about 5.3, unless that is mostly someone else's work?
- **Your Time complexity analysis needs to compare against competitors. Otherwise there's no way to understand how your results do wrt the others**. Even a baseline one, such as against regular transformer computation, would be great. Show how much time is saved versus feeding the entire document piece by piece!