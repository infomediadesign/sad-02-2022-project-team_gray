var mysqlQuery = require('../../common/mysqlHelper')
// var dateFormat = require('dateformat');
/**
 * This function represent show all record from City Master table
 * @param {*} req 
 * @param {*} res 
 * @author Abhilash Reddy 
 */
function getAllCities(req, res) {
    var query = "Select * from city_master";
    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error)
            return res.json({ error: true, message: error })
        else
            return res.json({ error: false, result: result })
    })
}
module.exports = {
    getAllCities: getAllCities
}


