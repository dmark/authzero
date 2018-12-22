var dotenv = require('dotenv');
var request = require("request");

dotenv.load();

var options = {
    method: 'POST',
    url: 'https://' + process.env.AUTH0_DOMAIN + '/oauth/token',
    headers: { 'content-type': 'application/json' },
    body: {
        grant_type: 'client_credentials',
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        audience: 'https://' + process.env.AUTH0_DOMAIN + '/api/v2/'
    },
    json: true
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
})