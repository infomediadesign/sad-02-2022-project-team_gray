var express = require('express');
var router = express.Router();
var user_details = require('../../controller/user_details/user_details.controller');

router.post('/insertUserDetails',user_details.insertUserDetails);
router.get('/getAllUserDetails',user_details.getAllUserDetails);

module.exports = router