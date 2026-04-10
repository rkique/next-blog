---
date: '2024-08-25'
title: 'AAAI 2025 conference submission'
---
Linear Relational Decoding of Morphology in Language Models

 We demonstrate that for many morphological relations, transforming a hidden state by the trained model derivative can approximate the derived form effectively, providing the first example of a faithful linear approximator for language models. We argue that this suggests morphological forms are encoded by linear transformations.

The recent commercial success of transformer language models (LMs) owes much to their conversational fluency, including their linguistic and morphological productivity. A first-order Taylor affine approximation has been found to be a good approximation for LM computations over certain factual and encyclopedic contexts. We demonstrate the truly linear approximation $W_r \textbf{s}$, where $\textbf{s}$ is a middle layer representation of the base form and $W_r$ is a local derivative from the pre-trained model, is necessary and sufficient to approximate LM computations of *morphological derivations*. We achieve greater than 80\% faithfulness across different models on most morphological tasks from the Bigger Analogy Test Set.  We argue that morphological forms in LMs are likely to be encoded by linear transformations, with implications for how entities are represented within language models.

