Computational & Experimental models of language tramsission
- Structure arises from cultural evolution when language is under pressure to be learnable and expressive.

- Pressure from expressivity comes from *language use in communication*
- Pressure for simplicity arises from *compressibility in learning*.

Three classes of language:
- Holistic, structured, and degenerate language.

Learners bias towards simpler, more compressible languages.

##### three hypotheses

- Pressure from compressibility by transmission results in degenerate languages

- Pressure for expressivity arising from communicatiy leads to holistic systems

- Pressure from both communication & transmission leads to structure

In chains, where naïve individuals are introduced at every generation, the pressure for learnability (i.e., the influence of the prior preference for compressible languages) is likely to be relatively strong. In closed groups with no turnover of the population, there is only one episode of transmission to naïve individuals (at the first point at which the simulated agents encounter the language), and consequently the pressure for simplicity arising from learning is substantially diminished.4

Structured language maps each aspect of meaning to a single character:
`{(02, aa), (03, ab), (12, ba), (13, bb)`
Holistic language uses more than binary representation:
`{(02, aa), (03, ab), (12, bb), (13, ba)}`


##### Chain & Closed Group conditions

Chain: In 1. agents A and B exposed to data, and generate hypotheses according to $P(h|d)$. In interaction 2, agents produce (meaning, form) pairs according to $P(d|h)$: data according to distribution, and update $P(h|d)$ according to partner predictions.

$\gamma$ is the strength of user to avoid ambiguous references. 

Chains with $\gamma = 0$: pressure for learnability of languages is strong, due to influence of prior preference for compressible language. No pressure for expressivity. 

Closed groups with $\gamma > 0$, same individuals are trained as before. Lack of pressure arising from transmission to naive individuals ($\gamma > 0$). 

Structured languages with $\gamma > 0$: pressure for compressibility arising from learning by naive individuals, pressure for expressivity during communication.

Coding length in bits for a language is 
$$L(l) = -\sum_{i=1}^{\lvert l \rvert} \log_2p(l_i)$$
$p(l_i)$ is probability of $i$ th character in the code for $l$.
This means code lengths are 38.55, 55.20, 67.29 for degenerate, compositional, and holistic grammars.

When both learnability and expressivity are pressures, expressive but compositionally structured languages emerge. This occurs when simulations are initialized with a holistic language. 

When only expressivity is a condition, the initial conditions persist.


![[Screenshot 2026-03-17 at 11.25.06 PM.png]]

Why is levenshtein distance and transmission error relevant to the ultimate generated meanings? Similar meanings are associated with similar signals?

The main claim of the paper is that structure arises from cultural evolution when language is under pressure to be learnable and expressive, performing both a computer simulation and an empirical study. They claim that compression pressures which apply during use are relatively weak compared to the expressivity pressures enforcing distinctiveness, which seems intuitive from firsthand experience with language. Especially when it comes to a phonemic inventory I would have liked to see compression realized in a more real-to-life setting than in varying the fraction of ambiguous communications transmitted by speakers. In my mind these two notions are not at odds, and also apply to different aspects of communication.

The use of holistic languages in the initialization of the simulation matches what we've seen in class on "maximally" expressive natural codes, e.g. chimp calls. The paper notes that it equates `expressivity pressure` with communication and `compressibility` with learning. However, some users can also change languages in ways to improve both compressibility and communicative function: Thiesen-White (2011) see this when employing pictographic methods.

One question I have after reviewing the methdology (e.g. in Fig 3) is how the notion of meaning-form mappings as investigated here even corresponds to compositional language as we know it. After all, if all of language involved picking out black squiggly toys from checkered ones it doesn't seem far removed from holistic codes. I do like the explicit axes enforced, though.