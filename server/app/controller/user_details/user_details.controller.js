var mysqlQuery = require('../../common/mysqlHelper')
// var dateFormat = require('dateformat');
/**
 * This function represent insert record into user Master table 
 * @param {*} req 
 * @param {*} res 
 * @author Abhilash Reddy
 */
function insertUserDetails(req, res) {
    var param = req.body;
    console.log(param);
    var query = "INSERT INTO `user_master`(`userFirstName`, `userLastName`, `userEmail`, `userContactNumber`, `userGender`, `userPassword`) VALUES ('" + param.userFirstName + "','" + param.userLastName + "','" + param.userEmail + "', '" + param.userContactNumber + "', '" + param.userGender + "', '" + param.userPassword + "')";
    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error)
            return res.json({ error: true, message: error })
        else
            return res.json({ error: false, message: "Record Insterted Successfully" })
    })
}


/**
 * This function represent show all record from User Master table
 * @param {*} req 
 * @param {*} res 
 * @author Abhilash Reddy
 */
function getAllUserDetails(req, res) {
    var query = "Select * from user_master";
    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error)
            return res.json({ error: true, message: error })
        else
            return res.json({ error: false, result: result })
    })
}


module.exports = {
    insertUserDetails:insertUserDetails,
    getAllUserDetails:getAllUserDetails,
}
