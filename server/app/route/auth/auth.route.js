var express = require('express');
var router = express.Router();
var auth = require('../../controller/auth/auth.controller')

router.post('/userLogin', auth.userLogin),
router.post('/hotelLogin', auth.hotelLogin)
module.exports = router
