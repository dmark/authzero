var dotenv = require('dotenv');
var ManagementClient = require('auth0').ManagementClient;

dotenv.load();

var auth0 = new ManagementClient({
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    scope: 'read:users'
});

console.log(auth0);