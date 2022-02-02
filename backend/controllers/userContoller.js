'use strict';

let userService = require('../service/userService');
const path = require('path');

exports.getUser = async function(req, res) {
    console.log("Getting User...")
    return res.json(await userService.getUserDetails());
};

exports.submitUser = async function(req, res) {
    console.log("Saving User...");
    userService.save(req.body);
    res.sendFile(__dirname + '/index.html');
    //res.send(await userService.createCard(req.body));
  };

exports.updateUser = async function(req, res) {
    console.log("Update User...")
    userService.save(req.body);
    return res.json("update");
};

