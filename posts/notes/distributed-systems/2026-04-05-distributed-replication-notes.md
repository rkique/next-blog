---
date: '2026-04-05'
title: 'Distributed - Replication Notes'
---
The replication of data allows
- collocation: bringing data closer to computation.
- Load balancing: spreading load across multiple computers
- Fault tolerance: access to data even if some nodes fail.

Drawbacks, challenges.
- Expensive to keep copies around
- Inconsistent: must maintain the illusion of a single view.

> Consistency Spectrum

**Read your writes consistency**. When a store ACKs a write, it should have that value stored for future reads. 

**FIFO consistency**: When a store ACKs a write, it should propagate the first write back instead of a second one. E.g. there should be propagation of the first write across *all data stores* so that a different client reading is not confused.

**Causal Consistency**: Writes related by a happens-before relationship must be seen in the same relationship by all processes.

![[Screenshot 2026-04-05 at 9.44.51 AM.png]]

Primary-backup replication

![[Screenshot 2026-04-05 at 9.45.43 AM.png]]
The client cannot read writes which have not been completed (fully acked) yet.
![[Screenshot 2026-04-05 at 9.47.19 AM.png]]
