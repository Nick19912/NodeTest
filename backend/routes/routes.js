'use strict';

let router = require("express").Router();
const users = require('../controllers/userContoller');

router.get('/getUser', (req, res) => users.getUser(req, res));
router.post('/submit', (req, res) => users.submitUser(req, res));
router.post('/update', (req, res) => users.updateUser(req, res));

//Test API is online
router.get("/", (req, res) => { res.send("API Online"); });

module.exports = router;
