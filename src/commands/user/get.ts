import {Command, flags} from '@oclif/command'

import {connectToAuth0} from '../../auth0-helpers'

export default class User extends Command {
  static description = 'Get profile for specificed user.'

  static flags = {
    help: flags.help({char: 'h'}),
    user_id: flags.string({char: 'i', description: 'user_id of user', exclusive: ['username', 'email']}),
    username: flags.string({char: 'u', description: 'username of user', exclusive: ['user_id', 'email']}),
    email: flags.string({char: 'e', description: 'email address of user', exclusive: ['user_id', 'username']})
  }

  // what is this, what does it do, what are its associated semantics?
  async run() {
    const {flags} = this.parse(User)

    // Does this belong here? Outside run()? Outside the class?
    const auth0 = connectToAuth0()

    if (flags.user_id) {
      auth0.getUser({id: flags.user_id}, function (err: any, user: any) {
        if (err) {
          // do a thing
        }
        console.log(user)
      })
    } else if (flags.email) {
      auth0.getUsersByEmail(flags.email, function (err: any, user: any) {
        if (err) {
          // do a thing
        }
        console.log(user)
      })
    } else if (flags.username) {
      // Pagination settings.
      const params = {
        search_engine: 'v3',
        per_page: 10,
        page: 0,
        q: 'username:' + flags.username
      }

      auth0.getUsers(params, function (err: any, users: any) {
        if (err) {
          // do a thing
        }
        console.log(users)
      })

    }
  }
}
