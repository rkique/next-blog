---
date: '2024-05-25'
title: 'Temporal Knowledge editing in LLMs'
---
We firstly query the language model with the cloze statement of current knowledge to extract the knowledge under model time, and then edit the model using both of them with timestamps, and also use the model to make knowledge time predictions so that the model can reinforce both historical and new knowledge, and improve the awareness of time of knowledge.


Since the knowledge inside a model becomes progressively outdated, knowledge editing (KE), a convenient way to edit the knowledge, has received increasing attention and some methods have been proposed. Zhu et al. (2020) propose the constrained finetuning approach on modified facts to solve the problem. Sotoudeh and Thakur (2019) utilize symbolic representations and gen- eralized RELU networks. (Hahnloser et al. 2000) to cor- rect model with small patches. Cao, Aziz, and Titov (2021) introduce the method which corrects knowledge and im- proves predictions using a hyper-network for targeted modifications. Dai et al. (2022) explore knowledge neurons in models and attempt to leverage them to edit specific factual knowledge. ROME (Meng et al. 2022a) and MEMIT (Meng et al. 2022b) take the approach of locating and then edit- ing. Mitchell et al. (2022a) a collection of small auxiliary editing networks that use a single desired input-output pair to make fast, local edits. In addition, MEMIT-CSK (Gupta et al. 2023) is designed to edit commonsense knowledge.
