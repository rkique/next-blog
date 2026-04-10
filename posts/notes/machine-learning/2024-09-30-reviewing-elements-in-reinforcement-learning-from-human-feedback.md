---
date: '2024-09-30'
title: 'Reviewing Elements in Reinforcement Learning from Human Feedback'
---

Etha Hua

Reinforcement Learning from Human Feedback.
Primarily *preference* data from human experts, and generalizes beyond training data.
- ranking of model responses from A, B, C, D.
Can learn abstract, complex human preference.

Negative log sigmoid function over all response pairs, increases the distance to minimize loss. 

$[\log(\sigma(r_{\theta}(x,y_w) - r_{\theta}(x,y_l)))]$

RL: agent and environment. Action $a_t$, state $s_t$, reward $r_t$. 
Actor updates policy, critic network estimates the value function to improve policy updates. Iteration of PPO: 
- rollout phase
	- Actor: is the finetuned LLM.
	- create experiences and store in memory
- learning phase. 
	- sample experiences from the memory
	- objective = Entropy + clipped surrogate objective - value function loss. 
	- gradient ascent on the total objective

$\pi_{\theta}$ is the policy function.
The clipped surrogate objective is going to be min( $\frac{\pi_{\theta}(a_t | s_t)}{\pi_{\theta_{old}(a_t | s_t)}}A_t$, clipped $({- \epsilon, + \epsilon}) A_t$)
Advantage largely correlates to changes in token probabilities.

PPO uses mean squared error to optimze the critic network, over the $V$ target values. This makes $V$ a more accurate estimation of the value of each state. 


