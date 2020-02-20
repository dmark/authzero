import {Command, flags} from '@oclif/command'

import {connectToAuth0} from '../../authzero-helpers'

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
    
    const auth0 = connectToAuth0()

    auth0.rules.get({ id: ID }, function (err: any, settings: any) {
      if (err) {
        // do a thing
      }

      console.log(settings);
    });
  }
}
