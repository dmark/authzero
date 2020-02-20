import {Command, flags} from '@oclif/command'

import {connectToAuth0} from '../../authzero-helpers'

export default class Connection extends Command {
  static description = 'Get connection settings.'

  static flags = {
    help: flags.help({char: 'h'}),
    id: flags.string({char: 'i', description: 'Connection ID', required: true})
  }

  //static args = [{name: 'file'}]
  static args = []

  async run() {
    const {args, flags} = this.parse(Connection)
    const ID = flags.id
    
    const auth0 = connectToAuth0()

    auth0.connections.get({ id: ID }, function (err: any, settings: any) {
      if (err) {
        // do a thing
      }

      console.log(settings);
    });
  }
}
