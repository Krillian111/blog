---
slug: "/resources/languages"
type: "resource"
title: "Programming languages"
tags: ["programming"]
---

# Programming languages

## Node / JavaScript / TypeScript

- [Best Practices](https://github.com/goldbergyoni/nodebestpractices)
  - Good overview of best practices with links to longer articles and the reasoning behind each recommendation.
- [Don't block the Event Loop (or the Worker Pool)](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)
  - Very insightful guide from the official Node.js documentation about how you should tackle different types of work in Node. It covers the basic philosophy of Node when it comes to I/O and expensive computational tasks.
  - Good overview of "dangerous" APIs in Node
  - Article was written as of Node v9, i.e. it does not address the API changes since then, e.g. the [Worker Threads API](https://nodejs.org/api/worker_threads.html)
- [Node's Event Loop From the Inside Out by Sam Roberts, IBM](https://youtu.be/P9csgxBgaZ8)
  - Really nice summary of how the event loop is implemented internally without becoming to overwhelming or confusing.
- [Everything You Need to Know About Node.js Event Loop - Bert Belder, IBM](https://youtu.be/PNa9OMajw9w)
  - A little bit scrappy but still very helpful to understand the event loop internals. It is mostly useful to get rid of some misconceptions about the internal scheduling in the event loop.
  - I recommend trying to read other more introductory sources for the event loop beforehand, otherwise this is not going to help much.

## Golang

- [Issues with Golang](https://fasterthanli.me/articles/lies-we-tell-ourselves-to-keep-using-golang)
  - I don't agree or disagree with the author but I found it and interesting read about what people think about when weighing pros and cons of a language
