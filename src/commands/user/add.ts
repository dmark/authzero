import {Command, flags} from '@oclif/command'

import {connectToAuth0} from '../../authzero-helpers'

let fs = require('fs');

export default class User extends Command {
  static description = 'Create a new user.'

  static flags = {
    help: flags.help({char: 'h'}),
    profile: flags.string({char: 'f', description: 'profile for the new user in JSON format'})
  }

  async run() {
    const {flags} = this.parse(User)

    const auth0 = connectToAuth0()

    if (flags.profile) {
      fs.readFile(flags.profile)
      auth0.createUser(flags.profile, function (err: any, user: any) {
        if (err) {
          // do a thing
        }
        console.log(user)
      })
    }
  }
}
