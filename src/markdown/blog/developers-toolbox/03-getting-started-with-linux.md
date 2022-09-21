---
slug: "/blog/developers-toolbox/getting-started-with-linux"
date: "2022-09-07"
type: "blogpost"
title: "DT 3: Linux - Work with what your code runs on"
tags: ["developers-toolbox", "linux", "cli"]
---

# Developer's Toolbox 3 - Linux - Work with what your code runs on

## Preface

I fully switched from Windows to Linux (Ubuntu) a few years back. This by itself was such an eye opening experience and it helped me so much along the way because I no longer had to maintain the behavior of two different OS' in my head. If some script I hacked together worked on my machine, chances were good that it would work on the CI/CD environment and the final deployment target because most of the cloud runs on some kind of Linux distribution. This argument most likely applies the other way if you end up deploying on Windows Server.

MacOS is an interesting one in this debate. You are definitely closer to your target architecture if you deploy on Linux. You have nicer and shinier tools when compared to any Linux Distro, hardware support is probably better but you will run into discrepancies. A good example is the fact that [Docker for MacOS works fundamentally different under the hood](https://dev.to/ericnograles/why-is-docker-on-macos-so-much-worse-than-linux-flh). However, I don't have much experience with it and know enough competent developers that love it. So, to each their own.

I can also recommend to minimize the GUI tools you use. As an example, if you start out managing your local docker containers for development with a GUI instead of the CLI, you will miss a lot of nuances. If you are already well versed in Docker, you can obviously go ahead and use a GUI but then you are most likely not going to use it anyway.

A lot of new developers, especially if they didn't start out studying Computer Science, have a hard time with Linux. As I started out in the same camp, I want to share my experiences and also try to compile a list of things I consider important in the beginning. It's probably going to be multiple posts.

I am by no means an expert but I got far enough to be able to do my job properly without just blindly copying stuff from StackOverflow, e.g. write build and deployment scripts, scan log files with a lot of lines, configure cron jobs, find that zombie app that is still using port 8000 etc.

## Dive deeper when you get stuck

Whenever you get stuck somewhere, don't understand a required argument you have to provide or can't do a certain task because you used to do it with the GUI, I encourage you to take the time and dive deeper. Sometimes this leads down the rabbit hole but more often than not, it helps making sense of so much more than just the thing you were just looking at.

I will mostly just provide a list of common tasks and commands to achieve them and what kind of questions I asked myself over the years. This hopefully illustrates the mind set that I am trying to describe.

## Navigating

```bash
# absolute path of your 'present working directory'
pwd
# 'make directory'
mkdir some-directory
# 'change directory'
cd ./some-directory
# go back to where you were last
cd -
# go up one level
cd ..
# 'list' all files (including hidden files starting with a dot) in pwd with permissions and ownership
ls -al
# 'remove' / delete folder
rm -r some-directory
```

Exposes you to:

- absolute and relative paths
- file permissions
- file ownership
- the fact that a folder size does not reflect the size of its content
- there are a decent amount of hidden files in your home directory

## Creating and inspecting files

```bash
# write text to standard out (stdout)
echo 'some file content'
# write text to file
echo 'some file content' > new-file
# alternatively create file first and then append
touch new-file2
echo 'some file content' >> new-file2
# write or 'conCATenate' file content to stdout
cat new-file
# search for regex in file 'Globally search for RegEx and Print'
grep -E '\w{4} ' new-file
# combine cat and grep
cat new-file | grep 'some'
# combine ls and grep using xargs to search entire folder
ls | xargs grep 'some'
# alternatively just with grep but this means you have to memorize parameters :)
grep 'some' -r .
# pipe both stdout and standard error (stderr) to file
cat non-existing-file > log-file # log-file is empty
cat non-existing-file > log-file 2>&1 # log-file contains the error message written by cat
# Deleting files
rm new-file new-file2 log-file
```

Exposes you to:

- the general concept of stdin, stdout and stderr
- redirect operators `>`, `>>` and `2>&1`, see [GNU documentation](https://www.gnu.org/software/bash/manual/html_node/Redirections.html)
- pipe operator `|` to feed the stdout of one program to the standard in (stdin) of another
- sometimes you want to supply stdout as an argument to the next program and `xargs` allows you to do that

## Other helpful beginner stuff

```bash
# find file in current directory and subdirectories
find . -name 'package.json'

# how to exit vim discarding everything you did (assuming you didn't save by accident with :w)
vim some-file # this opens vim and now you can exit by typing <Esc>:q!<Enter>
# edit file in terminal (includes hotkeys to exit (and optionally save) ^x = Ctrl + x)
nano some-file # this is primarily meant as an alternative to vim which is usually overwhelming for beginners

# when in doubt use single quotes to delineate a string as double quotes causes variable expansion
SOME_VAR='foo' # assign foo to SOME_VAR
echo "${SOME_VAR}" # prints foo
echo '${SOME_VAR}' # prints ${SOME_VAR}

# print exit code of last program
echo $?

```

# Summary

In order to keep it manageable, I will stop here for now. I can only urge to read up on anything you don't understand, it will help you in the long run A LOT. It also always helped me to get some historical context as Computer Science as a field is incredibly young and a lot of this stuff were just decisions made by very, very talented individual which simple were solving a problem they were encountering. They didn't think they were defining standards for an industry that is disrupting almost all industries across the globe.
