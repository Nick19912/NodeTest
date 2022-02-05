const userService = require('../service/userService');

/*
    Gets all user details from Redis and return object to frontend
*/
const getUser = async (req, res) => {
    console.log("Getting User...");
    const result = await userService.getUserDetails();
    return res.json(result);
};

/*
    Saves the user object and redirects to home to refresh the page
*/
const submitUser = async (req, res) => {
    console.log("Saving User...");
    userService.save(req.body);

    res.writeHead(302, {
        'Location': "/"
      });
      res.end();
  };

/*
    Saves data from update requests. Can handle one or many items in the object    
*/
const updateUser = async (req, res) => {
    console.log("Update User...");
    return res.json(userService.save(req.body));
};

module.exports = {
    getUser,
    submitUser,
    updateUser,
 }