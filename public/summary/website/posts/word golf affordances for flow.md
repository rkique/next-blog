Word.golf can be made more intuitive and easy to play by arranging a series of affordances to the user. 

The classic mode right now uses the top 90 legitimate neighbors to the current word. Jumping to these neighbors can lead you in any possible direction.

One possible affordance is distorting the neighbor distribution based on similarity to the target word. This would prioritize current neighbors closer to the target word, without actually guaranteeing success.

Another possible affordance is adding guaranteed 2 jump and 3 jump neighbors, selected from neighbors of the target word who are most similar to the current word. This could be done in a distribution, i.e. 1/5/90 or 3/3/90 etc. The disadvantage of this approach is that this affordance does not scale with distance, e.g. its possible to complete a run from any word, which kills any incentives for intermediate progress. The advantage is flow.

