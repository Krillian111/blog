---
slug: "/blog/developers-toolbox/handling-collections"
date: "2021-03-06"
type: "blogpost"
title: "DT 1: Handling collections"
tags: ["functional-programming", "developers-toolbox"]
---

# Developers Toolbox 1 - Handling collections

## Introduction

When I started out as a developer I dismissed functional concepts as overly theoretic and impractical. After all every toaster was running Java 7 or older, right? As I didn't study computer science, my first real contact with it was when my company at the time adopted Java 8 which introduced lambda expressions. Those sneaky arrow functions confused the hell out of me, and it took me quite a while to see the value in these concepts which obviously were adopted by other languages a long time ago.

My goal is to shine some light on very practical applications of these functional concepts to help you with your everyday imperative code that you can use today. Baby steps. No Haskell, no ten page explanations what monads are. I'll use JavaScript for the examples but this can be transferred to any language that provides the basic functionality of `map/reduce/filter` which is almost all of them by now.
We will start out with how to handle standard operations on collections which is something we all need to do every day.

## Extracting a subset of elements aka `filter` (n &rarr; m)

In order to extract a subset of elements from a collection, the imperative algorithm is straightforward. We initialize a result collection which we will put all the desired elements in. We iterate over the collection, check the condition and add to the target collection if the condition is satisfied.

```javascript
// imperative index based
const blogposts = [];
for (let i = 0; i < pages.length; i++) {
  if (pages[i].type === "blogpost") {
    blogposts.push(pages[i]);
  }
}

// imperative iterator based
const blogposts = [];
for (let page of pages) {
  if (page.type === "blogpost") {
    blogposts.push(page);
  }
}
```

Does this algorithm change, if the data we iterate over, looks any different? Not really except for the conditional expression in the if statement and variable names. The functional approach takes this observation and creates a specialized function to do exactly this. Remove the boilerplate on how to iterate over a collection and only specify the condition in the form of a lambda expression / anonymous function. Nobody needs to demonstrate that they know how to iterate over an array.

```javascript
// functional
const blogposts = pages.filter((page) => page.type === "blogpost");
```

## Computing something new from each element aka `map` (n &rarr; n)

If we want to compute something for each element of the collection, we again know how to do it. We iterate over the collection, and add the computed result of each element to some target collection.

```javascript
// imperative index based
const titles = [];
for (let i = 0; i < pages.length; i++) {
  titles.push(pages[i].title);
}

// imperative iterator based
const titles = [];
for (let page of pages) {
  titles.push(page.title);
}
```

Again if we wanted to compute something else, all we would change is the lines in the for loop, the rest would stay the same. Thus the functional equivalent focuses on exactly that, specifying how to compute the result from each element.

```javascript
// functional
const titles = pages.map((page) => page.title);
```

## Computing a single value from all values of a collection aka `reduce` (n &rarr; 1)

The third common task regarding collections is condensing all elements into a single value, e.g. summing up a list of integers or converting a collection into a map. The algorithm here is only slightly different, initialize something to accumulate the result and do the accumulation in the for loop for each element.

```javascript
// imperative index based
const mapTitleToSummary = {};
for (let i = 0; i < pages.length; i++) {
  mapTitleToSummary[pages[i].title] = pages[i].summary;
}

// imperative iterator based
const titles = [];
for (let page of pages) {
  mapTitleToSummary[page.title] = page.summary;
}
```

The functional equivalent is the one that beginners from my experience struggle the most with in the beginning. So let's unpack it. The so-called `reduce` (or `fold`) takes the above and generalizes it by saying: We compute a new result based on the current element and the intermediate result so far (aka accumulator). In order to kickstart this, we need to provide the 'initial' intermediate result to have something as input for the first operation. The typical example for reduce is summing up integers but I feel like that makes it so trivial that it hides the genius idea behind it. There is nothing preventing us using a more complex intermediate result like an object.

```javascript
// similar to above but less functional due to mutation of inputs (which some languages even forbid)
const mapTitleToSummary = pages.reduce(
  (intermediateResult, page) => {
    intermediateResult[page.title] = page.summary;
    return intermediateResult;
  },
  {} /* this is the initial intermediate result */
);

// the cleaner functional way because we do not mutate the input of our function
const mapTitleToSummary = pages.reduce(
  (intermediateResult, page) => {
    return {
      ...intermediateResult,
      [page.title]: page.summary,
    };
  },
  {} /* this is the initial intermediate result */
);
```

