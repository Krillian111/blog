---
slug: "/blog/resources/architecture"
date: "2022-03-24"
type: "blogpost"
title: "Learning about architecture"
tags: ["architecture"]
---

# Learning about architecture

## General

- [Twelve Factor App](https://12factor.net/)
  - Concise summary of important basics for web application development
- Jakub Nabrdalik - What I wish I knew when I started designing systems years ago
  - [Talk on YouTube](https://www.youtube.com/watch?v=1HJJhGHC2A4&feature=youtu.be)
  - [Slides](https://jakubn.gitlab.io/wish-i-knew-architecture/#1)
- Simon Brown - Software Architecture for Developers
  - [Ebook](https://leanpub.com/software-architecture-for-developers)
  - Very insightful book about getting started with software architecture. The author kept it concise and informative.

## Event-based architectures

- [Andy Bryant - Processing guarantees in Kafka](https://medium.com/@andy.bryant/processing-guarantees-in-kafka-12dd2e30be0e)
- [Designing Event Driven Systems](http://www.benstopford.com/2018/04/27/book-designing-event-driven-systems/)
  - Theoretical book about Kafka
  - Challenges often encountered when designing event-driven systems and patterns to address them
- [The Log: What every software engineer should know about real-time data's unifying abstraction](https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying)
  - Nice theoretical basis for Kafka
  - Shows how the log as a data structure is embedded in almost all database solutions (one way or another)

## Interesting thoughts

- [Crash-only software: More than meets the eyeCrash-only software](https://lwn.net/Articles/191059/)
  - Interesting article about the difference between software being able to shutdown gracefully and able to handle crashes and why it might makes sense to replace the former with the latter.
  - It also points out where a lot of people misunderstand the concept of crash-only software which leads to a misconceptions regarding this concept.
