---
date: '2026-03-03'
title: 'IP Gearup Notes & IP Design Doc'
---

**Case study: UDP Packet breakdown**
For the following information

```
0000   00 00 00 00 00 00 00 00 00 00 00 00 08 00 45 00   ..............E.
0010   00 58 8d c6 40 00 40 11 ae cc 7f 00 00 01 7f 00   .X..@.@.........
0020   00 01 13 8a 13 8b 00 44 fe 57 45 00 00 3c 00 00   .......D.WE..<..
0030   00 00 10 c8 95 f6 0a 01 00 01 0a 01 00 02 00 02   ................
0040   00 03 00 00 00 01 0a 00 00 00 ff ff ff 00 00 00   ................
0050   00 01 0a 01 00 00 ff ff ff 00 00 00 00 02 0a 02   ................
0060   00 00 ff ff ff 00                                 ......
```

**Ethernet**
`00..00 08 00` -> Ipv4

**IPv4**
`45 00 00 58 ... 40 11 ... 7f 00 00 01  7f 00 00 01`
Destination and source for IPv4 are 127.0.0.1 (local IP)

Now we display the UDP within IP as 
`13 8a 13 8b 00 44 fe 57` for a UDP payload of 68 bytes. 

This is the SendIP packet.
`45 00 00 3c 00 00 00 00 10 c8 95 f6 0a 01 00 01 0a 01 00 02`
From the source IP 10.1.0.1: `0a 01 00 01`
To the destination IP 10.1.0.2: `0a 01 00 02`

Inner payload is RIPPacket with header (2 bytes), num entries (2 bytes)
Each entry: Cost (4), Address (4), Mask (4) bytes
`00 02 00 03` RIP header and the NumEntries: '0x0003'.

Entry 1 says that the first route learned is actually 10.0.0.0 / 24:
`00 00 00 01 0a 00 00 00 ff ff ff 00`, second route is 10.1.0.0/ 24
`00 00 00 01 0a 01 00 00 ff ff ff 00`, third route is 10.0.0.1 / 24


forwarding.
- Given a packet, decide which interface to send the packet (based on destination IP). 

routing
- network-wide process of determining packet's path
- how to keep table updated while the network changes?

At scale, we want to route to whole networks. Brown University @ 128.148.0.0/16, 138.16.0.0/16. Intradomain (interior) routing: routing within an AS.
Communication between ~100 prefixes. One admin setting policy for all routes.
Intra-domain routing (RIPs). 
Inter-domain (exterior) routing: routing between ASes. 
RIP
- No single admin
- Don't know all the info
- Decisions are made by policy

<Destination, Cost, Next hop>

We want to store DestAddr, UDPAddr.
10.0.0.2: who the packet is for in IP stack
127.0.0.1:5001: where to write the UDP datagram in the host OS.

how to instantiate an interface from 




Vhost and vrouter take in one command-line option --config:

`vhost --config <lnx file>`
`vrouter --config <lnx file>`

Hosts will only have one interface, and can send and receive packets.
Routers have multiple interfaces --> can forward packets to other interfaces.

Two higher layers for the IP stack
**test packets**: for sending packets from command line on each host/router

**RIP**: routers will communicate with each other, build a global view of all networks in the system.

Each node will create an interface for each line, as a UDP socket. All virtual link layer frames are encapsulated as UDP packet payloads over these sockets. Maximum transfer unit of 1400 bytes. Routing Information Protocol: process a packet according to RIP specification.

*IP forwarding.* Will design a network layer for sending and receiving IP packets. Deliver locally, or forward to next hop destination. Should validate the packet's checksum, inspect destination address, forward it to the appropriate next hop.

IP API. 
- SendIP(destIP, protoNum, []byte)
- ip := Initialize(lnx_file)
- ip.SendIP(destIP, protoNum, []byte)
- ip.RegisterRecvHandler(protoNum, callbackFunc) //will use this func on packet

Prior to forwarding, decrement TTL value, recompute checksum.

















**test reference from nets/doc-example.json**
Ilan implementation notes.
- Ipstack implements the virtual IPs network, shared by vhost and vrouter.
- One goroutine per interface runs listen to read raw UDP 
- One goroutine reads from recvChan and decides protocol for packet.
- REPL runs in all goroutines.

On repo list we need to maintain the state of nodes.