### Why is reduce so complicated?

If this is harder to understand than the previous ones, don't worry. There is a reason for that because reduce is more complex than `map` and `filter` due to the simple fact that both of these can be expressed as a reduce:

```javascript
// filter as reduce
const blogposts = pages.reduce((accumulator, page) => {
  if (page.type === "blogpost") {
    return [...accumulator, page];
  }
  return accumulator;
}, []);

// map as reduce
const titles = pages.reduce(
  (accumulator, page) => [...accumulator, page.title],
  []
);
```

You might ask why we started with `filter` and `map`. Why not use `reduce` for everything? It is the same reason why we started using these functions in the first place. By using different functions for fundamentally different operations, we give the reader of our code options.
If one reads something like

```javascript
const menu = pages.filter(/*...*/).map(/*...*/);
```

it is easy to get an idea about how the menu is computed even though we haven't read the entire code. Thus we allow the reader to skip part of our code while still providing a rough idea of what's going on.
In addition, the reader can also make some assumptions, e.g. `filter` does not change the type and `map` does not change the length. On the other hand, `reduce` is the for loop of functional programming. You can do anything with it, thus no assumptions can be made and therefore the reader has to stop skimming and actually read what's going on inside. I therefore recommend using it as sparingly as possible.

## Some advantages

### Chaining

In order to achieve more complex tasks, we can mix and match these functions by piping the result of each operation into the next:

```javascript
const result = data.map(/*...*/).filter(/*...*/).map(/*...*/).reduce(/*...*/);
```

While we can still express complex algorithms, we force ourselves to make one logical step at a time. This makes it easy to follow once you got the hang of the semantics of the different functions.

### A common language

By having specialized functions for specific tasks on collections, we get a clear and concise language when talking to other people about our code. A common understanding of technical terms is incredibly helpful in the long run.
It also allows us to talk at a higher abstraction level about code. The same way that object-oriented design patterns do.

### Immutability by design

A lot of unnecessary mistakes in programming happen due to mutability. It is easy to forget that some value might be still `null` or pass a reference to a data structure that should actually not be changed. In the past, the allocation of unnecessary memory which needs to be garbage collected, was a strong argument why mutability was still a good idea. However, languages have evolved and garbage collection has gotten way better. In my opinion, it is pretty optimistic to think that you are better at cleaning up memory than an algorithm derived by experts in the field.

### Naming

There is common saying that the two hardest things in programming are cache invalidation and naming things. One of the perks of chaining is that you can avoid giving awkward names to intermediate results. If something is hard to name, sometimes one might be better off skipping it altogether instead of forcing it.

### There is more

The functions `map, filter, reduce` are the first step into functional programming. There are more specialized functions for less common operations but once you have the hang of the first three, transitioning to those should be pretty easy.

## Disadvantages

### Computational efficiency varies

How efficient these functions are, e.g. in comparison to traditional loops, highly depends on the language and runtime and how the execution is optimized. In JavaScript/V8, a chained `map` + `filter` will lead to multiple iterations over the collection which could be avoided by replacing both steps with a single loop. However, this is a relatively shallow analysis of the problem.

The issue is that this has primarily to do with the fact that folding these two steps is generally not equivalent due to side effects. If a log is written in both the `map` and `filter` step, folding them together will lead to the logs being written in a different order.
There are different ways to deal with these potential inefficiencies.

As an example, the Java 8 Stream API has a higher focus on performance and supports parallelization with a simple flag which can make using this paradigm even more efficient than traditional loops (assuming we do not spend the overhead of manually coding the parallelization). This comes at the cost of a slightly more complex API (read up on [intermediate and terminal operations in the Java Docs](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html)) and restrictions w.r.t. what can be done in the callbacks to stay thread-safe.

Another way to deal with this can be observed in purely functional languages like Haskell. Due to the lack of side effects, [folding certain function calls into one can be proven to be equivalent](https://wiki.haskell.org/Short_cut_fusion), thus the compiler does it out of the box.
In JavaScript a way to deal with these problems can be to dig a little deeper into the functional toolbox and use concepts like [transducers](https://medium.com/javascript-scene/transducers-efficient-data-processing-pipelines-in-javascript-7985330fe73d).

## Summary

We saw how we can use `map, filter, reduce` to perform standard tasks on collections. I encourage you to try it out and form your own opinion. Almost all major languages implement this either in their standard library or in some utility library.
