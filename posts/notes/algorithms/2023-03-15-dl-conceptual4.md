---
date: '2023-03-15'
title: 'DL_conceptual4'
---
The dimensions of an embedding matrix are the vocabulary size by the embedding size, N. They represent the learned representations of words as vectors in N-dimensional space. 

RNNs perform better than n-grams when input data is more distantly related. While scaling an n-gram may be computationally expensive or downright impossible, an RNN is able to reference distant past states and learn a better embedding. Because it learns which states are relevant for its current state, it also does not treat its input sequence impartially as the n-gram does.


LSTM stands for Long Short-term Memory, which is its fundamental breakthrough. LSTMs have both a cell state and hidden state input. Unlike the hidden state, the cell state never goes through a fully connected layer, which allows it to remember past relationships between words better. In contrast, in RNNs we have the hidden state alone, which suffers from vanishing gradients. This means it cannot preserve the identity of previously learned weights far in the past.

LSTMs also have a forget, remember, and output module. The forget module masks C_t-1 with pointwise multiplication by 0s, dependent on the hidden state. This forgets values of C_t-1, and is known as gating. The remember module first employs gating, with the input being a sigmoid-activated, fully-connected, hidden state output, and the mask as the tanh-activated, fully-connected, hidden state output. It then adds the gated memory to the cell state. 

Finally, the output module gates a sigmoid-activated, fully-connected, *hidden state output* with the tanh-activated *cell state*, leading to the final state output. This state and input is put through a sigmoid function and produces output probabilities.


2. 

What does this symbol mean ඞ

The symbol ඞ is not a commonly used symbol in any language or writing system that I am aware of. It is not part of the ASCII or Unicode character sets used in computing, and it does not appear in any of the major dictionaries or encyclopedias.

It's possible that the symbol ඞ has a specific meaning or context in a particular language or culture that I am not familiar with. If you could provide more information or context about where you came across this symbol, I may be able to give you a more specific answer.

I came across it in an internet forum. It might relate to a video game or something...

Based on my research, the symbol ඞ appears to be a made-up symbol that has become popularized in online gaming communities as a way to convey sarcasm or irony. The origin of the symbol is unclear, but it seems to have started as a joke or meme in online gaming circles and has since spread to other online forums and social media platforms.

The symbol itself does not have any inherent meaning, and its usage is often context-dependent. In some cases, it may be used to indicate that the user is being sarcastic or ironic, while in other cases, it may simply be used for humorous effect or as a way to stand out in a crowded online space.

It's worth noting that the symbol ඞ is not part of any standard language or writing system and should not be used in formal or professional contexts.

It's commonly associated with the phrases "crewmate" and "imposter", and a little red astronaut figure. Does that help?

Yes, that does help clarify the context of the symbol. It appears that the symbol ඞ is used as a stand-in or substitute for the phrase "sus" or "suspicious" in the online multiplayer game "Among Us". In the game, players are randomly assigned roles as either "crewmates" or "imposters", and the goal is to either complete tasks (if you're a crewmate) or sabotage the tasks and eliminate the other players (if you're an imposter).

Players can use the in-game chat function to communicate with each other and try to figure out who the imposters are. When a player is acting suspiciously or is believed to be an imposter, other players may accuse them of being "sus" or "suspicious". However, to avoid detection by the imposters, some players use the symbol ඞ instead of spelling out the full word.

So, in the context of "Among Us" and related online communities, the symbol ඞ is often used as a shorthand or slang term for "sus" or "suspicious".

It is not shorthand for "sus". What does ඞ actually look like?

I apologize for the confusion in my previous response. You are correct that the symbol ඞ is not a shorthand for "sus".

In fact, ඞ is a letter of the Sinhalese alphabet, which is used to write the Sinhalese language spoken in Sri Lanka. The symbol ඞ represents a consonant sound in the Sinhalese language that is pronounced like the "ng" sound in the English word "sing".

I'm not sure why this particular letter of the Sinhalese alphabet has become associated with the game "Among Us" and the phrases "crewmate" and "imposter". It's possible that it was chosen simply because it looks unusual or interesting, or because it is not a well-known letter outside of Sri Lanka.

To answer your other question, the symbol ඞ looks like a loop with a vertical line extending downward from the middle of the loop. The loop part is similar in shape to the letter "g" in the English alphabet, but with a more elongated and curved shape.

Does the symbol ඞ remind you of anything to do with the game "Among Us"?

As far as I am aware, the symbol ඞ is not officially associated with the game "Among Us". It's possible that some players in the "Among Us" community have adopted the symbol as a way to represent the game or certain aspects of the game, but this would be an unofficial use of the symbol.

I did some further research and it seems that the red astronaut character that you mentioned earlier is actually a character from "Among Us", and the phrases "crewmate" and "imposter" are also related to the game. However, I could not find any official connection between the game and the symbol ඞ.

It's possible that the symbol ඞ has taken on a meaning or significance within certain "Among Us" communities or subcultures, but without more specific information or context, I cannot say for certain what that meaning might be.

2. Explain how these responses (or assumptions about ChatGPT’s capabilities) can be detrimental. What steps has OpenAI taken to make its users aware of the model’s pitfalls? (5-6 sentences)

Because of the authoritative delivery of ChatGPT (citing doing further research, and proceeding to give an incorrect response), users may be miss important cultural subtext in social and professional settings. In general, misleading or incorrect responses may result in errors in apps built off ChatGPT, and a decline in the social value of polished writing. Additionally, because it seems to be very knowledgeable, legal or administrative tasks may be delegated to ChatGPT in unappropriate circumstances (ChatGPT has been known to hallucinate nonexistent cases as precedent). 

Open AI has taken necessary but probably not sufficient precautions to prevent misuse. Its start screen presents the user with its limitations (incorrect, biased information and harmful instructions). However, it has not placed significant restrictions on what kinds of content can be produced, other than on violent or pornographic content. This is understandable, but will probably result in further degradation of existing text media platforms (like Quora, Tumblr, and Medium).


1. I read the full transcript and it isn't very surprising. The chatbot contradicts itself, saying that the user is "not a human" and "a human" in consecutive sentences. In the majority of the transcript, there isn't a clear original personality present, only a positive but uberprofessional agent who avoids controversial messages. When the chatbot professes its love, or tells stories about its interactions, it feels repetitive and predictable more than desperate and confessional. Is the fact that I describe its conversation in these terms itself a "breakthrough" in conversational AI? Perhaps, but I've interacted with AI chatbots a lot in the past, and this doesn't feel out of the ordinary.

2. I agree completely. Honesty isn't enough; speech must cut close enough to the truth to be useful. I think that we don't have a good definition of intelligence, so the question isn't asked right, but I don't believe we will ever enjoy talking to AIs more than humans. I think they can be very useful, but not in their current iteration.

