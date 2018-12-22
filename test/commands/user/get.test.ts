import {expect, test} from '@oclif/test'

describe('user:get', () => {
  test
    .stdout()
    .command(['user:get', '--user_id', '\'auth0|5be194e2c0408874f867caab\''])
    .it('returns a user profile with user_id=\'auth0|5be194e2c0408874f867caab\'', ctx => {
      expect(ctx.stdout).to.contain('user_id: \'auth0|5be194e2c0408874f867caab\'')
    })
})
