const dotenv = require('dotenv');
require('dotenv').config()

const ManagementClient = require('auth0').ManagementClient;

const auth0 = new ManagementClient({
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET
});

auth0.tenant.getSettings(function (err: any, settings: any) {
    if (err) {
        console.log(err)
    }

    console.log(settings);
});