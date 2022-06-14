var express = require('express');
var router = express.Router();
var user_bid_details = require('../../controller/user_bid_details/user_bid_details.controller');

router.post('/insertUserBidDetails',user_bid_details.insertUserBidDetails);

module.exports = router