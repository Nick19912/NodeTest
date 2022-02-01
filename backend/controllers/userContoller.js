'use strict';

let userService = require('../service/userService');

exports.getUser = async function(req, res) {
    console.log(req.body)
    return res.json("getUser");
};

exports.submitUser = async function(req, res) {
    console.log("In Submit Statement")
    console.log(req.body)
    userService.saveNewUser(req.body);
    
    return res.json(userService.createCard(req.body));
  };

exports.updateUser = async function(req, res) {
    console.log("In Update Statement")
    return res.json("update");
};
