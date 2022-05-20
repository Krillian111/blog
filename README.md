### Introduction

My personal website built with gatsby.

### TODO

#### Coding

- setup infrastructure

#### Design

- syntax highlighting
- footer
- pretty title bar
- nicer font
- clean up posts

#### Posts

- CLI Tools
  - grep
  - awk
  - curl
  - tail/head
  - examples
    - ifconfig | grep -A1 docker | tail -n1 | awk '{print $2}'
    - cat /var/log/auth.log | grep keyring | tail -n10
- Developers toolbox
  - testing basic
  - TDD
  - event loop (JS)
  - file descriptor/stdin/stdout/stderr
  - docker
- Tool spotlight
  - ngrok
  - mockoon
  - hstr
  - volta
  - tilix
  - albert

#### Resources to read/check out

- Architecture
  - https://nabrdalik.dev/talks/
  - https://blog.starburst.io/data-mesh-the-answer-to-the-data-warehouse-hypocrisy
  - [Event Sourcing You are doing it wrong by David Schmitz](https://www.youtube.com/watch?v=GzrZworHpIk)
  - Moldable development: https://www.youtube.com/watch?app=desktop&v=Pot9GnHFOVU&feature=youtu.be
- DevOps
  - videos? https://www.youtube.com/c/thetips4you/videos?app=desktop
  - Kodekloud: https://kodekloud.com/
  - Best Practices about keeping credentials safe in a CI/CD environment, e.g. to protect yourself against supply chain attacks as a hijacked package would have access to environment variables. So even if you use secrets etc. you are not protected against this attack vector.

#### Tools to test
- TODO management
  - vimwiki
  - taskwarrior

#### Potential books to read

- From [Jakub Nabrdalik](https://jakubn.gitlab.io/wish-i-knew-architecture/#66)
  - Software Architecture for Developers - Simon Brown
  - Fundamentals of Software Architecture: An Engineering Apporach - Mark Richards, Neal Ford
  - Software Architecture: The Hard Parts: Modern Trade-Off Analyses for Distributed Architectures - Neal Ford, Mark Richards, Pramod Sadalage, Zhamak Dehghani
  - Designing Event-Driven Systems - Ben Stopford
  - Reactive Design Patterns - Roland Kuhn Dr.
  - Team Topologies - Matthew Skelton, Manuel Pais
  - Domain-Driven Design: Tackling Complexity in the Heart of Software - Eric Evans

#### Software to check out when building my stuff

- [Hoppscotch](https://hoppscotch.io/) as Postman alternative?
- [SuperTokens](https://supertokens.com/) for authentication?


