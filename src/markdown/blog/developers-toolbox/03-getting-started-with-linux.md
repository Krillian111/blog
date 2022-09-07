---
slug: "/blog/developers-toolbox/getting-started-with-linux"
date: "2022-09-07"
type: "blogpost"
title: "DT 3: Getting started with Linux"
tags: ["developers-toolbox", "linux", "cli"]
---

# Developer's Toolbox 3 - Getting started with linux

## Preface

Switching to working on Linux (from Windows to Ubuntu - okay Mr Arch, go ahead and sigh if you must :p) and avoiding GUI tools as best as I can was one of the best decisions I've ever made as a young professional. I want to share my experiences and also try to compile a list of things I consider essential when starting out. It's probably going to be multiple posts, even though they most likely will not appear back to back.

I am by no means an expert but I got far enough to be able to do my job properly without just blindly copying stuff from StackOverflow, e.g. write build and deployment scripts, scan log files with a lot of lines, configure cron jobs, find that zombie app that is still using port 8000 etc.

## Introduction

I didn't get much exposure to linux during college and also worked a while at a company / team which was using Windows and a very GUI-based development process which was maintained by the senior engineers. This lead to a lot of things being kind of "black magic" to me when working as a Junior. I never liked that feeling but once I noticed it actually held me back understanding more complex topics, I did a hard reset, installed Ubuntu (good to get started IMO) on my private laptop and also started using it at work.

Whenever I got stuck somewhere, I took the time to read up on it and learned many valuable lessons. The first one was that GUIs are nice as long as everything is on the "happy path" but once something goes wrong, the terminal (or more precisely the shell) is the only tool that can reliably help you out. A lot of technical tools don't have a GUI and once you run software on a server or in the almighty cloud, you will need to understand the nuances, otherwise not returning a proper exit code in your deployment script can send you down debugging rabbit hole for hours if not days.

But first things first, lets start with some basic day-to-day stuff and talk about the concepts they expose you as a fresh linux user. Note that most of these concepts also exist in other operating systems, it's just easier to ignore that they exist.

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
