var mysqlQuery = require('../../common/mysqlHelper')
// var dateFormat = require('dateformat');
/**
 * This function represent insert record into hotel Master table 
 * @param {*} req 
 * @param {*} res 
 * @author Abhilash Reddy, Abhinay Khalatkar
 */
function insertHotelDetails(req, res) {
    var param = req.body;
    console.log(param);
    var query = `INSERT INTO hotel_master (hotelName, hotelEmail, hotelContactNumber, hotelAddress, cityId, hotelImage, hotelPassword) VALUES ('${param.hotelName}', '${param.hotelEmail}', '${param.hotelContactNumber}', '${param.hotelAddress}', '${param.cityId}', '${param.hotelImage}', '${param.hotelPassword}')`;
    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error)
            return res.json({ error: true, message: error })
        else
            return res.json({ error: false, message: result })
    })
}


/**
 * This function represent show all record from Hotel Master table
 * @param {*} req 
 * @param {*} res 
 * @author Abhilash Reddy
 */
function getAllHotelDetails(req, res) {
    var query = "Select * from hotel_master";
    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error)
            return res.json({ error: true, message: error })
        else
            return res.json({ error: false, result: result })
    })
}

/**
* This function represent select record from customer details table using room number
* @param {*} req
* @param {*} res
* @author Abhilash Reddy
*/

function getHotelByCity(req, res) {

    var cityId = req.params.cityId;
    var query = "SELECT * FROM hotel_master where cityId=" + cityId;
    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error) {
            return res.json({
                error: true,
                message: error
            });
        } else {
            return res.json({
                result: result[0]
            });
        }
    })
}
module.exports = {
    insertHotelDetails:insertHotelDetails,
    getAllHotelDetails:getAllHotelDetails,
    getHotelByCity:getHotelByCity
}


