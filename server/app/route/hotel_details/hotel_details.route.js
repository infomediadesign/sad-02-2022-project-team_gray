var express = require('express');
var router = express.Router();
var hotel_details = require('../../controller/hotel_details/hotel_details.controller');

router.post('/insertHotelDetails',hotel_details.insertHotelDetails);
router.get('/getAllHotelDetails',hotel_details.getAllHotelDetails);
router.get('/getHotelByCity',hotel_details.getHotelByCity);

module.exports = router