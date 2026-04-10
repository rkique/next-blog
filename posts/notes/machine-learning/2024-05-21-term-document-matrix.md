---
date: '2024-05-21'
title: 'term-document matrix'
---
In a term-document matrix, each row represents a word in the vocabulary and each column represents a document from some collection of documents.

This is really just [[tf-idf]]

|        | As You Like It <br> | Twelfth Night | Julius Caesar | Henry V |     |
| ------ | ------------------- | ------------- | ------------- | ------- | --- |
| battle | 1                   | 0             | 7             | 13      |     |
| good   | 114                 |               |               |         |     |
| fool   | 36                  |               |               |         |     |

As You like it: [1, 114, 36]

The vectors for the comedies As You Like It [1,114,36,20] and Twelfth Night [0,80,58,15] look a lot more like each other (more fools and wit than battles) than they look like Julius Caesar [7,62,1,2] or Henry V [13,89,4,3]. 

Doing IR will also require efficient ways to store and manipulate these vectors by making use of the convenient fact that these vectors are sparse, i.e., mostly zeros. 

We also have


### word semantics

We can view the above table as a list of words with the corresponding documents giving the semantic intepretation. 

### term-term matrix

term-term matrix, also called the word-word matrix or the term-context matrix, in which the columns are labeled by words rather than documents. This matrix is thus of dimensionality |V |×|V | and each cell records the number of times the row (target) word and the column (context) word co-occur in some context in some training corpus. 





