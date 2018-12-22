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
authzero/0.0.0 darwin-x64 node-v11.5.0
$ authzero --help [COMMAND]
USAGE
  $ authzero COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`authzero client:get`](#authzero-clientget)
* [`authzero help [COMMAND]`](#authzero-help-command)
* [`authzero tenant:get`](#authzero-tenantget)
* [`authzero user:get`](#authzero-userget)

## `authzero client:get`

Get client (application) settings.

```
USAGE
  $ authzero client:get

OPTIONS
  -h, --help                 show CLI help
  -i, --client_id=client_id  (required) Client ID
```

_See code: [src/commands/client/get.ts](https://github.com/dmark/authzero/blob/v0.0.0/src/commands/client/get.ts)_

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

## `authzero tenant:get`

Get tenant settings.

```
USAGE
  $ authzero tenant:get

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/tenant/get.ts](https://github.com/dmark/authzero/blob/v0.0.0/src/commands/tenant/get.ts)_

## `authzero user:get`

Get profile for specificed user.

```
USAGE
  $ authzero user:get

OPTIONS
  -h, --help             show CLI help
  -i, --user_id=user_id  (required) user_id of user
```

_See code: [src/commands/user/get.ts](https://github.com/dmark/authzero/blob/v0.0.0/src/commands/user/get.ts)_
<!-- commandsstop -->
