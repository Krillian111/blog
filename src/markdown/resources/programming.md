---
slug: "/resources/programming"
type: "resource"
title: "Programming concepts"
tags: ["programming"]
---

# Programming concepts

## Beginner

- [Clean Code](https://books.google.com/books/about/Clean_Code.html?id=hjEFCAAAQBAJ&source=kp_book_description)
  - Important basics about programming and TDD
- [Clean Coder](https://books.google.com/books/about/The_Clean_Coder.html?id=VQlvAQAAQBAJ&source=kp_book_description)
  - Important basics on how to behave as a software engineer on the job

## Databases

- [7 Database Paradigms](https://www.youtube.com/watch?v=W2Z7fbCLSTw&feature=youtu.be)
  - Short overview over database paradigms and their use cases

## Containers

- [Cracking the Docker CLI](https://iximiuz.com/en/posts/containers-101-container-mgmt-commands/)
  - Overview of docker CLI and how the different commands relate to each other.
  - For this article it is good to have run into some of the pitfalls of docker before. This way you can go back mentally and understand why certain things happened the way they did.
- [Containers vs Pods](https://iximiuz.com/en/posts/containers-vs-pods/)
  - At the time of reading I was trying to get a better understanding of kubernetes, given that I have a decent enough grasp on docker/containers to get around at work without big issues. It was very enlightening to read this is as a start.
- [Journey From Containerization To Orchestration And Beyond](https://iximiuz.com/en/posts/journey-from-containerization-to-orchestration-and-beyond/#container-runtimes)
  - Very interesting article about the different puzzle pieces that make up a container orchestration tools. Starting at the very bottom with `runc` using basic linux building blocks to create containers, over container management via `containerd` or `cri-o` up to the more known players like `docker`/`dockerd` and `kubelet`.
  - It touches on what a runtime shim is and why it is necessary.
  - It gives a nice historical overview of the different projects in the container ecosystem.

## Linux basics

- [Collection of helpful bash commands](https://github.com/onceupon/Bash-Oneliner)
  - It can be helpful to skim this once to become aware of certain commands or techniques.
  - Obviously not an exhaustive list and slightly skewed towards data processing.
- [The TTY demystified](https://www.linusakesson.net/programming/tty/index.php)
  - Diving deeper into the details of the TTY, shells and how everything ties together with process states and signals.
- Process management basics
  - `man bash` "JOB CONTROL" which also contains documentation of `fg`, `bg`, `jobs`, `disown`
  - [Simplified guide](https://www.webservertalk.com/disown)


