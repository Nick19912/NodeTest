
const redis = require('redis');
const client = redis.createClient();

/*
    Test body is not null
*/
exports.isNull = function(body) {
    if(body == null) {
        return true;
    }
    return false;
}

const isNull = (body) => {
    if(body == null) {
        return true;
    }
    return false;
}

/*
    Generic Save
*/
exports.save = async function(body) {
    try
    {
        if(!isNull(body)) {
            await client.connect();
            for (const [key, value] of Object.entries(body)) {
                client.set(`${key}`, `${value}`);
            } 
            await client.quit();
        }
        else
        {
            return false;
        }
    }
    catch (error) {
        console.error(error);
        return false;
    }

    return true;
};

/*
    Create Card
*/
exports.createCard = async function(body) {
    //return ReactDOMServer.renderToStaticMarkup('<h1>Hello World!</h1>');
};

/*
    Gets all keys. Scaling issues when using multiple user accounts but can be 
    resolved with a hash on the key.
*/

exports.getUserDetails = async function() {
    await client.connect();
    let user = {};
    let keys = client.keys('*');

    (await keys).map(async (key)=> {
        user[key] = await client.get(key);
    })

    await client.quit();
    return user;
}
