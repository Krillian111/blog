---
slug: "/resources/javascript"
type: "resources"
title: "JavaScript and TypeScript"
tags: ["javascript", "typescript", "node"]
---

# JavaScript and TypeScript

## Node

- [Best Practices](https://github.com/goldbergyoni/nodebestpractices)
  - Good overview of best practices with links to longer articles and the reasoning behind each recommendation.
- [Don't block the Event Loop (or the Worker Pool)](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)
  - Very insightful guide from the official Node.js documentation about how you should tackle different types of work in Node. It covers the basic philosophy of Node when it comes to I/O and expensive computational tasks.
  - Good overview of "dangerous" APIs in Node
  - Article was written as of Node v9, i.e. it does not address the API changes since then, e.g. the [Worker Threads API](https://nodejs.org/api/worker_threads.html)
