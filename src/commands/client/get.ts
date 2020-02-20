import {Command, flags} from '@oclif/command'

import {connectToAuth0} from '../../authzero-helpers'

export default class Client extends Command {
  static description = 'Get client (application) settings.'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-i, --user_id=VALUE)
    id: flags.string({char: 'i', description: 'Client ID', required: true})
  }

  //static args = [{name: 'file'}]
  static args = []

  async run() {
    const {args, flags} = this.parse(Client)
    const ID = flags.id
    
    const auth0 = connectToAuth0()

    auth0.clients.get({ client_id: ID }, function (err: any, client: any) {
      if (err) {
        //do a thing
      }

      console.log(client);
    });
  }
}
