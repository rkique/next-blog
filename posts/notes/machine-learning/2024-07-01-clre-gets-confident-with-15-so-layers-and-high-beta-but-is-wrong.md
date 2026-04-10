---
date: '2024-07-01'
title: 'CLRE gets confident with >15 SO layers and high beta, but is wrong'
---
Male - Female test set. This is indicative that the LM hasn't learned this relation.

SO = 16

subject LM CLRE

actor  star [' prince', ' brother', ' daddy', ' nephew', ' puppy']
beta,1,clre,1,lre,0,lm,44
actor  star [' prince', ' daddy', ' brother', ' puppy', ' nephew']
beta,2,clre,1,lre,0,lm,42
actor  star [' prince', ' sir', ' daddy', ' puppy', ' pap']
beta,4,clre,2,lre,0,lm,44
actor  star [' sir', ' daddy', ' Sir', ' puppy', ' dad']
beta,8,clre,5,lre,0,lm,43
actor  actress [' sir', ' Agent', ' Sir', ' Mr', ' daddy']
beta,16,clre,8,lre,0,lm,43
actor  star [' Agent', 'Agent', ' agent', 'agent', ' agents']
beta,32,clre,10,lre,0,lm,41
actor  actress [' Agent', 'Agent', ' agent', 'agent', ' Agents']
beta,64,clre,9,lre,0,lm,43
actor  star [' Agent', 'Agent', ' agent', 'agent', ' Agents']
beta,128,clre,10,lre,0,lm,42
actor  actress ['Agent', ' Agent', ' agent', 'agent', ' Agents']
beta,256,clre,10,lre,0,lm,43
actor  star ['Agent', ' Agent', ' agent', 'agent', ' Agents']
beta,512,clre,7,lre,0,lm,44

So = 18

actor  star [' prince', ' nephew', ' brother', ' king', ' pup']
beta,1,clre,1,lre,0,lm,43
actor  star [' prince', ' nephew', ' brother', ' king', ' princess']
beta,2,clre,2,lre,0,lm,43
actor  actress [' prince', ' nephew', ' brother', ' princess', ' daddy']
beta,4,clre,3,lre,0,lm,43
actor  actress [' prince', ' nephew', ' brother', ' princess', ' daddy']
beta,8,clre,7,lre,0,lm,43
actor  star [' prince', ' mummy', ' princess', ' brother', ' nephew']
beta,16,clre,12,lre,0,lm,43
actor  star [' actor', ' movie', ' Actor', 'actor', ' actors']
beta,32,clre,18,lre,0,lm,44
actor  actress [' actor', ' Actor', 'actor', 'Actor', ' actors']
beta,64,clre,18,lre,0,lm,44
actor  actress [' actor', ' Actor', 'Actor', 'actor', ' actors']
beta,128,clre,21,lre,0,lm,41
actor  star [' actor', ' Actor', 'Actor', 'actor', ' actors']
beta,256,clre,18,lre,0,lm,42
actor  star [' actor', ' Actor', 'Actor', 'actor', ' actress']
beta,512,clre,19,lre,0,lm,44

Repeat this for the correct

actor  star [' prince', ' nephew', ' brother', ' king', ' pup']
beta,1,clre,1,lre,0,lm,43
actor  star [' prince', ' nephew', ' brother', ' king', ' pup']
beta,2,clre,2,lre,0,lm,44
actor  star [' prince', ' nephew', ' brother', ' princess', ' daddy']
beta,4,clre,3,lre,0,lm,42
actor  actress [' prince', ' nephew', ' brother', ' princess', ' daddy']
beta,8,clre,7,lre,0,lm,43
actor  actress [' prince', ' brother', ' mummy', ' nephew', ' princess']
beta,16,clre,10,lre,0,lm,44
actor  actress [' actor', ' movie', ' Actor', 'actor', ' actors']
beta,32,clre,19,lre,0,lm,43
actor  star [' actor', ' Actor', 'Actor', 'actor', ' actors']
beta,64,clre,19,lre,0,lm,44
actor  star [' actor', ' Actor', 'Actor', 'actor', ' actors']
beta,128,clre,19,lre,0,lm,42
actor  star [' actor', ' Actor', 'Actor', 'actor', ' actors']
beta,256,clre,19,lre,0,lm,43
actor  star [' actor', 'actor', ' Actor', 'Actor', ' actors']
beta,512,clre,17,lre,0,lm,43