Basic idea of struct
	- Interface[], list of interfaces
	- Forwarding table
	- handlers map[uint8] for handlerfunc
	- handlerMu sync.RW;Mutex
	- recvChan chan *rawPacket.

Use:

util/vnet_generate nets/linear-r2h2.json linear-r2h2

--bin-dir reference/arm64
`util/vnet_run --bin-dir reference/arm64 doc-example`
`
`util/vnet_run --bin-dir reference/arm64 doc-example`

util/vnet_run linear-r1h2
In example, h3 is 10.2.0.3
[[Edstem IP questions]]

For killing processes on unix terminal:

```
sudo netstat -nlp | grep 5003
kill -90 <PID>
```

###### IP notes 
- Will wrap IP packets within UDP packets.
	`send` uses ipstack.SendIP(dst, 0, payload).
	Question: how to implement RIP?
`netip.Addr` represents single ipaddress
`netip.Prefix` represents network prefix, e.g. `192.168.1.0/24`.

`net.UDPAddr`: UDP endpoint address, used by Go's UDP sockets (Ip + port)


##### general notes

- Hosts have exactly one connection, router has multiple connections
- flag in config file which tells routers it is RIP, and then 
- advertise-to R: advertise this router location to another.

How does **H1** connect to **R1**?
We parse the h1.lnx file. This allows us to view the IP addresses.
- 10.0.0.1/24, 127.0.0.1:5000 (this is the UDP port, in place of the mac address). bind here to listen to if0
- has a neighbor at 10.0.0.2 at 127.0.0.1:5001, via if0
	- allows connection in place of neighbors.
	
- Each interface has a set of neighbors. Always know the port for a neighbor, and can snd directly to the neighbor. We want to send something from H1 to R1, now. 

- Interface or goroutine for each UDP port. Each packet sent over the wire contains an IP header + whatever message content. The IP header decides the final destination of the packet [lecture 7]. 

- UDP-in-IP. A complete code example for building an IP header, adding to packet, and sending via UDP. UDP-ip-send: allows to send from an UDP port. 

- route 0.0.0.0/0 via 10.0.0.2


##### Answers to Design Questions

- **What are the different parts of your IP stack and what data structures do they use? How do these parts interact (API functions, channels, shared data, etc.)?**

- We will implement vhost and vrouter which are able to implement IP forwarding. This allows them to send packets to one another via UDP. 

- To fill in MAC addresses for each local address on the network, they will communicate via RIP. 

- They can read a LNX file and setup goroutines to listen at each UDP port for each neighbor. When a goroutine receives a message, it will pass the packet to a main logic routine.  When reading in an IP packet, it will first read the IPv4 header and then decide what to do with it. 

- **What fields in the IP packet are read to determine how to forward a packet?**

- The header field is read, which is headerBytes length. Based on the shared routingTable, we will then determine the appropriate UDP port to forward to or the sending up. We will do this using the longest matching prefix.
- If the packet is local, we will send the packet to the corresponding port in IF[X].
- If the result is not local, next hop IP is N, we will get an interface for N, which is Y. Then we are going to look up N in Y's interface.

Before sending any packet, we will first need to validate the checksum. 

Case : H3 send to H2
- If we want to send to 10.2.0.2 (5005), then the routingTable has a local entry. We just send it to the 5005 UDPPort (10.2.0.3).
	  H3 send to H1
- If we want to send to 10.0.0.1, then the routingTable has a next hop entry. We then modify the IP packet, changing the source, dest MAC address (?) and send it to the 5004 UDPPort because that is the router entry.

Case H3 send to H3
- No routing table consult, just process the packet sending up.

- **What will you do with a packet destined for local delivery (ie, destination IP == your node’s IP)?**

- If the destination is destined locally, the packet will be sent "up". Our nodes then need to do different things with packets. 
	- The host will have test packets. It will print out the test packet. 
	- The router have test packets and rip packets. For router, we need to check the protocol number to figure out if it is test or rip. 

- **What structures will you use to store routing/forwarding information?**
- We will store routing + forwarding information in a key-value stores mapping prefixes (4-octet addresses) to interfaces, which are UDP ports. We can call this routingTable and have one initialized per instance. This is learned through RIP. 
	- Typical host will probably only need two rules, one from the subnet and one for the router. 
	- Typical router could have N + 1 rules for each subnetwork and for itself.

- **What happens when a link is disabled? (ie, how is forwarding affected)?**

I
