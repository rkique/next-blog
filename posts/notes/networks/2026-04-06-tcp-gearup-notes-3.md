---
date: '2026-04-06'
title: 'TCP Gearup Notes 3'
---
```
util/vnet_run --host ./vhost --router reference/vrouter linear-r1h2
```

For Milestone 2:

#### VWrite ("s" command in repl)
Input: some normal socket, data you want to send.
Define a send/recv buffer with variables, state etc.
- Load data into send buffer.
- Block if send buffer is full.
- Otherwise, return # bytes written.

**Note on Socket allocation in TCP Stack**

Can result from either the REPL command path, or from a packet-handler path creating child sockets on incoming SYN.

#### VRead() ("r" command in repl)
Input: normal socket, buffer for received data.
Read from recv buffer, write data into buffer passed in.
If recv buffer is empty, block.
- Return # bytes read.

Goals
##### - Define data structures (buffers etc.)
- Receive packets, load into buffer.
- Send packets, load into buffer.

  
Len field will let you know if the message has data.

  

Under what conditions would VRead() return less than the requested number of bytes?

- Should we always block until the buffer is full

- ... or only block until bytes from sliding window?

  

Circular buffer.

A library can make a queue and help wrap around the buffer.