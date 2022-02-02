
const redis = require('redis');
const client = redis.createClient();
const fs = require('fs');

exports.save = async function(body) {
    await client.connect();
    for (const [key, value] of Object.entries(body)) {
        client.set(`${key}`, `${value}`);
    } 
    await client.quit();
};

exports.createCard = async function(body) {
    fs.readFile('frontend/index.html', function (err, html) {
        if (err) {
            throw err; 
        }       
        console.log(html);
    });

    return '<h1>Hello World!</h1>';
};

exports.getUserDetails = async function() {
    console.log("In getUserDetails")
    await client.connect();
    let array = [];

    let keys = client.keys('*');

    (await keys).map(async (key)=> {
        array[key] = await client.get(key);
    })

    await client.quit();
    console.log(array);
    return array;
}
