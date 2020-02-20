import {Command, flags} from '@oclif/command'

import {connectToAuth0} from '../../authzero-helpers'

export default class Tenant extends Command {
  static description = 'Get tenant settings.'

  static flags = {
    help: flags.help({char: 'h'})
  }

  //static args = [{name: 'file'}]
  static args = []

  async run() {
    const {args, flags} = this.parse(Tenant)
    
    const auth0 = connectToAuth0()

    auth0.tenant.getSettings(function (err: any, settings: any) {
      if (err) {
        // do a thing
      }

      console.log(settings);
    });
  }
}
