# authzero

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/authzero.svg)](https://npmjs.org/package/authzero)
[![CircleCI](https://circleci.com/gh/dmark/authzero/tree/master.svg?style=shield)](https://circleci.com/gh/dmark/authzero/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/authzero.svg)](https://npmjs.org/package/authzero)
[![License](https://img.shields.io/npm/l/authzero.svg)](https://github.com/dmark/authzero/blob/master/package.json)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

A command line interface to the [Auth0](https://github.com/auth0) [Management
API](https://auth0.com/docs/api/management/v2), using [node.js](https://nodejs.org/en/), [oclif](https://oclif.io/), and
[TypeScript](https://www.typescriptlang.org/index.html). Currently covers only
a small portion of the read-only capabilities of the Management API.

The code is likely garbage (I am not a software engineer and node / typescript
/ javascript is all new to me) but it works. The project could use an overhaul
by someone who knows idiomatic nodejs and typescript. Once the code is cleaned
up a bit, maybe we'll push it to NPM.

*WARNING*: This utility relies on the [Client Credentials exchange](https://auth0.com/docs/api-auth/tutorials/adoption/client-credentials) grant type to access your tenant's Management API. As such,
it has access to whatever scopes you have assigned to the application in Auth0.
If you have assigned scopes that allow making changes to your tenant, you can
do some real damage with this utility (once we start adding change / update /
patch features that is). YOU CAN BREAK ALL THE THINGS. Always check your `.env`
file before working with the utility and always exercise extreme caution when
working with a production tenant.

## Setup

TODO: This section needs more detail.

Install node.js, oclif, typescript, and the node-auth0 library.

Create a [Machine-to-Machine](https://auth0.com/docs/applications/machine-to-machine) application in Auth0. Give
your M2M application access to the Management API and assign approriate scopes (mostly read:* at the moment).

Possibly useful: [Using Machine to Machine (M2M) Authorization](https://auth0.com/blog/using-m2m-authorization/)

Clone the repo.

Create a `.env` file in root directory of the repo. You can use env.txt as a template.

---
To update the documentation below:

    npx oclif-dev readme

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
## Usage
<!-- usage -->
```sh-session
$ npm install -g authzero
$ authzero COMMAND
running command...
$ authzero (-v|--version|version)
authzero/0.0.0 darwin-x64 node-v11.6.0
$ authzero --help [COMMAND]
USAGE
  $ authzero COMMAND
...
```
<!-- usagestop -->
## Commands
<!-- commands -->
* [`authzero client:get`](#authzero-clientget)
* [`authzero connection:get`](#authzero-connectionget)
* [`authzero help [COMMAND]`](#authzero-help-command)
* [`authzero rule:get`](#authzero-ruleget)
* [`authzero tenant:get`](#authzero-tenantget)
* [`authzero user:add`](#authzero-useradd)
* [`authzero user:get`](#authzero-userget)

### `authzero client:get`

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

## `authzero user:add`

Create a new user.

```
USAGE
  $ authzero user:add

OPTIONS
  -f, --profile=profile  profile for the new user in JSON format
  -h, --help             show CLI help
```

_See code: [src/commands/user/add.ts](https://github.com/dmark/authzero/blob/v0.0.0/src/commands/user/add.ts)_

## `authzero user:get`

Get profile for specificed user.

```
USAGE
  $ authzero user:get

OPTIONS
  -e, --email=email        email address of user
  -h, --help               show CLI help
  -i, --user_id=user_id    user_id of user
  -u, --username=username  username of user
```

_See code: [src/commands/user/get.ts](https://github.com/dmark/authzero/blob/v0.0.0/src/commands/user/get.ts)_
<!-- commandsstop -->
