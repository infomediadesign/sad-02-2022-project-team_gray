var mysqlQuery = require('../../common/mysqlHelper')

/**
 * This function represent insert user bid details into user hotel booking table
 * @param {*} req 
 * @param {*} res 
 * @author Abhilash Reddy
 */
function insertUserBidDetails(req, res) {
    var param = req.body.formValue;
    var user = req.body.userId;
    console.log(param);
    var query = `INSERT INTO user_hotel_booking(userAddress, cityId, userCheckIn, userCheckOut, userBidAmount, userId, guestNo, roomNeed, roomType, bedType) VALUES ('${param.userAddress}', '${param.cityId}', '${param.cust_check_in}', '${param.cust_check_out}', '${param.userBidAmount}', '${user}', '${param.guestNo}', '${param.roomNeed}', '${param.bedType}', '${param.roomType}')`;
    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error)
            return res.json({ error: true, message: error })
        else
            return res.json({ error: false, message: "Record Insterted Successfully" })
    })
}
module.exports = {
    insertUserBidDetails:insertUserBidDetails,
}
