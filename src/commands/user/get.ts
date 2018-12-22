import {Command, flags} from '@oclif/command'

var dotenv = require('dotenv');
var ManagementClient = require('auth0').ManagementClient;

export default class User extends Command {
  static description = 'Get profile for specificed user.'

  static flags = {
    help: flags.help({char: 'h'}),
    user_id: flags.string({char: 'i', description: 'user_id of user', required: true})
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
      audience: 'https://' + process.env.AUTH0_DOMAIN + '/api/v2/',
      scope: 'read:users'
    });

    auth0.users.get({ id: USER_ID }, function (err: any, user: any) {
      if (err) {
        // do a thing
      }
      console.log(user);
    });
  }
}
