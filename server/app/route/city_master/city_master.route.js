var express = require('express');
var router = express.Router();
var city_master = require('../../controller/city_master/city_master.controller');

router.get('/getAllCities',city_master.getAllCities);

module.exports = router