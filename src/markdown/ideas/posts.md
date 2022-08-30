---
slug: "/ideas/blogposts"
type: "idea"
title: "Blogposts"
---

# Blogposts to write

## CLI Basics

- grep
- awk
- curl
- tail/head
- Ubuntu examples
  - What is the IP of the docker host from the PoV of a container?
    - `ifconfig | grep -A1 docker | tail -n1 | awk '{print $2}'`
  - When did I log in last? Useful for time tracking
    - `cat /var/log/auth.log | grep keyring | tail -n10`

## Developers toolbox

- testing basic
- TDD
- event loop (JS)
- file descriptor/stdin/stdout/stderr
- docker

## Tool spotlight

- ngrok
- mockoon
- hstr
- volta
- tilix
- albert
- vim
  - mainly as plugin in VSCode or IntelliJ for text editing
  - beginner friendly, it is very easy to overdo it and scare people off or come across is a mindless zealot
