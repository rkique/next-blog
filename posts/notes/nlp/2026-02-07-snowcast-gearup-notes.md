---
date: '2026-02-07'
title: 'Snowcast Gearup Notes'
---
[[Snowcast Design Specification]]
To start listening on port 16800, TCP for listen:

###### Continued Snowcast Notes

1. ```
 ./snowcast_listener 18 | pv > /dev/null
    ```
    
reference/snowcast_server 16800 mp3/*
`snowcast_server 16800 mp3/*`
./reference/snowcast_listener 18
./reference/snowcast_control localhost 16800 18
./snowcast_server 16800 mp3/*
./snowcast_control localhost 16800 18
to connect to the server, call the control with the same port.

#### UDP client (listening client)**
`snowcast_listener 12345`
- prints all data received to UDP port to stdout

#### TCP client (control client)**

```
./snowcast_control <server_name> <server_port> <udp_port>
```
`snowcast_control localhost 16800 12345`
PROTOCOL: MUST communicate with server via the protocol
- it should show a prompt and wait for input from stdin
- if user types in a q followed by newline, client should quit
- number followed by newline, SetStation with user-provided station number

PROTOCOL: MUST close the connection if replyType not 2,3,4.
control client MUST print information sent by server. 
- On Welcome reply, print to stdout:
`Welcome to Snowcast! The server has N stations`
- On Announce reply, print to stdout:
`New song announced: <song name>`
MUST attempt to sanitize user input to avoid wrong inputs:
- MAY exit or MAY display error
MUST NOT allow user input to send packets which violate protocol specification

#### Server specification

`./snowcast_server <tcpport> <file0> [file 1] [file 2] ...`

MUST start listening for connections
MUST interact with clients as specified by protocol
MUST send an Announce whenever a song repeats.
MUST NOT read entire song file into memory

- MUST print out a log of command receives and any replies sent to stdout
Command line interface 
- `p`: print to stdout a list of stations along with the listeners connected to each, `p filename` is write to files with override.
	- `id,station_name[,connection1,connection2,...]`
- `q`: MUST cause server to close all connections and exit gracefully.
- MUST close any open TCP sockets on `q` or other sockets

Should receive a message:
> Type in a number to set the station we're listening to 


Use the port `16800` for sake of using wireshark

Then set up the listener on the second provided port:

Constraint:

`reference/snowcast_listener 12345 | pv > /dev/null` should be 16kbps.


#### To design: Data Structure for client and station
- Think about and manage concurrency

Think about data structures?
Synchronization, concurrency?
Number of threads to have?

Only the thread that locks a mutex can unlock it again.

- You will need to manually parse the packets on your own.

Argument parsing, logging messages okay.

Milestone
Building the server
Listener + streaming
Announcements while streaming
Error handling/timeouts/etc.


**Control Protocol**
This is a TCP protocol between control client and the server.
This will take commands. There are two commands:

*From the Control Client to the Server, can send:*
```
Hello:
	uint8 commandtype = 0;
	uint8 udpPort;
	
SetStation:
	uint8 commandType = 1;
	uint16 stationNumber;
```

MUST use network byte order: 1 for command type, 2 for port.
*Hello* MUST be sent as soon as client connects to the server.


*From the Server to the Control Client, can send:*
Welcome, Announce, InvalidCommand.
```
Welcome:
    uint8 replyType = 2;
    uint16 numStations;

Announce:
    uint8 replyType = 3;
    uint8 songnameSize;
    char  songname[songnameSize];

InvalidCommand:
    uint8 replyType = 4;
    uint8 replyStringSize;
    char  replyString[replyStringSize];
```
Welcome MUST be sent in response to Hello.

> Welcome and Hello commands are known as a handshake.


![[Screenshot 2026-01-29 at 5.54.27 PM.png]]
