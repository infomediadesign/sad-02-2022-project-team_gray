var express = require('express');
var router = express.Router();
var bidding_List = require('../../controller/bidding_List/bidding_List.controller')

router.post('/bidding_List',bidding_List.insertBids);
router.post('/participatedBidding_List',bidding_List.insertParticipatedBids);
router.get('/getUserData',bidding_List.getUserData);
router.post('/sendBid',bidding_List.sendBid);
router.post('/bidsForUserTable',bidding_List.BidsForUserTable);
router.post(`/acceptBid`,bidding_List.acceptBid);

module.exports = router