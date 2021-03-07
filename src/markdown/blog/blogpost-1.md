---
slug: "/blog/handling-collections"
date: "2021-03-06"
type: "blogpost"
title: "Handling collections"
---

# Programmers Toolbox - Part 1
## Handling collections 
### Introduction

When I started out as a programmer I dismissed functional concepts as overly theoretic and impractical. After all every toaster was running Java 7 or older, right? As I didn't study computer science, my first contact with it was when my company at the time adopted Java 8 which introduced lambda expressions. Those sneaky arrow functions confused the hell out of me and it took me a few years to see the value in these concepts which obviously were adopted by other languages a long time ago.
Now I am a big proponent of the expressiveness and clarity a lot of functional constructs bring. However, I still have a hard time getting new colleagues excited. They tend to err on the side of caution and ask the obvious questions: Why learn something new that I can solve with a for loop? Why wrap everything in some arcane `Optional` that is nothing else than a glorified nullable type?
My goal is to shine some light on very practical applications of these functional concepts to help you with your everyday imperative code that you can use today. Baby steps. No Haskell, no ten page explanations what monads are. I'll use JavaScript for the examples but this can be transferred to any language that provides the basic functionality of map/reduce/filter which is almost all of them by now.
We will start out with how to handle standard operations on collections which is something we all need to do every day.

### The basic tasks
Imagine you are supposed to compute the menu for my website. I write this content in a markdown file and add some metadata like the type (blogpost or general page),  The content of this website is stored in some CMS, so the editors write the text and add some metadata tags to give it a category which determines

#### Extracting a subset of elements aka `filter`
In order to extract a subset of elements from a collection, the imperative algorithm is straightforward. We initialize a result collection which we will put all the desired elements in. We iterate over the collection, check the condition and add to the target collection if the condition is satisfied.
```javascript
// imperative index based
const blogposts = []
for (let i=0; i<pages.length; i++) {
	if(pages[i].type === 'blogpost') {
	  blogposts.push(pages[i])
    }
}

// imperative iterator based
const blogposts = []
for (let page of pages) {
  if(page.type === 'blogpost') {
    blogposts.push(page)
  }
}
```
Does this algorithm change, if the data we iterate over, looks any different? Not really except for the conditional expression in the if statement and variable names. The functional approach takes this observation and creates a specialized function to do exactly this. Remove the boilerplate on how to iterate over a collection and only specify the condition in the form of a lambda expression / anonymous function. Nobody needs to demonstrate that they can stop at the right index.
```javascript
// functional
const blogposts = pages.filter(page => page.type === 'blogpost')
```

#### Computing something new from each element aka `map`
If we want to compute something for each element of the collection, we again know how to do it. We iterate over the collection, and add the computed result of each element to some target collection.

```javascript
// imperative index based
const titles = []
for (let i=0; i<pages.length; i++) {
  titles.push(pages[i].title)
}

// imperative iterator based
const titles = []
for (let page of pages) {
  titles.push(pages[i].title)
}
```
Again if we wanted to compute something else, all we would change is the lines in the for loop, the rest would stay the same. Thus the functional equivalent focuses on exactly that, specifying how to compute the result from each element.
```javascript
// functional
const titles = pages.map(page => page.title)
```

### Computing a single value from all values of a collection aka `reduce`
The third common task regarding collections is condensing all elements into a single value, e.g. summing up a list of integers or converting a collection into a map. The algorithm here is only slightly different, initialize something to accumulate the result and do the accumulation in the for loop for each element.
```javascript
// imperative index based
const mapTitleToSummary = {}
for (let i=0; i<pages.length; i++) {
  mapTitleToSummary[pages[i].title]=pages[i].summary
}

// imperative iterator based
const titles = []
for (let page of pages) {
  mapTitleToSummary[pages[i].title]=pages[i].summary
}
```
The functional equivalent is the one that beginners struggle the most with in the beginning (from my experience). So let's unpack it. The so-called `reduce` (or `fold`) takes the above and generalizes it by saying: We need an operation so that we can merge the current state of the "intermediate result" (aka accumulator) and the current element of the collection. In addition, to kickstart the whole process, we need a "merging buddy" for our first element.
```javascript
// similar to above but less functional due to mutation of inputs (which some languages even forbid)
const mapTitleToSummary = pages.reduce((intermediateResult, page) => {
    intermediateResult[page.title] = page.summary
    return intermediateResult; 
  }
  , {}/* this is the merging buddy*/)
// the cleaner functional way because we do not mutate the input of our function
const mapTitleToSummary = pages.reduce((intermediateResult, page) => {
    return {
      ...intermediateResult,
      [page.title]: page.summary,
    }
  }, {}/* this is the merging buddy*/)
```

### Handling more complex tasks
Okay, sure, this is all nice but the things I have to do at work are way more complicated. I usually have to iterate over multiple collections and combine things and rub my magic 8 ball. Are you going to show me 16 more functions that do all of that and I have to learn all of them by heart? That seems highly unpractical.
Fair point. If it was to go on like that I would agree. The cool part is, however, that these three functions can be combined and by doing so, almost almost always enough to express 