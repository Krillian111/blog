---
slug: "/blog/developers-toolbox/project-setup"
date: "2022-01-24"
type: "blogpost"
title: "Backend project setup - checklist"
tags: ["developers toolbox", "setup", "fullstack", "backend"]
---

# Checklist for backend project setup

## Why do we need a checklist?

When setting up a project, it is easy to miss a step or two as they are quite a few things to cover. These are language-agnostic basics that might already be built-in, need more or less configuration or can be combined. However, I haven't worked in a project long-term project where skipping any of these steps has turned out beneficial.
For short-term projects, it is often a hard call which steps are worth it and often requires a short discussion with your teammates.

Skipping any of this usually catches up with you later as the setup cost increases with the complexity of the project. It then forces you into a coversion with your PO/stakeholder why you need a day to configure a linter and fix all the problems. Depending on how the project is going, this might make them question your profesionalism.

This is understandable as it is your job to anticipate stuff like this. When you hire a contractor for a week-long project and he realizes on the fifth day that he doesn't have a tool to finish the job, you would also get angry if this extends the whole project, possibly even charging you for the extra time.

## The list

- `.gitignore`: Accidently commiting files is a pain for the reviewer and just sloppy. Update this when new artifacts are introduced by new libraries. This can also be used as an ignorefile for other commands, e.g. formatter.
- Formatter: Configure it once and forgot a about it. Check this in your build pipeline and make sure you use the same settings/parameters in your IDE. Example: prettier
- Linter: Configure it and enforce it everywhere. Configure your IDE to display visual warnings when you violate a linter rule. Especially with languages that have different syntax to solve the same task, it helps keeing the code consistent which is important as we spend more time reading than writing code. Fail on warnings or convert them to errors. A codebase littered with warnings causes everyone to ignore warnings. Keep the exceptions to an absolute minimum or add the exceptions to the linter config. Example: eslint
- Test runner: Not configuring a test runner with the first lines of code makes it easy to argue that certain lines of code don't need to be tested or lead to an initial setup which is hard to test. Moving fast in the beginning of a project to show something of to stakeholders is crucial. If we have to refactor the bootstrapping process of the application one week in just to be compatible with the test setup, this can cause lots of merge conflicts which painfully need to be resolved. Example: jest.
- Build script: A script which creates a runnable artifact, assuming the repository was freshly cloned. This is important for the build pipelin, dockerizing and to identify missing pieces in the packaging process early on. Examples: npm scripts, Makefile, bash script
- Container: A container with all necessary dependencies, potentially ready for deployment. It allows fast onboardings of new colleagues as it eleminates "runs on my machine problems". If you like features like hot reloading in your team, it can make sense to create two containers for development and production. Example: Dockerfile
- Container orchestration for local development: Wiring up the previously created container with dependency services like databases, mail server etc. This allows for quick manual tests end-to-end tests during development. This also gives a first glimpse into the production network setup. Example: docker-compose
- CI script: Enforce all the rules imposed by the different tools configured in the project, i.e. formatter, linter, compiler, container. Push the final container to a container repository to create the prerequisites for a deployment.
- Infrastructure as Code (IaC): Define your infrastructure setup with code to make the setup repeatable and documented in version control. It can be really discouraging to arrive in a new team and slowly understanding the application code to then get blind-sided by a convoluted infrastructure setup that only lives in the GUI of the cloud provider and maybe some outdated wiki page. It forces someone to sit down with you and go through all the details and history of it as it is easy to miss crucial aspects. This makes onboardings more painful than they need to be. You wouldn't have someone figure out the backend application code by curling his way through the different endpoints. Example: terraform
- CD script for app deployment: Takes the docker image and deploys it to the infrastructure of choice. Make sure to design this compatible with your IaC setup as you can only split app and infrastructure deployment if the IaC code references a "moving tag" like "latest" and not a specific version. Example: CI/CD server-dependent yaml file
- CD script for infrastructure update: Applies the IaC changes to the cloud. Example: CI/CD server-dependent yaml file
- (semi-)-automatic dependency updates: Configure a tool that runs regularly, e.g. every 1-2 weeks and creates a Pull Request to update the dependencies of your project. Make sure to include ALL dependencies, i.e. also the runtime environment, the base container, database engine etc.
