---
date: '2026-02-09'
title: '1380 Notes on System Design'
---
- Interface between two programs: the set of assumptions that each programmer has to make about the other program in order to demonstrate correctness. Defining interfaces is the most important part of system design.


- An interface should be simple, complete, and admit a small and fast implementation.

**Completeness**: separate the normal and worst case
**Interface**: do one thing well
- Don't generalize
- Get it right
- Don't hide power
- Use procedure arguments
- Leave it to the client
**Keep basic interfaces stable**
**Keep a place to stand**

Don't prematurely optimize if there's no reason to do so.
It is alright to sacrifice performance for functionality 