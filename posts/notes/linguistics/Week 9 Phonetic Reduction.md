Probabilistic Relations Between Words: Evidence from Reduction in Lexical Production

- probabilistic information about words, phrases, other ling. structure represented in minds of language users. 
- Probabilistic reduction hypothesis: word forms are reduced when they have a higher probability.
- What is the role of local probabilistic relations between words? Probabilistic relations between words must play a role in mental representation.
- examine: probabilistic relations between words, function & content. 
- prior probability is relative frequency: 
  $$P(w_i) = \frac{C_(w_i)}{\sum_j C(w_j)} = \frac{C(w_j)}{N}$$
  - joint probability is relative frequency of words together (string frequency, bigram):
  $$P(w_{i-1}w_{i}) = \frac{C(w_{i-1}{w_i})}{N}$$
- Conditional probability of a word given the previous word:
$$P(w_{i}| w_{i-1}) = \frac{C(w_{i}w_{i-1})}{C(w_{i-1})}$$
Conditional probability controls for frequency of conditioning word -- joint probability can have be high if individual words are highly frequent. CP only high if second word likely to follow the first.

Also consider joint probability with next, conditional probability with next, trigram probability. 10 most common function words: 
- coded as vowel full, reduced. 
- duration in milliseconds

Reduction influenced by: 
- planning problems: corrected by removing disfluencies
- phrase boundary position: initial or final in utterance removed
- special forms: you've, an
- controlled for rate of speech. 
- controlled for segmental context
	- consonant deletion favored when segment preceded or followed by consonant.
	- Why only following segment?
- syllable type of target
- Reduction of following vowel

For highly predictable from preceding words, the likelihood of reduced vowel in function words was 48 percent. For low predictable, probability was 24 percent. Similarly, for highly predictable targets, shorter words. Vowel reduction could be categorical choice, but duration is not. It's possible that shorter words are solely consequence of reduced vowels. However, predictability found to have independent non-categorical effect on word duration.

However, it is possible that predictability effects on reduction reflect emergent words such as sorta and not about probabilistic relations between separately accessed words. To test this hypothesis, we need to show higher predictability <> increased reduction even in non-lexicalized pairs.

Considering preceding word effects, no significant effect of CP on vowel reduction in low probability group but significant effect in high probability group, so this is evidence for lexicalization. For duration, CP did have significant effect for both groups.

Consider following word effects, CP <> increased reduction in low and high groups.

More predictable words are more reduced even if they are in a low probability group and unlikely to be lexically combined with other words. Particularly for predictability from previous, high group shows stronger effects, so that some reduction is due to lexicalization.

Content words: both conditional and joint probability of target with previous word affects duration. Same with next word: more predictable words shorter. Effects of conditional probability on reduction weaker in content words than function. High-frequency previous words led to longer target content words. What does this mean?

Lengthening of content words after frequent previous words is prosodic effect. If previous word frequent, less likely to be stressed, so that current word is stressed.


### The smooth signal redundancy hypothesis

We argue constraint of robust communication while efficiently expending effort leads to inverse relationship between redundancy and duration. Improves robustness by spreading information evenly across speech signal. Prosodic eminence is a linguistic means for achieving smooth signal redundancy. In english, prosodic prominence structure is the means by which robust signal requirement constraints expressed in spontaneous speech.

Pressures encourage production of similarly probably recognizable utterances. Phrase-medial syllables highly redundant shorter than less predictable.  Strings of elements whose overall P(recognition) is 1: AB (.5, .5) and CD (.25, .75). Assuming constant P(recognition) for words, we want smoothly distributed signal over segments to allow for high recognition rate. The alternative is providing segment information but not word information. 

1. There is inverse relation between language redundancy and acoustic redundancy (syllable duration). Language redundancy is syntax, semantics, pragmatics, focus, length.
2. Prosodic prominence smooths signal redundancy by controlling syllabic duration. Prosody is due to redundancy within language, and robust communication: checking, and smooth signal redundancy.

![[Screenshot 2024-10-27 at 12.35.32 PM.png]]

They envision prosodic prominence controlling syllable duration, redundancy possibly controlling prosodic prominence

- To what extent does prosodic prominence relate to or control syllable duration?
- Does language redundancy relate to syllable duration independently of prosodic prominence? (For hypothesis, they hope not)

If 2. holds then we expect prosodic structure to account for all the variance in syllable duration which is accounted for by linguistic redundancy. 


#### duration

