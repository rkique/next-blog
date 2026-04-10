---
date: '2023-04-26'
title: 'proofwriting_final'
---

# Space Logic Lemmas

For my proofwriting final, I will introduce some basic proof structures in an intuitive format that you've probably seen before: that of Venn Diagrams! 

While some of the content here is seen in other papers as an supplement for a more advanced theory, I think these results are interesting in their own right. Furthermore, they are self-contained, making them perfect for analysis. Form follows function.


#### Everything*
A blank diagram doesn't actually tell us anything, but it does direct us to something. If it isn't labeled, we can usually assume that it contains everything of interest. It is sometimes called the universal set $U$. In probability theory, it might be the sample space, $\Omega$. In the context of points and lines, it is $\mathbb{R}^2$, in the context of individuals it is everyone, in the context of possible worlds it is every possible world, and so on.

#### A
We draw the set A as a circle. I've tried other approaches but haven't found anything that works as well; for both inclusions and intersections, circles are the most suggestive of a set. Squiggles look like you're trying to call attention to them, triangles, squares, and hexagons fail miserably at suggesting intersection, etc.

#### A intersect B 

Our classic example is set intersection. Given sets $A$ and $B$, their intersection $A \cap B$ is all of the elements in both set $A$ and set $B$. This is depicted as the overlapping area between $A$ and $B$.

#### Direct Proof: A implies B
Here, we have the first way to express a statement, the direct proof $A \rightarrow B$. There is a difference between $\cap$ and $\rightarrow$. The first is a description *within* a world, while the second is a relation *about* a world. In every world we have $A$, we have $B$. $B$ encircles $A$.

#### Not A
Here we have the opposite of $A$, denoted $\sim A$ or $\neg A$.

#### Not B
Here we have the opposite of $B$, denoted $\sim B$ or $\neg B$.

#### Contrapositive: Not B implies not A
Here is an intuitive explanation for the contrapositive proof, ${\sim} B \rightarrow {\sim}A$. If we have the implication $A \rightarrow B$, or B encircling A, it is inevitable that we will also have ${\sim} B \rightarrow {\sim} A$. 

As we can see in the picture, ${\sim}A$ encircles ${\sim}B$, because $B$ encircles $A$. (this is also like downward entailment in semantics).

#### A and B
$\land$ is what we get when we apply $\rightarrow$; like $\cap$, it is a statement in a world. That is, when we apply $A \rightarrow B$, we obtain a world with a circle $A$ and a bigger circle $B$ around it. 


#### A and not B
Armed with our new tool, we investigate a different approach from our direct proof. Assume that $A \rightarrow B$. Then we have $A \land {\sim}B$, a small circle and a bigger hole. Doesn't it look hard to be in both? (it's impossible!)

#### C and not C
What $C \cap {\sim}C$ says is, "be both inside and outside the circle". As we can see, this is impossible. it's quite like $A \cap {\sim}B$, but with A relaxed, widened a bit... exactly to the size of B.

#### Proof by Contradiction: A and not B implies C and not C

Like the contrapositive, proof by contradiction follows the direct proof. As we can see, if we have the direct implication $A \rightarrow B$, we will also have $A \cap {\sim}B \rightarrow C \cap {\sim} C$. That is, if B encircles A, then our original world will be a small circle $A$ and a bigger hole ${\sim}B$. These two pieces then imply $C \land {\sim}C$.


#### A if and only if B
We can say A $\leftrightarrow B$ to mean $A \rightarrow B$ and $B \rightarrow A$ at the same time. If we have both $A \rightarrow B$ and $B \rightarrow A$, we must have B encircling A and A encircling B. This is impossible, unless A and B are the same circle! This is same rationale for proving equality by double set inclusion.

#### Equivalence: A <> B <> C
If we have multiple statements we need to prove equivalence for, we need only to prove $A \rightarrow B$, $B \rightarrow C$, and $C \rightarrow A$ to prove $A \leftrightarrow B \leftrightarrow C$. Below, we can see that the circles are in a donut shape which makes this true.

#### Induction

Hey, we got something fun to play with. It's labeled "inductive step". Looks like a world with a circle $A_{n}$ and a bigger circle $A_{n+1}$ on it. 

Oops, I dropped it and it opened! It's an implication now, with a small circle on one end and a big one on the other. Let's see. If we have a world and just one circle $A_1$, we get...

Woah! A whole sequence of statements $A_1, A_2, \ldots, A_n$.





