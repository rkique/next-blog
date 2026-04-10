---
date: '2026-04-01'
title: 'TCP Gearup Notes 2'
---
[[TCP Gearup Notes]]

TCP stack will be another component in your host that receives packets from the IP layer, similar to how you handled RIP and test packets in the IP project. TCP uses IP protocol number 6—to receive packets, you will start by adding another [protocol handler](https://brown-csci1680.github.io/iptcp-docs/#add-protocol-handler) for TCP packets, and then your handler will map them to sockets.

To implement the handshake at least, we want to create a ListenSocket struct which allows for state transitions. 

##### components needed

Connection setup, state management
Building & Sending TCP Packets
Sliding window protocol -> how to send and receive data
Retransmission for segments that time out
Connection termination.

MSS = 1360
Window indicates range of sequence numbers, represent as 32-bit number.  Sender Probe Zero Window. Allow window stay zero indefinitely. 
Receiving RST MUST immediately terminate connection.
Always ignore URG flag.
Use 32-bit random number for ISN generator.
Passive OPEN call does not interfere with others.
Outgoing packets should use IP assigned to host as source IP.
On close, leave in TIME_WAIT for 120 seconds.
Retransmissions should use exponential backoff.

RTO must be computed according to algorithm in 10. 

==Algorithm for taking RTT samples==
- All RTT estimates are made via packets which are sent exactly once. 

- If a segment retransmitted, ACK is ignored for RTT calculation. 

**Retransmission timeout**: time before a packet is timed out, gets a minimum and a maximum.


If more data arrives than can be accepted, discard additional.
Do not shrink window size.


Add repl commands for 
		 a Listen on a port and accept new connections
         c Connect to a TCP socket
         ls list sockets.



- Socket API should be interface between REPL commands and the rest of the TCP stack. The API should have the Listen and Connects implemented.

> Socket API

In Go, sockets are represented as structs, which have helper methods to perform socket operations.

`VTCPListener` represents a listener socket.
`VTCPConn` represents a "normal" socket for a TCP connection between endpoints. 

Error handling: functions should return `nil` or error in a dedicated error parameter (second to function)

**Method Signatures in Go**

```
type Thing struct {
	A int
}

func (t *Thing) AddSomething(x int){
	t.A += x
}

func main() {
	//Make a thing, call a method on it.
	tt := Thing(A: 41)
	tt.AddSomething(1)
}
```


##### TCB Creation Time

Server side: create data for a socket when we begin listening on a connection, but only have certain properties.

Client side: when initiating a connection, we send a syn and connect()
Server side: when accepting a connection, we receive the syn.

##### Listen Sockets ("Placeholders)
Seem more complicated than the Regular Sockets.

For the Socket API:

1. we should have the function:
> func VListen(port uint16) (\*VTCPListener, error)

Is a passive OPEN
Wants hosts to connect on this port
Makes a listen socket.

```
listenConn, err := tcpstack.VListen(9999)
if err != nil {
// ...
}
```

2. We should have the function:
> func (\*VTCPListener) VAccept() (\*VTCPConn, error)

This will wait for new TCP connections on a given listening socket. If no new clients have connected, the function will block until a new connection occurs. When a new client connects, VAccept will return a new normal-type socket to represent the new connection. 

This can be supported by VConnect
- Active OPEN.
- Waits for the other side to initiate a connection. 

3. We should have the function
> func (\*VTCPListener) VClose() error

Which will close the listening socket, removing it from the socket. Any pending requests to create new connections should be deleted.

- Half-open / in-progress connection attempts that have arrived, but are not done yet.

### Data Structures Needed for sockets & TCP stack


> **Scenario: H2 Listens, H1 Connects, H2 Accepts**

On H2: `VListen(1234)`
On H1: `VConnect(10.1.0.2, 1234)`


When Packet sent for VConnect is received, we use the socket table to map the packet to a particular socket, and check that H2 is listening. Then, we use VAccept on our VTCPListener at the designated port to create a VTCPConnection.

We should then send a Syn + Ack to the other side. This allows the return of a packet to the other side. 

On H2: `LS.VAccept()`

For the socket table (at the transport layer), we need to specify protocol, Sender Port + IP, and Destination Port + IP for each VListener and VTCPConnection. We should also need to specify the state (Listen, Syn_Received, Established) or (Listen, Syn_Sent, Established). 