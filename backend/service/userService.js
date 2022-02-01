const redis = require("redis");
var crypto = require('crypto')

const redisPort = 6379
const redisClient = redis.createClient(redisPort);

exports.saveNewUser = async function(body) {
    console.log("Saving Body")
    console.log(body);
    var name = 'user';
    var hash = crypto.createHash('md5').update(name).digest('hex');
    redisClient.setEx(hash, 3600, body);

    console.log("Saving Body Complete")
    return "Saved";
};

exports.createCard = async function(body) {
    const page = `
    <!DOCTYPE html>
    <html lang="en">
       
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content=
            "width=device-width, initial-scale=1.0">
    </head>
       
    <body>
        <h1>Hello World</h1>
    </body>
       
    </html>`
    return (page);
};