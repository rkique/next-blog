---
date: '2026-04-02'
title: 'TCP Specification Notes'
---
The reliability of TCP stems from the ability to detect packet losses by attaching sequence numbers to them.

Key fields:
**Source, Destination Int16**
**Sequence Number Int32**
If SYN is set, the packet is undergoing handshake and will next send (ISN + 1) in data.

**Acknowledgment Number Int32**
**Window Int16**: Advertised window of RECV buffer available.
**RST**: reset connection.

**Data**...

Fundamental idea behind TCP is that every octet has a sequence number. 

Sender learns receive progress from ACks which are sent.
