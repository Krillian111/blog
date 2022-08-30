---
slug: "/projects/tiny-chat"
type: "project"
title: "tiny-chat (2022)"
tags: ["asymmetric-crypto", "websocket", "fastify"]
---

# tiny-chat

Inspired by [tinyprojects.dev](https://tinyprojects.dev/) I wanted to build a very simplified server-client chat. The goal is not to monetize anything but use the project to explore certain technical concepts and practice prototyping.

- [Repository on Github](https://github.com/Krillian111/tiny-chat)

## What I am exploring & lessons learned

### General

- crypto APIs (for asymmetric signatures of messages), e.g. [Node crypto](https://nodejs.org/api/crypto.html) and [SubtleCrypto Web API (Browser)](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto)
  - steep learning curve which is not surprising given the topic
  - some inconsistent terminology across libraries, e.g. algorithm names
  - it is very easy to mess up encoding and serialization => good tests are their weight worth in gold
- [`mermaid`](https://mermaid-js.github.io/mermaid/#/) for graphs in the initial planning phase
  - (+) the syntax is easy to learn
  - (-) as there is no real IDE support for renaming / rearranging, it is not ideal for a fast-changing environment, i.e. when prototyping

### Backend

- [`fastify`](https://www.fastify.io/) as a webserver
  - (+) built-in logging, schema-based validation, websocket support
  - (+) plugin system enables nicely modularized code
  - (?) the built-in test functionality with `fastify.inject` looks like an interesting middle ground between unit tests and tests with a running server. It feels like I am duplicating my integration tests without getting the assurance of having tested actually calling my API, so I skipped it for now.
    (-) fastify's websocket integration only seems to support the native `message` event and not custom events like the underlying `ws` library does
- only write integration tests (skip unit tests) to see whether this is a decent compromise for prototyping
  - (+) makes it very easy to shift around things
  - (-) finding reason for a single test failing can be a bit more tedious
- design the chat API via messages within the websocket connection
  - (-) feels pretty hacky as I am implementing some of the nuts and bolts (serialization, validation) more manually than I would for REST.
  - (-) cannot leverage input/schema validation of `fastify`
- delay persistence layer implementation as long as possible
  - (+) allows for collecting all the requirements before assessing what's the best fit

### Frontend (Browser/React)

- Try to work without state library for simplicity
  - Use class to keep websocket-related state
  - subscribe root component to changes and persist them via `useState`
  - drill down states to child components
  - (-) obviously inefficient as a lot of unnecessary rerenders are triggered; could be improved by memoization of different components
  - (+) minimize dependencies, can be sufficient for prototyping
