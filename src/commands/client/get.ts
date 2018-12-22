import {Command, flags} from '@oclif/command'

var dotenv = require('dotenv');
var ManagementClient = require('auth0').ManagementClient;

export default class Client extends Command {
  static description = 'Get client (application) settings.'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-i, --user_id=VALUE)
    client_id: flags.string({char: 'i', description: 'Client ID', required: true})
  }

  //static args = [{name: 'file'}]
  static args = []

  async run() {
    const {args, flags} = this.parse(Client)
    const CLIENT_ID = flags.client_id
    
    dotenv.load();

    var auth0 = new ManagementClient({
      domain: process.env.AUTH0_DOMAIN,
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      scope: 'read:users'
    });

    auth0.clients.get({ client_id: CLIENT_ID }, function (err: any, client: any) {
      if (err) {
        //do a thing
      }

      console.log(client);
    });
  }
}
