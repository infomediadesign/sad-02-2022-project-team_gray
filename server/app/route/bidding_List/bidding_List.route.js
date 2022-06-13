var express = require('express');
var router = express.Router();
var bidding_List = require('../../controller/bidding_List/bidding_List.controller')

router.get('/bidding_List',bidding_List.insertBids);

module.exports = router