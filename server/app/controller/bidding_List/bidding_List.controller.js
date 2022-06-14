var mysqlQuery = require('../../common/mysqlHelper')
// var dateFormat = require('dateformat');
/**
 * This function represent insert record into hotel Master table 
 * @param {*} req 
 * @param {*} res 
 * @author Abhinay Khalatkar
 */
function insertBids(req, res) {
    var param = req.body;
    console.log(param);
    var query= "SELECT `cityId`,`userBidAmount`,`userId`,`userAddress`, `hotelId` FROM `user_hotel_booking` AS a CROSS JOIN `bidding_master_table` AS b WHERE a.userBookingId=b.userBookingId AND cityId="+`${param.cityId}`+ "AND hotelId!="+`${param.hotelId}`;
    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error)
            return res.json({ error: true, message: error })
        else
            return res.json({ error: false, message: result })
    })
}

function insertParticipatedBids(req, res) {
    var param = req.body;
    console.log(param);
    var query= "SELECT `cityId`,`userBidAmount`,`userId`,`userAddress`, `hotelId` FROM `user_hotel_booking` AS a CROSS JOIN `bidding_master_table` AS b WHERE a.userBookingId=b.userBookingId AND cityId="+`${param.cityId}`+ "AND hotelId="+`${param.hotelId}`;
    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error)
            return res.json({ error: true, message: error })

        else
            return res.json({ error: false, message: result })
    })
}



module.exports = {
    insertBids:insertBids,
    insertParticipatedBids:insertParticipatedBids
}