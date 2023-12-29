# example-plugin-js

example oclif plugin in javascript

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Build Status](https://github.com/montalvomiguelo/example-plugin-js/workflows/CI/badge.svg)](https://github.com/montalvomiguelo/example-plugin-js/actions)
[![License](https://img.shields.io/npm/l/@oclif/example-plugin-js.svg)](https://github.com/oclif/example-plugin-js/blob/master/package.json)

<!-- toc -->

- [example-plugin-js](#example-plugin-js)
- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g example-plugin-js
$ oex COMMAND
running command...
$ oex (--version)
example-plugin-js/2.0.1 darwin-arm64 node-v18.16.1
$ oex --help [COMMAND]
USAGE
  $ oex COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`oex hello PERSON`](#oex-hello-person)
- [`oex help [COMMANDS]`](#oex-help-commands)

## `oex hello PERSON`

Say hello

```
USAGE
  $ oex hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.js)
```

_See code: [src/commands/hello.js](https://github.com/montalvomiguelo/example-plugin-js/blob/v2.0.1/src/commands/hello.js)_

## `oex help [COMMANDS]`

Display help for oex.

```
USAGE
  $ oex help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for oex.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.18/src/commands/help.ts)_

<!-- commandsstop -->
