import {Command, flags} from '@oclif/command'

var dotenv = require('dotenv');
var ManagementClient = require('auth0').ManagementClient;

export default class Rule extends Command {
  static description = 'Get rule.'

  static flags = {
    help: flags.help({char: 'h'}),
    id: flags.string({char: 'i', description: 'Rule ID', required: true})
  }

  //static args = [{name: 'file'}]
  static args = []

  async run() {
    const {args, flags} = this.parse(Rule)
    const ID = flags.id
    
    dotenv.load();

    var auth0 = new ManagementClient({
      domain: process.env.AUTH0_DOMAIN,
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      scope: 'read:users'
    });

    auth0.rules.get({ id: ID }, function (err: any, settings: any) {
      if (err) {
        // do a thing
      }

      console.log(settings);
    });
  }
}