import {expect, test} from '@oclif/test'

describe('user:get', () => {
  test
    .stdout()
    .stderr()
    .command(['authzero', 'user:get', '--user_id', '\'auth0|5be194e2c0408874f867caab\''])
    .it('returns a user profile with user_id=\'auth0|5be194e2c0408874f867caab\'', output => {
      expect(output.stdout).to.contain('user_id: \'auth0|5be194e2c0408874f867caab\'')
    })
})
