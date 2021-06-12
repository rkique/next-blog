[[biology]]
[[Systems]]
[[Chaos Theory]]
[[Linearity|linear systems]]

Turing has 3 seminal works:

* Turing Machines -- Computing
* Turing Test -- AI
* Pattern formation (Biology, his laast 2 years of his life)

Life starts from a single cell //without patterns//, yet it evolves to complicated organisms with complex patterns. Zebra stripes. Tiger dots. Plant phyllotaxis exhibiting fibonnaci patterns.

## Morphogen
Turing: A morphogen is (was) a substance that ... somehow persuades tissues to develop along different lines-- an activation of sorts. Obviously, this was a simplification. Today, we see morphogens in signaling molecules that act directly on cells to produce responses dependent on morphogen concentration.

With the simple model of diffusion of molecules in a gas, we reluctantly envision that "as a result of random movement molecules become evenly distributed."

## Chemistry
Reactions are dependent on the concentration of reactant A and reactant B. This makes sense because more molecules increases the [[markov/state|Markov Chains]] probability of the reaction occurring. 

Now lets consider cells as units. ''Diffusion'' allows for high concentrations to flow to lower concentrations through cell walls. Problem: diffusion would mean that morphogens //should// be evenly distributed through a cell. 

## Turing's solution
''Cells do maintain a steady state, but one that varies in space, resulting in spatially interesting patterns. ''

Suppose we have two morphogens X and Y. The rate of production of X is dependent on some function $f(x,y)$. The rate of production of Y is dependent on some function $g(x,y)$. As these functions are [[reflexive |reflexivity]], any small increase in X or in Y will lead to runaway production. Taking into account the diffusion that we mentioned earlier triggering these chain reactions, we can see that diffusion will lead to non-equilibriums. This is an important and unintuitive concept, because we associate diffusion with stability, and this is true in a unicellular/global context.

##  //However, in the //local// context of a connected system, diffusion can disrupt equilibriums instead.//

Now if we have a set of reactions that produce and destroy X and Y, we can describe the reflexive functions above in terms of modular units.
We can now generalize to a ring of cells. $\Delta X$ for a specific cell is going to be a function of X and Y within the cell, but //also// of the difference in concentration of its neighboring cells. Same for $\Delta Y$. We will also make the assumption that we have a linear function describing inner cell activity.

What Turing basically says at this point is that while there may be equilibriums for single reactions, the full reaction-diffusion model as a whole moves away from the reaction equilibriums. 

He solves the reaction-diffusion model (a diff eq model) and demonstrates wave functions, exp functions, and growing wave functions are all possible results that can arise from it. For a periodic solution on a linear domain like snake skin, we get ''stripes''. For a periodic solution on a rectangular domain, we can also get'' spots.'' For a periodic solution on a circular (?) domain, we get starfish points!
