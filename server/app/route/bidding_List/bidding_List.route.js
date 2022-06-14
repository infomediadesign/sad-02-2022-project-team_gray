var express = require('express');
var router = express.Router();
var bidding_List = require('../../controller/bidding_List/bidding_List.controller')

router.get('/bidding_List',bidding_List.insertBids);
router.get('/participatedBidding_List',bidding_List.insertParticipatedBids);
router.get('/getUserData',bidding_List.getUserData);
router.post('/sendBid',bidding_List.sendBid);

module.exports = router