Word-medial boundaries were determined using HMM for phone-auto-segmentation. Mean duration of ð could be attributed to segment itself, the high frequency of words like 'the', or the fact that 94% of syllables containing ð are two to three segments in length. Chose to normalize only for number of segments in each syllable, ignore segmental identity. Aylett and Bull found that a durational model based on num segments within syllables predicted durational variation across speakers better than model based on individual segment duration distributions. Treat all phonemes the same.

Then, the overall expected duration was the mean of the segmental log distribution * num of segments in syllable and expansion factor associated with number of segments. 

Normalized measurement of relative length was how much expected duration needed to be reduced or increased to equal observed. This would be 
$$d = \sum_{i=1}^{n} \exp^{(\mu(i)+k\sigma(i))} M$$
$\mu$ is average log duration $\ln(0.064)$

#### redundancy

Three measurements: word frequency, trigram probability, givenness. These are redundancy at syllable level: syllabic trigram probability, word level (log word freq.), discourse level (order of mention of referents). Givenness measures the number of times a referent has been mentioned in conversation (including "it"). This is implied to be implementing prosodic factors below.

#### prosodic structure coding (boundaries)

Prominence structure incorporates:
- distinctions between reduced and full vowels
- lexically stressed and unstressed syllables
- nuclear, non-nuclear phrasal stresses

Theory of prosodic constituent structure with four levels: Prosodic word, minor phrase, major phrase, full intonational phrase. Because the smooth signal redundancy hypothesis predicts relationship between prosody and redundancy for prosodic prominence, but not for prosodic boundaries, expect large unique contribution of prosodic factors when all materials included. Smaller contribution when only phrase-medial syllables considered.

So, the variables used were
- prosodic word boundary
- minor phrase break
- major phrase break
- full intonational phrase 
Hierarchical model: full implies major implies minor and word boundary
Wouldn't prosodic word boundary necessarily capture variance due to full intonational phrases? It's not like there is extreme durational variance after full intonational phrases only. 

#### prosodic prominence
- vtype
- lexstress
- phrasal accent
- primary phrasal accent

Data is syllables from the HCRC Map Corpus. 

#### results
Redundancy factors predict 20-65% of variation in syllable duration in nonphrase-final monosyllabic words. As redundancy increases, duration decreases. Also, strong relation between prosodic factors and variation in syllabic duration. Most individual factors show unique contributions to regression model. Prosodic prominence can control information content. 

Together, models predict between 30% to 68% of the variance in duration. Either prosodic or redundancy models can account for almost the same amount. We find that the unique contribution of redundancy factors to prosodic prominence, and prominence + boundaries models, is small. Redundancy was hypothesized to share predictive power with prosodic prominence, but not prosodic boundaries.

(1) redundancy accounts for a large percent of variance in duration when prosodic boundaries controlled for
(2) prominence accounts for much of that same variance

(1) Most of the contribution made by language redundancy is implicitly represented as prosodic prominence. Some (5%) is not represented.
(2) Prosodic factors make large unique contribution beyond redundancy to duration. Prosodic prominence contribution was much smaller once boundaries accounted for. This suggests that the role of prosodic prominence structure, without boundaries, is to smooth signal redundancy by controlling duration in a way that implicitly mirrors language redundancy factors (how?)

(1) a significant effect of prosodic and redundancy factors on duration in a large corpus of spontaneous running speech,
(2) an inverse relationship between redundancy and duration, 
(3) a large proportion of the variance in durational measures is accounted for by prosodic and redundancy factors, in spite of the relative simplicity of our models
(4) the effects of prosodic prominence and redundancy are to a large extent shared, although small unique effects of both prominence and redundancy were observed.


#### how efficient is speech

In English and Dutch the importance of the first syllable is reflected in the fact that lexical stress is predominantly on the first syllable of a word 
- How does this work for non inflectional languages.

Segmental reduction correlates consistently with acoustic reduction in a wide range of phoneme classes. They find a consistent correlation bewteen distinctive importance of phoneme for word recognition and acoustic reduction in both duration and spectral contrast. This is found after accounting for speaker, vowel, style, stress, prominence, and position of phoneme.

The effect of the number of syllables in a word, including differences between polysyllabic words, is more than the difference between mono- and polysyllabic words, and prominence, including higher levels, is more than a distinction between function and content words.

For reduction, it is found that the relative amount of variance explained is roughly half the amount from the information content.


#### discussion

informational importance $\sim$ acoustic reduction 
The distribution of information content and reduction over the relevant factors was exactly what would have been expected in efficient speech. Factors like position in word or number of syllables which are important for information content are also important for level of reduction. The positive correlation between segmental information content and measures of reduction points towards an efficient organization of speech.

View is that structural factors, e.g. prominence both predict reduction, and prominence predicts redundancy. This assumes that redundancy is a consequence of prominence. 




