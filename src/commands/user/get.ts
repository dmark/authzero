import {Command, flags} from '@oclif/command'

var dotenv = require('dotenv');
var ManagementClient = require('auth0').ManagementClient;

export default class User extends Command {
  static description = 'Get profile for specificed user.'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-i, --user_id=VALUE)
    user_id: flags.string({char: 'i', description: 'user_id of user'})
  }

  //static args = [{name: 'file'}]
  static args = []

  async run() {
    const {args, flags} = this.parse(User)
    const USER_ID = flags.user_id
    
    dotenv.load();

    var auth0 = new ManagementClient({
      domain: process.env.AUTH0_DOMAIN,
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      scope: 'read:users'
    });

    auth0.users.get({ user_id: USER_ID }, function (err, user) {
      console.log(user);
    });
  }
}
