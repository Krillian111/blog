---
slug: "/blog/handling-collections"
date: "2021-03-06"
type: "blogpost"
title: "Handling collections"
---

# Programmers Toolbox - Part 1
## Handling collections 
### Introduction

When I started out as a programmer I dismissed functional concepts as overly theoretic and impractical. After all every toaster was running Java 7 or older, right? As I didn't study computer science, my first contact with it was when my company at the time adopted Java 8 which introduced lambda expressions. Those sneaky arrow functions confused the hell out of me, and it took me a quite a while to see the value in these concepts which obviously were adopted by other languages a long time ago.
Today I am a big proponent of the expressiveness and clarity a lot of functional constructs bring. However, I still have a hard time getting new colleagues excited. They tend to err on the side of caution and ask the obvious questions: Why learn something new that I can solve with a for loop? Why wrap everything in some arcane `Optional` that is nothing else than a glorified nullable type?
My goal is to shine some light on very practical applications of these functional concepts to help you with your everyday imperative code that you can use today. Baby steps. No Haskell, no ten page explanations what monads are. I'll use JavaScript for the examples but this can be transferred to any language that provides the basic functionality of map/reduce/filter which is almost all of them by now.
We will start out with how to handle standard operations on collections which is something we all need to do every day.

### The basic tasks
When you start out programming, it is sometimes hard to see that we keep repeating ourselves a lot. I mean A LOT. We often keep using the same tools because we see a problem, know the solution, are happy to get started and churning out 100 lines feels great. 
In order to improve, however, we need a second to take stock. Have we seen this problem before but in a different shape? Are there similarities? When it comes to collections, there are a few basic tasks that you will keep encountering, thus it is good to analyze them a bit more in-depth.

#### Extracting a subset of elements aka `filter`
In order to extract a subset of elements from a collection, the imperative algorithm is straightforward. We initialize a result collection which we will put all the desired elements in. We iterate over the collection, check the condition and add to the target collection if the condition is satisfied.
```javascript
// imperative index based
const blogposts = [];
for (let i=0; i<pages.length; i++) {
	if(pages[i].type === 'blogpost') {
	  blogposts.push(pages[i]);
    }
}

// imperative iterator based
const blogposts = [];
for (let page of pages) {
  if(page.type === 'blogpost') {
    blogposts.push(page);
  }
}
```
Does this algorithm change, if the data we iterate over, looks any different? Not really except for the conditional expression in the if statement and variable names. The functional approach takes this observation and creates a specialized function to do exactly this. Remove the boilerplate on how to iterate over a collection and only specify the condition in the form of a lambda expression / anonymous function. Nobody needs to demonstrate that they can stop at the right index.
```javascript
// functional
const blogposts = pages.filter(page => page.type === 'blogpost');
```

#### Computing something new from each element aka `map`
If we want to compute something for each element of the collection, we again know how to do it. We iterate over the collection, and add the computed result of each element to some target collection.

```javascript
// imperative index based
const titles = [];
for (let i=0; i<pages.length; i++) {
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
const titles = pages.map(page => page.title);
```

### Computing a single value from all values of a collection aka `reduce`
The third common task regarding collections is condensing all elements into a single value, e.g. summing up a list of integers or converting a collection into a map. The algorithm here is only slightly different, initialize something to accumulate the result and do the accumulation in the for loop for each element.
```javascript
// imperative index based
const mapTitleToSummary = {};
for (let i=0; i<pages.length; i++) {
  mapTitleToSummary[pages[i].title]=pages[i].summary;
}

// imperative iterator based
const titles = [];
for (let page of pages) {
  mapTitleToSummary[page.title]=page.summary;
}
```
The functional equivalent is the one that beginners from my experience struggle the most with in the beginning. So let's unpack it. The so-called `reduce` (or `fold`) takes the above and generalizes it by saying: We compute a new result based on the current element and the intermediate result so far (aka accumulator). In order to kickstart this, we need to provide the 'initial' intermediate result to have something as input for the first operation. The typical example for reduce is summing up integers but I feel like that makes it so trivial that it hides the genius idea behind it. There is nothing preventing us using a more complex intermediate result like an object.
```javascript
// similar to above but less functional due to mutation of inputs (which some languages even forbid)
const mapTitleToSummary = pages.reduce((intermediateResult, page) => {
    intermediateResult[page.title] = page.summary;
    return intermediateResult; 
  }
  , {}/* this is the initial intermediate result */)

// the cleaner functional way because we do not mutate the input of our function
const mapTitleToSummary = pages.reduce((intermediateResult, page) => {
    return {
      ...intermediateResult,
      [page.title]: page.summary,
    }
  }, {}/* this is the initial intermediate result */)
```

### Why is reduce so complicated?
If this is harder to understand than the previous ones, don't worry. There is a reason for that because reduce is more complex than `map` and `filter` due to the simple fact that both of these can be expressed as a reduce:
```javascript
// filter as reduce
const blogposts = pages.reduce((accumulator, page) => {
  if(page.type === 'blogpost') {
    return [...accumulator, page];
  }
  return accumulator;
},[])
  
// map as reduce
const titles = pages.reduce((accumulator, page) => [...accumulator, page.title], []);
```
You might ask why we started with `filter` and `map` then, why not use `reduce` for everything? It is the same reason why we started using these functions in the first place. By using different functions for fundamentally different operations, we give the reader of our code options.
If one reads something like 
```javascript
const menu = pages.filter(...).map(...);
```
it is easy to get an idea about how the menu is computed even though we haven't read the entire code. Thus we allow the reader to skip part of our code while still providing a rough idea of what's going on.
In addition, the reader can also make some assumptions, e.g. `filter` does not change the type of the collection and `map` does not change the length. On the other hand, `reduce` is the for loop of functional programming. You can do anything with it, thus no assumptions can be made and therefore the reader has to stop skimming and actually read what's going on inside. I therefore recommend using it as sparingly as possible.

### Handling more complex tasks
// chaining
// modelling your algorithm in a higher abstraction
// other specialized functions, like zip, find


### Summary
// try it out
// start with map, filter
// almost all major languages have one or another way to do map/reduce/filter.