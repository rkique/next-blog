---
date: '2026-04-05'
title: 'Distributed - More Internals Notes'
---
Optimizations for a spellchecker.

`cat f1.md f2.md | tr A-Z a-z | tr -cs A-Za-z '\n' | sort | uniq | grep -vx -f dict.txt - > out; wc out | sed 's/$/ words/`

> Develop partial specifications for each stage

> Convert to a dataflow graph

> Parallelize the dataflow graph

> Optimize dataflow graph

Here we have at least two regions, one which reads out newline separated alphabetic strings, sorts and removes duplications, then searches against a `dict.txt` to find misspellings. Then it outputs the count of misspelled words.

> **tr** command

specifiically `A-Z a-z` replaces all capital letters with their lowercase versions. Try to use the last letter for `set2` over `set1`.

This is per-line readout, and can be simply combined and parallelized. Same thing with the `cat` command, all the way up to the sort.

###### Challenges with Runtimes

Unix pipes are lazy and do not buffer all the way. This means that using `grep` and saving to f1 and f2 will result in first operating on `f1` and then on `f2`.

This will not write in parallel. Each files are started to be read and written sequentially. FIFOs require a reader to keep data flowing, and `f1` and `f2` need readers.

```
mkfifo f1 f2
grep "foo" in1 > f1 &
grep "foo" in2 > f2 &
cat f1 f2
```

But using an `eager` file will:

```
mkfifo f1 f2 f3 f4
grep "foo" in1 > f1 &
grep "foo" in2 > f2 &
eager < f1 > f3 &
eager < f2 > f4 &
cat f3 f4
```
Eager pulls data from `f1` and `f2` as it is written, allowing both grep operations to proceed in parallel.

**Important Note**
It's generally extremely hard to introduce static parallelization for scripts. Instead, introduce interposition shims which regulate the next thing shells execute.

**Just-in-time scaleout**. 

The shell mode script:
```
OUT=${OUT:-$TOP/out}
for input in $(ls ${IN}); do
cat "$IN/$input" |
tr -sc '[A-Z][a-z]' '[\012*]’ |
sort > "${OUT}/${input}.out"
done
```

Switching to `par/on` mode allows replacement of variables, at each part:

```
OUT=/pash/out
for input in in1 in2; do
cat /pash/in/in1 |
tr -sc '[A-Z][a-z]' '[\012*]’ |
sort > /pash/out/in1.out
done
```

**Challenges with introducing JIT**

Cannot modify underlying interpreter
Cannot be observable to users
Should introduce minimal overhead
**JIT Engine**
![[Screenshot 2026-04-05 at 9.14.00 AM.png]]

Save state, query parallelizer, Restore state, execute optimized fragment, execute fragment, gather execution & debug information.

Overall JIT optimization overview. Data from the script flows to the preprocessor, which maintains a script in a shell with a JIT Engine and a Compiler.
![[Screenshot 2026-04-05 at 9.15.55 AM.png]]
The compiler is now a long-running and stateful compilation server. 

###### Preprocessor

Replace potentially parallelizable regions in scripts with calls to the JIT. 
- Stores original regions for the JIT engine to access.

##### RDDs & Spark

Allows specification of MapReduce operations over collections. 
```
// "sc" is a "Spark context" – this transforms the file into an RDD
val textFile = sc.textFile("README.md")
// Word count – traditional map-reduce. collect() is an action
val wordCounts = textFile
.flatMap(line => line.split(" "))
.map(word => (word, 1))
.reduceByKey((a, b) => a + b)
wordCounts.collect()
```

#### Resilient Distributed Datasets
- Immutable partitioned collections of objects, which may be cached in memory. 
- Includes the following operations: Transformations, Actions
- Lazy evaluation: Nothing computed until an action requires it, then calculations are forced and values are returned.

Best suited for programs that apply the same op to all elements in a dataset. Less suitable for ones that make asynchronous fine-grained updates to shared state. 
