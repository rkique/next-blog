---
date: '2026-03-29'
title: 'TCP Gearup Notes'
---
IP implemented *in* UDP.

To run the host with ==TCP== against the reference router:
```
util/vnet_run --host ./vhost --router reference/vrouter linear-r1h2
```


> as an implementer, (de-)serializing packets to/from a UDP packet is the same interface as (de-)serializing to/from an Ethernet frame.

TCP is like an application which we are plugging into the IP stack. TCP will be for hosts only, to allow them to reliably communicate between one another.

Allows `vhost` to send data between hosts.

##### Four major components
- Abstraction for sockets mapping packets to individual connections
- Implementation of TCP state machine for setup and teardown
- Sliding window protocol for sending and receiving data
- REPL commands to test API and send/receive files.

[[TCP Lecture 13 Notes]]

In constrast to the IP REPL commands, the TCP repl will allow sending and recv of files and large numbers of data. The network stack involves `Socket API, TCP Stack`, and IP Stack.

> **The Socket API**

Go's socket API:
```
conn, err := net.Dial("tcp", "10.0.0.1:80")
...
someBuf := make([]byte, ...)
conn.Write(someBuf)
```

Our socket API:

```
conn, err = tcpstack.VConnect(addr, port)
...
someBuf := make([]byte, ...)
conn.VWrite(someBuf)
```

###### Milestone 1

VListen      //Listen on a port.
VConnect    //Connect to a socket
VAccept(...) //Accept a new connection (TCB)

VWrite(...) //Send on a socket
VRead(...) //Recv on a socket

VClose(...) //close a socket

**We will initialize a TCP stack to make the sockets work**. This will happen *under the hood*. We will use the IP stack to send/recv packets. IPSend(destIP,protocol, bytes)

new handler for TCP.

Each REPL command will use the socket API. The basic commands are:

---
- a Listen on a port: accept new connections
- c Connect to a TCP socket
- ls List sockets
- s Send on a socket.
- r Receive on a socket
- cl Close a socket.
---

Most of the time use linear-r1h2 network
Mainly use the reference router.
TCP will allow sending of multiple messages from one host to another. Host only implementation

##### M1

Now that you’re able to run TCP, start thinking about your design for handling sockets and your [socket API](https://brown-csci1680.github.io/iptcp-docs/specs/socket-api). For the milestone, we’re interested in what data structures you’ll create to represent your sockets and your TCP stack, and how the API functions will create them.


