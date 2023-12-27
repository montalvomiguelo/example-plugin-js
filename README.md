@oclif/example-plugin-js
========================

example dxcli plugin in javascript

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@oclif/example-plugin-js.svg)](https://npmjs.org/package/@oclif/example-plugin-js)
[![CircleCI](https://circleci.com/gh/oclif/example-plugin-js/tree/master.svg?style=shield)](https://circleci.com/gh/oclif/example-plugin-js/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/oclif/example-plugin-js?branch=master&svg=true)](https://ci.appveyor.com/project/oclif/example-plugin-js/branch/master)
[![Downloads/week](https://img.shields.io/npm/dw/@oclif/example-plugin-js.svg)](https://npmjs.org/package/@oclif/example-plugin-js)
[![License](https://img.shields.io/npm/l/@oclif/example-plugin-js.svg)](https://github.com/oclif/example-plugin-js/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @oclif/example-plugin-js
$ oclif-example COMMAND
running command...
$ oclif-example (--version)
@oclif/example-plugin-js/1.10.6 darwin-arm64 node-v18.16.1
$ oclif-example --help [COMMAND]
USAGE
  $ oclif-example COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclif-example hello PERSON`](#oclif-example-hello-person)

## `oclif-example hello PERSON`

Say hello

```
USAGE
  $ oclif-example hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello.js](https://github.com/oclif/example-plugin-js/blob/v1.10.6/src/commands/hello.js)_
<!-- commandsstop -->
