---
date: '2026-03-29'
title: 'TCP Lecture 13 Notes'
---
One connection over time:

> **Warmup**

In the initial warmup, we have 3 different connections. P1 and P3 are different directions on the same connection, which goes from one port to another.

Five tuple: Protocol, Source IP:Port, Destination IP:Port.
TCP/UDP connections are possible at the transport layer: *why* we need to specify the transport port as well.

> called a flow: the two-way connection between two machines

> **Transport Layer**

Provides support for applications via **ports**
OS provides interface to applications via **sockets**.

#### TCP

Motivation: sending a big file
Need to know where the data ends
TCP process:
- Packets may be dropped
- Packets may get corrupted
- Packets may get reordered.
- Packets may take different paths
Ensure that no particular router on the way is overwhelmed.
Sender needs to know that the data actually arrived.

