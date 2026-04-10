---
date: '2026-02-02'
title: '1380 Serialization and Communication'
---
Finish quiz 2
Can look at Gearup for guide for serialization

#### Serialization & Communication

M0 goals:
- performance comparison
- complexity comparison (LoC)
- correctness properties

Self Check
- Parts will become more complex
![[Screenshot 2026-01-29 at 10.34.52 AM.png]]
- Crawl throughput, latency
- Index throughput, latency
	- process: fast
	- stem: fast
	- combine: will take a while
	- invert: will take a while
	- merge: will take a while

Will use dozens of components on AWS to deploy the distributed aspects

#### M1: Milestone 1

![[Screenshot 2026-01-29 at 10.35.50 AM.png]]

Will primarily be using HTTP: Application layer, and also the layer below - TCP/UDP. This is communicating over different actors at a single control level. 

If you don't learn how to program now, you will be at a disadvantage!

DSLs for communication:
text-based:
chars,delimiter,content,delimiter: `12:hello world!,`
binary: `<31 32 3a 68 65 6c 6c 6f 20 77 6f 72 6c 64 21 2c>`

**Give me a banana!**
**OK, here it is!**

Several different meanings of protocol:
- request from the client: the "give me", equal to HTTP
	- GET, PUT, DELETE, POST are request types
- responses:
	- response codes: 200 (OK), 404 (not found), etc.
`GET /courses/csci1380/index.html HTTP/1.1`
Actually sending on socket: `HTTP/1.1` requires a host.
Host: example.com

- the protocol of the resource location (server, static site, bucket, access point, API)
	- "banana": /courses/1380?milestone=0
	- "opener": HTML, JSON, XML etc.
	- can give repsonses to requests: 200, 404, 
	- metadata: content MIME type, length etc.
	- "payload" of the data
- protocol of the content: how to access the contents: HTML, JSON, XML etc.


**An example HTTP exchange**
- Where did the client come from? Referrer could be used for security, customization, etc.
```
GET /courses/csci1380/index.html HTTP/1.1
If-Modified-Since: Thu, 2 Feb 2022 11:23:12 GMT
Referrer: https://cs.brown.edu/courses/index.html
```

```
HTTP/1.1 200 OK
Date: Thu, 2 Feb 2024 11:23:12 GMT
Last-Modified: Tue, 31 Jan 2023 18:30:00 GMT
Content-Type: text/html
Content-Length: 3312 ...
```

**Uniform Resource Locator**
{partition/protocol}://{userid}:{password}@{domain:port}/{path}

Note: *{userid}:{password}@* is not present in public access paths.
Q: Why do email addresses only include public facing addr: userid@{domain:port}?
URLs encode many things: 
- the protocol
- login
- DNS or IP
- the path info at the specified resource

#### How to serve an HTTP request

Server will...
- Listen: port 80 "well-known"
- Process: parse, identify, interpret, load
- Respond: on a different port, usually

Over the request lifetime:
`JS, .so, C++, JS`: app: glibc/runtime. Kernel: vm/sched/net.

Every socket read is from
`app → runtime → glibc → syscall → kernel(net)`

`.so: shared objects`: `libc.so, libssl.so, libstdc++.so`


We start by determining the type of HTTP request [GET, POST]
Then, determine what resource is being looked at or script to be executed.
Then, **call into libraries, make system calls, allocate memory, make further network calls**


Javascript for server and client communication is fundamentally different than for front-end manipulation.

#### Base data format

content protocol / encoding: all text-based encodings.
- txt, html, xml, json: at the application level

JSON, subset of JS: must be an object, entity etc.
- pure data, no execution, no references or cycles
- Number, String, Boolean, Array, Object, null

This is John:

```
{ "first_name": "John",
"is_alive": true,
"age": 27,
"children": [
"Kate",
"Trevor"
],
"pet": null }
```

**Q: how to serialize (convert) an object to a data string/stream (and back), unambiguously?**
- in-memory object > serialization > file, database, network > deserialize > in-memory object

O -> "hi" -> O
{'name': "hi"}

Cannot simply convert numbers to ascii.

Can serialize a list like this:
```{type: "list", body: "{type: "list", body: "1"},{type: "list", body: "2"},{type: "list", body: "3"}"}```
**recursive lists:**
- would recursively serialize the inside list, and then the outside list
- This would be different than a string serialization: the string serialization is known as
- "{type: "list"...}".toString()
vs
- {type: "list" ...}.toString()

**stateless functions**
- can we encode type as well? If type inference is good, then no need.
```
{
type: "function",
body: "(a, b) => a + b"
}
```

Can avoid sending the state
Serialization and deserialization state can try to encode state. However, we still don't know what the s refers to here.
- may need to cover references: **who** is parent of who?
- which namespace for a method such as `console.log`?

Traverse the object graph at runtime
 ```
 str = ""
 visited = {}
 
 function traverse(obj) {
	if(obj !in visited){
  	visited.add({Object})
	names = Object.getOwnPropertyNames
	str.append(names.toString())
	for (name of names){
		traverse(name)
	}
	  }
	  }
 ```
	  
- Choose the encoding based on types: `typeof, instanceof`
- identify cycles by marking visited pointers (using Map)
- decide on root objects to traverse a built-in
- keep info on native objects to skip serialization (using Map)
