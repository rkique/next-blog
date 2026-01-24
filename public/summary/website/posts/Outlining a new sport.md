---
bigness: Yes
---

(draft, not ready for release)

In this article I lay the foundation for a new sport, known as word golfing. 

# what is word golf?
Word golf is like golf with english words. Starting from a certain point, the player chooses successive neighbor words in order to get to a target word. The resulting string of words -- a run -- forms an unbroken string of conceptual jumps:

>vector,graph,diagram,sketch,painting,watercolors,crayon,cyan,teal,blue,white

A run can take anywhere from 5 seconds to more than 10 minutes. There are different sets of start words and end words available. Just as in golf, a greater distance between two words (bird -> cat vs bird -> teacher) makes a run more difficult.

# why play word golf?
There is something pure about word golf that makes it different from any word game that already exists. You are traveling through a metaphysical space: meaning drawn from the total sum of written human knowledge up to this point. It is natural. It is the final vision for open source: a product of a true understanding of the human language, of interaction and the way that we see the world.

# existing word games suck
To play word golf well requires something special: *an ability to interface with the english language in a meaningful way*. 

It requires that you understand the different facets of a word, that you see the connections not only between "jewel" and "emerald", but between "jewel" and "theft" and "jewel" and "mermaid". 
<img src="/images/jewel.png"/>
This is not something you can find right now in existing word games. You don't win scrabble by knowing the meaning of words; you do it by memorizing dictionaries. Maybe you've heard that [the winner of the French Scrabble Title doesn't speak French](https://www.npr.org/sections/thetwo-way/2015/07/21/424980378/winner-of-french-scrabble-title-does-not-speak-french). For word games which make an attempt to get words to interact in meaningful ways-- like crosswords or Scattergories -- their prompts are limited by the cleverness and prolificity of their creators. 

In contrast, word golf is an unlimited interface with the full wealth of the english language. From 400,000 english words comes 80 billion connections. The gist of the game -- it is a simple one -- is something sacred, timeless, relevant to any human civilization: how do we describe the world around us? More than chess or soccer, word golf is the beautiful game. It revels in the nature of the world, of human invention, the sheer joy of flights of function. 

> vector,graph,diagram,sketch,painting,watercolors,crayon,cyan,teal,blue,white

>costume,props,sculptures,ceramic,vases,bowls,cups,cup,cups,cans,bottle,bucket,jugs,cartons,cans,canisters,bottles,drinking,water,reservoirs,water,drinking,boiling,stirring,frying,oven,refrigerate,refrigerator,kitchen,dining,restaurant,cafeteria,canteen

# word golf vs the wiki game
Wikipedia was the first obvious field of semantic play, and the wiki game saw success due to its novelty of presentation. However, the artificial nature of its connections limit it to being a novelty. As a demonstration of conscious human association, it is incomparable to the all encompassing unconscious associations which form the public psyche, as interpreted by Stanford's GloVe model.


# a sport played in the public psyche
Word golf is played on the english language as represented by word embeddings. Currently this embedding dataset is 400k entries, the output of Stanford's GloVe model trained on Wikipedia and the Gigaword 5 dataset. These are by no means the embeddings necessary to play. As the sport evolves, I believe that better representations can be found.

The evolution of wordspace can be seen even in these early days. Because some words are used very often, excluding these removed listless, inactive words from the set:

> "seen", "whom", "think", "had", "able", "each", "might", "enough", "yet", "sure", "indeed", "almost", "around", "although", "need", "taken", "most", "wanted", "rest", "own", "tell", "too", "very", "often", "actually", "else", "doing", "present", "taking", "going", "bring", "turn", "brought", "another", "really", "none", "rather", "instead", "without", "nothing", "felt", "once", "whole", "maybe", "simply", "making", "put", "giving", "especially", "thought", "sometimes", "something", "someone", "better", "means", "perhaps", "saying", "nearly", "may", "ways" ...

As a result, wordspace immediately became better defined, with sharper edges and more clear directionality. Similar refinements could be seen when removing acronyms, mispellings, and symbols from wordspace.

Word embeddings are a practical approximation of an abstract ideal. There are clear ways which the current version falls short. For example, the training data for the word embeddings I'm using includes many newspaper datasets, and this means certain connections are overrepresented in the neighbor rankings. Look up "village", "military", or "democracy" and you will see associations that distort the ideal semantic place of those words.

The perfect playing field for word golf I strive for is a detailed geography of the (descriptive) English language. Every mental connection and common quality between words should be navigable. As such, it is a real representation of the way that we use words and think about the world, of the public psyche.

# sport vs game
The simplicity and open ended nature of word golf makes it a sport, not a game. The concept is important, not the presentation. The rules are not complicated. It can be played with different embeddings, start and end points, and in different languages. 

Legitimizing a new sport is very, very hard, but I'm convinced that word golf is one. And I'm going to show everyone that it is.








