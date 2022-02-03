'use strict';

let userService = require('../service/userService');
var React = require('react');
// Our bundle expects React to be a global
global.React = React;
let path = require('path');
let fs = require('fs');

exports.getUser = async function(req, res) {

    /*
    const indexFile = path.resolve('../../frontend/index.html');

    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
          console.error('Something went wrong:', err);
          return res.status(500).send('Oops, better luck next time!');
        }
    
        return res.send(
          data.replace('<div id="root"></div>', `<div id="root"></div>`)
        );
      });

      */

    console.log("Getting User...")    
    const result = await userService.getUserDetails();
    return res.json(result);
};

exports.submitUser = async function(req, res) {
    console.log("Saving User...");
    userService.save(req.body);
    //TODO: Fix Render issue
    res.sendFile(__dirname + '/index.html');
  };

exports.updateUser = async function(req, res) {
    console.log("Update User...")
    return res.json(userService.save(req.body));
};
