authzero
========

Auth0 Command Line Interface

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/authzero.svg)](https://npmjs.org/package/authzero)
[![CircleCI](https://circleci.com/gh/dmark/authzero/tree/master.svg?style=shield)](https://circleci.com/gh/dmark/authzero/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/authzero.svg)](https://npmjs.org/package/authzero)
[![License](https://img.shields.io/npm/l/authzero.svg)](https://github.com/dmark/authzero/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g authzero
$ authzero COMMAND
running command...
$ authzero (-v|--version|version)
authzero/0.0.0 darwin-x64 node-v11.4.0
$ authzero --help [COMMAND]
USAGE
  $ authzero COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`authzero goodbye [FILE]`](#authzero-goodbye-file)
* [`authzero hello [FILE]`](#authzero-hello-file)
* [`authzero help [COMMAND]`](#authzero-help-command)

## `authzero goodbye [FILE]`

describe the command here

```
USAGE
  $ authzero goodbye [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/goodbye.ts](https://github.com/dmark/authzero/blob/v0.0.0/src/commands/goodbye.ts)_

## `authzero hello [FILE]`

describe the command here

```
USAGE
  $ authzero hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ authzero hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/dmark/authzero/blob/v0.0.0/src/commands/hello.ts)_

## `authzero help [COMMAND]`

display help for authzero

```
USAGE
  $ authzero help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.4/src/commands/help.ts)_
<!-- commandsstop -->
