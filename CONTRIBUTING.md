# Contributing to Reserved words
Thank you for contributing to Reserved words
We have some rules to contribute this project

* [Add data](#add-data)
* [Commit](#commit)
* [Issues](#issues)
* [Branch](#branch)
* [Pull Requests](#pull-requests)
* [Code Check](#code-Check)
* [Developer's Certificate of Origin 1.1](#developers-certificate-of-origin)

## How To Contribute
### add data
If you want to add data, you have to follow the rules below.
1. add data
    - ex) `/public/DB/mysql/9.0.json`
2. add version data
    - ex) add data on `/public/DB/mysql/versions.json`
### commit
- Must Follow commit Template  
(Need to set `git config --local commit.template .github/.gitmessage.txt` on your local)
- link issue at resolves, see also
- 1 commit 1 work(for history)

### branch
- we use gitflow Work Flow
- ex) `feature/(Issue Num)-(task)`
- When entering data, create a branch `data/system-version` and upload PR

### pull requests
- create pull request to develop branch after your task is done
- code can merge after get at least 1 approve after reviews

### code Check
- must check diff and commit 
    - Don't contain Personal Setting 
    - Commit only the code for the specified task
- check code conventions before commit

## Developer Certificate of Origin
Version 1.1

Copyright (C) 2004, 2006 The Linux Foundation and its contributors.
1 Letterman Drive
Suite D4700
San Francisco, CA, 94129

Everyone is permitted to copy and distribute verbatim copies of this
license document, but changing it is not allowed.

Developer's Certificate of Origin 1.1

By making a contribution to this project, I certify that:

(a) The contribution was created in whole or in part by me and I
    have the right to submit it under the open source license
    indicated in the file; or

(b) The contribution is based upon previous work that, to the best
    of my knowledge, is covered under an appropriate open source
    license and I have the right under that license to submit that
    work with modifications, whether created in whole or in part
    by me, under the same open source license (unless I am
    permitted to submit under a different license), as indicated
    in the file; or

(c) The contribution was provided directly to me by some other
    person who certified (a), (b) or (c) and I have not modified
    it.

(d) I understand and agree that this project and the contribution
    are public and that a record of the contribution (including all
    personal information I submit with it, including my sign-off) is
    maintained indefinitely and may be redistributed consistent with
    this project or the open source license(s) involved.
