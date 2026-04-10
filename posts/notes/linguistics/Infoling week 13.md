
Often though that color space is objectively determined by perception. The fallacy of this assumption is belied by the diversity of color spaces in use today (e.g., CIELAB, Munsell, NCS), each with its own geometry

gains in communicative efficiency should follow the trajectory of color terms in the Berlin-Kay evolutionary sequence: e.g. communicative efficiency increases the most with early items.

...we discovered that as languages progress towards greater overall communication efficiency about color, some colors undergo more dramatic shifts in communicative efficiency (across languages which exist)
![[Screenshot 2024-11-29 at 11.49.52 AM.png]]
![[Screenshot 2024-11-27 at 5.22.29 PM.png]]

the things that are identified as objects are more likely to have warm colors (reds, oranges) rather than cool colors.

In the Conway paper, surprisal per color is quantified as the sum of surprisal for each word used to label *c*, across every potential word (which is typical). They find that as languages increase in communicative efficiency about color, blue and green remain the least efficiently communicated colors while red and orange remain the most efficiently communicated colors. Under the assumption that communicative efficiency increases the most with early items in color evolution, they ultimately find support for an alternative color language hierarchy to that proposed by Berlin and Kay. They also raise objections to their framework, as lacking an objective basis for their color space and subsequent naming. Based on communicative efficiency, their model predicts colors emerging in a warm-to-cool scheme: red, orange, yellow, brown, purple, and finally blue and green. In Figure 7, Brown and yellow undergoing the dramatic changes in high-communication efficiency may be an artifact of the binary classification algorithm: the underlying data does not demonstrate the same distinctions. I'm curious what color terms were identified by the Tsimane' speakers who did not spontaneously use the focal terms, as there seems to have been a wide range of dissent on terms. 

They turn to the usefulness of color as a determiner for color-term variability and evolution. I'm not convinced as to why they see yellow, brown, and purple as distinguished by their usefulness. Are natural objects more likely to be warm hued than cool hued? Many edible plants are in cool color shades (blue and black colors). In addition, their arguments for yellow being a more salient color also do not seem well-founded, as it is implausible that it would hold utility as a method for distinguishing skin tones. It seems that there are cases in which green and blue are important focal colors to distinguish, e.g. in determining the ripeness of fruit or characteristics of water features. The environments in which Tsimane' speakers actually utilize the terms given could illuminate more about the utility of color identification in pre-industrial societies.

The Hahn paper looks at the dual pressures hypothesis brought forth by Zipf and others from the perspective of a tradeoff between parseability and predictability. They show that spoken languages optimize for both, far more than random baseline grammars. They measure parseability as efficiency, or the information utterances provide about their syntactic structure, and predictability as surprisal, as we have seen described elsewhere. They suggest that Greenburg's correlations, and the empirically observed dependency-length minimizations in languages, may be explained purely in maximizing parseability and predictability. Parseability is based on the listener probabilities of reconstructing syntactic structures: I'm wondering why they would expect parseability of a random baseline to approach the actual parseability of languages: both the notion of randomness (which seems to be *uniformly distributed over syntactic relations*) and the reliance on listener probability are potential obstacles here. Figure 6, where they compare singular empirical data to the distributions among optimized grammars, is somewhat misleading as the width of the bar is arbitrarily set. In addition, the weighted sum seems to be an odd yet necessary component to this paper. 

![[Screenshot 2024-11-29 at 12.12.51 AM.png]]

Communicative efficiency
"a speaker uses a color term to describe a color chip in the array, and a listener has to guess the chip given the word."


- How does yellow indicate race?


### hahn

Dual pressures: reduce complexity (provide less information), reduce ambiguity (provide more information)

parseability
![[Screenshot 2024-11-27 at 5.44.30 PM.png]]

predictability
![[Screenshot 2024-11-27 at 5.45.05 PM.png]]

**parseable** and **predictable**
![[Screenshot 2024-11-29 at 12.27.49 AM.png]]

we formalize the communicative efficiency of a language as a weighted combination of two terms: 
- the amount of information that utterances contain about the underlying messages and the cost or difficulty of communication (30, 32–34, 46, 47). 
- We model the informativity term as the degree to which listeners can reconstruct syntactic structures from an utterance, i.e., the parseability of the language. We model the cost or complexity term as the predictability, or negative entropy, of the utterances, since entropy is a standard measure of the complexity of any system of messages (48). We use standard neural-network methods to estimate the numerical values of parseability and predictability from counterfactually ordered corpora.

VO languages should have prepositions
OV languages should have postpositions

pareto frontier: an average of the positions of the optimized grammars generated for the corpus of each language

> To the extent that language universals arise from biases in learning or in the representational capacity of the human brain, our results suggest that those biases tilt toward communicative efficiency.

As opposed to parseability

> For example, it has been proposed that languages have a single head-directionality parameter and that this accounts for the Greenberg correlations (17, 57). As an explanation of correlations, this idea turns out to overpredict correlations (13, 19), and more recent research in syntactic theory has provided evidence against it (58–60). Nevertheless, future research should examine whether there are more principled connections between communicative efficiency and grammar simplicity.

More principled connections: communicative efficiency arises out of i