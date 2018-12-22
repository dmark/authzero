import {expect, test} from '@oclif/test'

describe('user:get', function() {
  test
    .stdout()
    .command(['user:get', '--user_id', 'auth0|5be194e2c0408874f867caab'])
    .it('should return a user profile with user_id=\'auth0|5be194e2c0408874f867caab\'', function(done) {
      expect({}).to.contain('user_id: \'auth0|5be194e2c0408874f867caab\'')
    })
})
