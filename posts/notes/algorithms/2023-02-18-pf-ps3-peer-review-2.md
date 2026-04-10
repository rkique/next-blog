---
date: '2023-02-18'
title: 'PF_PS3_peer_review_2'
---
I like the first paragraph of reasoning in problem 3, especially how you reduce "implies" to an "and" statement. You have a typo where it should be "De Morgan's Law", not "DeMagan's". I would restructure the "two bullet points" part to showing first that R and S are false, then that (P ^ Q) must be true, and finally that P and Q are true. The less jumping around, the better. Try to make it flow forwards.

Answers to 4 are looking good!

For problem 5d, you have (there exists fooled person for all time) and (all person fooled some time) and (all fooled person implies not all time). That 3rd part is not a statement, and conjoining them with ^ is not a great idea.

Note that fooling someone is a function. If we define P as persons, T as times, and f(x,t) as a boolean function for fooling a person at a particular time, we might have:

- (there exists x in P such that for all t in T: f(x,t))
- (for all x in P there exists t in T: f(x,t))
- not (for all x in P, all t in T: f(x, t))
