---
date: '2024-07-28'
title: 'Llama 8_31 LRE Jacobian  compare'
---

```
beta,1,name - nationality,reg_correct,0,no_bias_correct,7,lm_correct,45
beta,1,animal - youth,reg_correct,6,no_bias_correct,8,lm_correct,34
beta,1,verb_Ving - 3pSg,reg_correct,0,no_bias_correct,7,lm_correct,49
beta,1,noun+less_reg,reg_correct,0,no_bias_correct,9,lm_correct,49
beta,1,verb+able_reg,reg_correct,1,no_bias_correct,6,lm_correct,50
beta,1,UK_city - county,reg_correct,0,no_bias_correct,4,lm_correct,32
beta,1,antonyms - binary,reg_correct,1,no_bias_correct,0,lm_correct,47
beta,1,verb_inf - 3pSg,reg_correct,0,no_bias_correct,9,lm_correct,50
beta,1,re+verb_reg,reg_correct,50,no_bias_correct,0,lm_correct,50
beta,1,verb_inf - Ved,reg_correct,2,no_bias_correct,38,lm_correct,50
beta,1,country - language,reg_correct,11,no_bias_correct,1,lm_correct,49
beta,1,meronyms - part,reg_correct,0,no_bias_correct,6,lm_correct,47
beta,1,verb_Ving - Ved,reg_correct,0,no_bias_correct,12,lm_correct,50
beta,1,animal - shelter,reg_correct,13,no_bias_correct,5,lm_correct,47
beta,1,hypernyms - misc,reg_correct,13,no_bias_correct,12,lm_correct,48
beta,1,meronyms - substance,reg_correct,1,no_bias_correct,6,lm_correct,48
beta,1,noun - plural_irreg,reg_correct,2,no_bias_correct,16,lm_correct,49
beta,1,un+adj_reg,reg_correct,50,no_bias_correct,0,lm_correct,50
beta,1,verb+ment_irreg,reg_correct,13,no_bias_correct,5,lm_correct,50
beta,1,adj+ness_reg,reg_correct,0,no_bias_correct,3,lm_correct,50
beta,1,over+adj_reg,reg_correct,50,no_bias_correct,0,lm_correct,50
beta,1,verb+er_irreg,reg_correct,1,no_bias_correct,34,lm_correct,50
beta,1,adj+ly_reg,reg_correct,0,no_bias_correct,25,lm_correct,50
beta,1,name - occupation,reg_correct,17,no_bias_correct,10,lm_correct,50
beta,1,synonyms - intensity,reg_correct,0,no_bias_correct,0,lm_correct,43
beta,1,animal - sound,reg_correct,7,no_bias_correct,4,lm_correct,37
beta,1,noun - plural_reg,reg_correct,0,no_bias_correct,1,lm_correct,50
beta,1,Ving - verb_inf,reg_correct,0,no_bias_correct,0,lm_correct,50
beta,1,male - female,reg_correct,1,no_bias_correct,2,lm_correct,46
beta,1,verb_3pSg - Ved,reg_correct,0,no_bias_correct,43,lm_correct,49
beta,1,meronyms - member,reg_correct,0,no_bias_correct,0,lm_correct,40
beta,1,things - color,reg_correct,23,no_bias_correct,8,lm_correct,50
beta,1,hyponyms - misc,reg_correct,0,no_bias_correct,6,lm_correct,46
beta,1,adj - superlative,reg_correct,0,no_bias_correct,26,lm_correct,47
beta,1,verb+tion_irreg,reg_correct,0,no_bias_correct,1,lm_correct,50
beta,1,synonyms - exact,reg_correct,0,no_bias_correct,2,lm_correct,46
beta,1,hypernyms - animals,reg_correct,4,no_bias_correct,4,lm_correct,50
beta,1,country - capital,reg_correct,0,no_bias_correct,15,lm_correct,50
```

```
beta,1,name - nationality,reg_correct,5,no_bias_correct,17,lm_correct,48
beta,1,animal - youth,reg_correct,6,no_bias_correct,5,lm_correct,36
beta,1,verb_Ving - 3pSg,reg_correct,0,no_bias_correct,11,lm_correct,49
beta,1,noun+less_reg,reg_correct,0,no_bias_correct,33,lm_correct,49
beta,1,verb+able_reg,reg_correct,8,no_bias_correct,32,lm_correct,50
beta,1,UK_city - county,reg_correct,1,no_bias_correct,17,lm_correct,35
beta,1,antonyms - binary,reg_correct,5,no_bias_correct,14,lm_correct,47
beta,1,verb_inf - 3pSg,reg_correct,0,no_bias_correct,47,lm_correct,50
beta,1,re+verb_reg,reg_correct,50,no_bias_correct,0,lm_correct,50
beta,1,verb_inf - Ved,reg_correct,3,no_bias_correct,29,lm_correct,50
beta,1,country - language,reg_correct,13,no_bias_correct,14,lm_correct,49
beta,1,verb_Ving - Ved,reg_correct,0,no_bias_correct,30,lm_correct,50
beta,1,animal - shelter,reg_correct,21,no_bias_correct,9,lm_correct,45
beta,1,hypernyms - misc,reg_correct,4,no_bias_correct,21,lm_correct,47
beta,1,meronyms - substance,reg_correct,1,no_bias_correct,10,lm_correct,49
beta,1,noun - plural_irreg,reg_correct,1,no_bias_correct,29,lm_correct,49
beta,1,un+adj_reg,reg_correct,50,no_bias_correct,3,lm_correct,50
beta,1,verb+ment_irreg,reg_correct,11,no_bias_correct,41,lm_correct,50
beta,1,adj+ness_reg,reg_correct,2,no_bias_correct,41,lm_correct,50
beta,1,over+adj_reg,reg_correct,50,no_bias_correct,0,lm_correct,50
beta,1,verb+er_irreg,reg_correct,4,no_bias_correct,39,lm_correct,50
beta,1,adj+ly_reg,reg_correct,8,no_bias_correct,48,lm_correct,50
beta,1,name - occupation,reg_correct,19,no_bias_correct,26,lm_correct,50
beta,1,synonyms - intensity,reg_correct,0,no_bias_correct,7,lm_correct,44
beta,1,animal - sound,reg_correct,8,no_bias_correct,16,lm_correct,35
beta,1,noun - plural_reg,reg_correct,1,no_bias_correct,38,lm_correct,50
beta,1,Ving - verb_inf,reg_correct,0,no_bias_correct,27,lm_correct,50
beta,1,male - female,reg_correct,6,no_bias_correct,8,lm_correct,44
beta,1,verb_3pSg - Ved,reg_correct,0,no_bias_correct,48,lm_correct,50
beta,1,meronyms - member,reg_correct,2,no_bias_correct,6,lm_correct,40
beta,1,things - color,reg_correct,20,no_bias_correct,10,lm_correct,50
beta,1,hyponyms - misc,reg_correct,1,no_bias_correct,5,lm_correct,46
beta,1,adj - superlative,reg_correct,0,no_bias_correct,34,lm_correct,47
beta,1,verb+tion_irreg,reg_correct,0,no_bias_correct,33,lm_correct,50
beta,1,synonyms - exact,reg_correct,0,no_bias_correct,8,lm_correct,48
beta,1,hypernyms - animals,reg_correct,0,no_bias_correct,7,lm_correct,50
```