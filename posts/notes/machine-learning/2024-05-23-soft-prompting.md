---
date: '2024-05-23'
title: 'Soft Prompting'
---
Prompts are typically composed of a task description and/or several canonical
examples. This return to “freezing” pre-trained models is appealing, especially as model size continues to increase.


We freeze the entire pre-trained model and only allow an additional k tunable tokens per downstream task to be prepended to the input text. This “soft prompt” is trained end-to-end and can condense the signal from a full labeled dataset, allowing our method to outperform few-shot prompts and close the quality gap with model tuning (Figure 1)
