import {expect, test} from '@oclif/test'

describe('user:get', function() {
  test
    .stdout()
    .command(['user:get', '--user_id', 'auth0|5be194e2c0408874f867caab'])
    .it('runs user:get --user_id=\'auth0|5be194e2c0408874f867caab\'', function(done) {
      expect(done).to.contain('auth0|5be194e2c0408874f867caab')
    })
})
