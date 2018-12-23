import './_env'
const ManagementClient: any = require('auth0').ManagementClient

export function connectToAuth0() {
    return new ManagementClient({
        domain: process.env.AUTH0_DOMAIN,
        clientId: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        audience: 'https://' + process.env.AUTH0_DOMAIN + '/api/v2/',
        scope: 'read:users'
      });
}
