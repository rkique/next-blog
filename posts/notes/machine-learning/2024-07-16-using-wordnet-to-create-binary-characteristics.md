---
date: '2024-07-16'
title: 'Using WordNet to create binary characteristics'
---
We define a large collection of binary concepts using WordNet (Miller, 1995). Briefly, WordNet organizes English words into a hierarchy of synsets, where each synset is a set of synonyms. The WordNet hierarchy is based on word hyponym relations, and reflects the semantic hierarchy of interest in this paper. We take each synset as an attribute w and define Y(w) as the collection of all words belonging to any synset that is a descendant of w. For example, the synset mammal.n.01 is a descendant of animal.n.01, so both Y(mammal.n.01) and Y(animal.n.01) contain the word “dog”.  We collect all noun and verb synsets, and augment the word collections by including plural forms of the nouns, multiple tenses of each verb, and capital and lower case versions of each word. We filter to include only those synsets with at least 50 words in the Gemma vocabulary. This leaves us with 593 noun and 364 verb synsets, each defining an attribute.

