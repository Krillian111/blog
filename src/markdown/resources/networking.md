---
slug: "/resources/networking"
type: "resource"
title: "Networking concepts"
tags: ["network"]
---

# Networking concepts

## General

- [Computerphile - How WiFi Works](https://youtu.be/vvKbMueRzrI)
  - Short and insightful video about performance degradation for WiFis due to distance
  - Also includes a very interesting not about how hosting a hotspot with your phone can potentially kill a public WiFi's performance.
- [TCP source & destination port number](https://www.firewall.cx/networking-topics/protocols/tcp/133-tcp-source-destination-ports.html)
  - Short article explaining how TCP connection are routed on an OS/process level.
  - I found this article when reading [this very enlightening StackOverflow post](https://stackoverflow.com/questions/152457/what-is-the-difference-between-a-port-and-a-socket/152863#152863) trying to go in-depth answering the question "What is the difference between a port and a socket?"

## Practical guides

- [Difference between HTTP/1.1 and HTTP/2](https://www.digitalocean.com/community/tutorials/http-1-1-vs-http-2-what-s-the-difference)
  - Nice summary of the major difference between the two protocol versions and what limitations HTTP/1.1 has by design.
  - It also makes it clear that HTTP/2 most likely requires a bit more tinkering to get full use out of it.
- [Beej's Guide to Network Programming](https://beej.us/guide/bgnet/html/#client-server-background)
  - Unix network programming basics
  - I don't know any C but I could still take away a lot by just reading it. It gives you a basic understanding what higher level languages do in order to come up with the convenience APIs they provide you with. You don't have to read all of it. Later in the guide it goes into quite some details w.r.t the APIs which I personally skipped.
