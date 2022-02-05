
const redis = require('redis');
const client = redis.createClient();

/*
    Test body is not null
*/
const isNull = (body) => {
    if(body == null || typeof body === "undefined") {
        return true;
    }
    return false;
}

/*
    Generic Save
    To expand, hash the users email as the key and save the object with JSON.stringify.
    Current drawback is the for loop with O(n) but does create ease of updating single records

    Not fully stateless. Sets a 5 minute timer in Redis to expire the Data. 
*/
const save = async (body) => {
    try
    {
        if(!isNull(body)) {
            await client.connect();
            for (const [key, value] of Object.entries(body)) {
                if(!isNull(value)){
                    client.set(`${key}`, `${value}`);
                    client.expire(key, 60 * 2);
                }
            } 
            await client.quit();
        }
        else
        {
            return false;
        }
    }
    catch (error) {
        console.error("Error in save: ", error);
        return false;
    }

    return true;
};

/*
    Gets all keys. 
    Scaling issues when using multiple user accounts. If the save method took a hash of the email
    and use JSON.parse to extract a users object. 
*/
const getUserDetails = async () => {
    await client.connect();
    let user = {};
    
    //Gets all keys
    let keys = client.keys('*');

    (await keys).map(async (key)=> {
        user[key] = await client.get(key);
    })

    await client.quit();
    return user;
}

module.exports = {
    isNull,
    getUserDetails,
    save,
 }