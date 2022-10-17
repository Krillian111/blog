---
slug: "/resources/architecture"
type: "resource"
title: "Web application architecture"
tags: ["architecture"]
---

# Web application architecture

## General

- [Twelve Factor App](https://12factor.net/)
  - Concise summary of important basics for web application development
- Jakub Nabrdalik - What I wish I knew when I started designing systems years ago
  - [Talk on YouTube](https://www.youtube.com/watch?v=1HJJhGHC2A4&feature=youtu.be)
  - [Slides](https://jakubn.gitlab.io/wish-i-knew-architecture/#1)
- Simon Brown - Software Architecture for Developers
  - [Ebook](https://leanpub.com/software-architecture-for-developers)
  - Very insightful book about getting started with software architecture. The author kept it concise and informative.

## Protocols

- [Guiding Principles of REST](https://restfulapi.net/)
  - good summary of the basic idea behind REST
- [Tanmai Gopal on GraphQL (SE Radio E530)](https://www.se-radio.net/2022/09/episode-530-tanmai-gopal-on-graphql/)
  - great episode on GraphQL, its tradeoffs, use cases and how it relates to REST, gRPC etc.

## Event-based architectures

- [Andy Bryant - Processing guarantees in Kafka](https://medium.com/@andy.bryant/processing-guarantees-in-kafka-12dd2e30be0e)
- [Designing Event Driven Systems](http://www.benstopford.com/2018/04/27/book-designing-event-driven-systems/)
  - Theoretical book about Kafka
  - Challenges often encountered when designing event-driven systems and patterns to address them
- [The Log: What every software engineer should know about real-time data's unifying abstraction](https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying)
  - Nice theoretical basis for Kafka
  - Shows how the log as a data structure is embedded in almost all database solutions (one way or another)

## Scalability

- [Consistent Hashing](https://en.wikipedia.org/wiki/Consistent_hashing)
  - Important concept for scaling databases - divide data set into virtual shards and assign each physical shard multiple virtual shards
  - Allows adding/removing physical shards and only reassign a small subset of the data
- [How SQLite Scales Read Concurrency](https://fly.io/blog/sqlite-internals-wal/)
  - Good explanation of the technical implementation of the write-ahead log (WAL) which allows separating reads from writes, thus allowing the database (SQLite in this case) to scale horizontally.
- [CS75 (Summer 2012) Lecture 9 Scalability Harvard Web Development David Malan](https://youtu.be/-W9F__D3oY4)
  - A bit older but solid lecture on the basics of scalability in distributed systems
- [Taking Postgres serverless (Changelog E510)](https://changelog.com/podcast/510)
  - Very interesting insight on how Neon decoupled Compute from Storage to provide serverless Postgres

## Maintenance & Deployments

- [Blue/Green Deployments on AWS](https://docs.aws.amazon.com/whitepapers/latest/overview-deployment-options/bluegreen-deployments.html)
  - The attached PDF gives a good first overview of the basic idea and what to consider when doing blue/green deployments.
  - It also provides some suggestions at which level blue/green deployments can be achieved, e.g. DNS, Loadbalancer or Auto Scaling Groups. Even though they are AWS specific, the general ideas still applies in different environments.

## Interesting thoughts

- [Crash-only software: More than meets the eye](https://lwn.net/Articles/191059/)
  - Interesting article about the difference between software being able to shutdown gracefully and able to handle crashes and why it might makes sense to replace the former with the latter.
  - It also points out where a lot of people misunderstand the concept of crash-only software which leads to misconceptions regarding this concept.
