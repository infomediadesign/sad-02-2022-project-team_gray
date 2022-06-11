var mysqlQuery = require('../../common/mysqlHelper')
// var dateFormat = require('dateformat');
/**
 * This function represent User Login  
 * @param {*} req 
 * @param {*} res 
 * @author Virendra Kadam
 */
function userLogin(req, res) {
    var param = req.body;
    console.log('param', param);
    if (!param.userEmail && !param.userPassword)
        return res.json({ error: true, message: "Please provide valid credentials" })

        var query = "SELECT * FROM user_master WHERE userEmail='" + param.userEmail + "' AND userPassword='" + param.userPassword + "'";
        mysqlQuery.excecuteQuery(query, function (error, result) {
            if (error)
                return res.json({ error: true, message: error })
            if (result.length > 0) {
                return res.json({ error: false, result: result[0] })
            }
            return res.json({ error: true, message: 'Username/ Password invalid' })
        })
}
/**
 * This function represent User Login  
 * @param {*} req 
 * @param {*} res 
 * @author Virendra Kadam
 */
function hotelLogin(req, res) {
    var param = req.body;
    console.log('param', param);
    if (!param.hotelEmail && !param.hotelPassword)
        return res.json({ error: true, message: "Please provide valid credentials" })

        var query = "SELECT * FROM hotel_master WHERE hotelEmail='" + param.hotelEmail + "' AND hotelPassword='" + param.hotelPassword + "'";
        mysqlQuery.excecuteQuery(query, function (error, result) {
            if (error)
                return res.json({ error: true, message: error })
            if (result.length > 0) {
                return res.json({ error: false, result: result[0] })
            }
            return res.json({ error: true, message: 'Username/ Password invalid' })
        })
}
module.exports = {
userLogin: userLogin,
hotelLogin: hotelLogin
}
