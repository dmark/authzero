import {expect, test} from '@oclif/test'

describe('user:get', () => {
  test
    .stdout()
    .stderr()
    .command(['user:get', '--user_id', 'auth0|5c48cd4c32822876ee653536'])
    .it('runs authzero user:get --user_id "auth0|5c48cd4c32822876ee653536"', ctx => {
      expect(ctx.stdout).to.include({user_id: 'auth0|5c48cd4c32822876ee653536'})
    })
})
