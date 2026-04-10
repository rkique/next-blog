---
date: '2024-06-04'
title: 'REU preproposals'
---

Laney_Marshall_Pierson:?

![[Screenshot 2024-06-04 at 8.40.09 AM.png]]

This paper delivers a novel approach to automated priority assessment of bug reports in open 068 bug repositories. First, we create a number of topic models and assign each report to one of them since our approach is based on NLP. This step is based on the work of Xia et al. (Xia et al., 2017). Second, we train a text classifier for each topic, which can predict the priority level of a new bug report that belongs to that topic. For the latter, we deploy BERT (Bidirectional Encoder Representations from Transformers)

By predicting the destiny of bug reports in terms of whether they will be eventually resolved as fixed or perhaps labeled as won’t-fix, invalid, or works-for-me, we aim to in- form bug triage and developers in advance and help them set the potentially difficult or problematic bug reports aside. Alternatively, triagers may decide to assign them to more senior developers working on the project, who are expected to have a higher level of expertise and familiarity with the code base. This will save developers time and, consequently, the project’s resources.