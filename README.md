authzero
========

A command line interface to the @Auth0 Management API. Currently covers only a small portion of the Management API, and read-only capabilities at the moment. The code is likely garbage (I am not a software engineer) but it works and I am actively working on improving my javascript / typescript / node skills.

*WARNING*: This utility relies on the Client Credentials grant type. As such, it has access to whatever scopes you have assigned in Auth0. If you have assigned scopes that allow making changes to anything in your tenant, you can do some real damage with this utility (once change / update / patch features are added). Always check your `.env` file before working with the utility.

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
* [`authzero connection:get`](#authzero-connectionget)
* [`authzero help [COMMAND]`](#authzero-help-command)
* [`authzero rule:get`](#authzero-ruleget)
* [`authzero tenant:get`](#authzero-tenantget)
* [`authzero user:get`](#authzero-userget)

## `authzero client:get`

Get client (application) settings.

```
USAGE
  $ authzero client:get

OPTIONS
  -h, --help   show CLI help
  -i, --id=id  (required) Client ID
```

_See code: [src/commands/client/get.ts](https://github.com/dmark/authzero/blob/v0.0.0/src/commands/client/get.ts)_

## `authzero connection:get`

Get connection settings.

```
USAGE
  $ authzero connection:get

OPTIONS
  -h, --help   show CLI help
  -i, --id=id  (required) Connection ID
```

_See code: [src/commands/connection/get.ts](https://github.com/dmark/authzero/blob/v0.0.0/src/commands/connection/get.ts)_

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

## `authzero rule:get`

Get rule.

```
USAGE
  $ authzero rule:get

OPTIONS
  -h, --help   show CLI help
  -i, --id=id  (required) Rule ID
```

_See code: [src/commands/rule/get.ts](https://github.com/dmark/authzero/blob/v0.0.0/src/commands/rule/get.ts)_

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
  -h, --help   show CLI help
  -i, --id=id  (required) user_id of user
```

_See code: [src/commands/user/get.ts](https://github.com/dmark/authzero/blob/v0.0.0/src/commands/user/get.ts)_
<!-- commandsstop -->
