---
date: '2026-03-04'
title: '1380 Midterm Mock Review'
---
**Problem 1**

1.1 Correct terminology is system is not always available, but will be consistent when it is online. That indicates that there is a gap between the processing of the failure and the availability.

Moreover, the solution seems to violate G1, unless the request "being handled" here includes sending error messages. Within the solutions, the idea that G2 can be sacrificed for G1 and G3 suggest that G2 roughly corresponds to consistency 

**1.2 The request should be able to timeout, and the client should retry results until the server is available again.** **This will continue to guarantee consistency at the cost of availability.**

However, one could also have an available system which is not consistent. Correctness: the system is not always available, and doesn't respond to the client. Impact: user cannot see weather info

**1.3**
TCP retries sending pacets.
Client should wait until network is available again.
System is not available when the network is down
User cannot see weather information, including outdated information

**1.5**
When there is a network partition, G1, G2, G3


Question 3.3. Solution does not involve GPS, involves NTP server with a global clock and servers syncing to this. The clients sync to the server. NTP sends timestamps to sync clocks.

**3.4**  is not possible, because synchronization involves consistency, allowing players to play the game at any time represents availability, and guaranteeing the game works while clients disconnected is partition tolerance.

**4.1** non-injective components include `grep`, `sort`, and `head`, because each could produce the same output with different inputs. Many inputs could result in the same sort. `tac` is injective, because the reverse of a file is one-to-one. 

**5.1** For node hashes, its not desirable to have hashes in the same range, because they are not uniformly distributed. h1 and h4 are the only acceptable hashes, and h4 is worse than h1 because it is not as uniform.

For 5.2, the hashes are for which each column belongs to: h4 is for node identiifcation, then h1 is for node identification. Exercise: verify this.

**6.1** 

High level description of gossip protocol from each node persepctive. 

Each node, when receiving weather information through a gossip message, should relay this to `fanout` other nodes that are selected randomly, unless it has already seen this exact message before.
