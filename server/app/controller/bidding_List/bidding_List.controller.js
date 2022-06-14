var mysqlQuery = require('../../common/mysqlHelper')
// var dateFormat = require('dateformat');
/**
 * This function represent insert record into hotel Master table 
 * @param {*} req 
 * @param {*} res 
 * @author Abhinay Khalatkar
 */
function insertBids(req, res) {//insert bids into first table( NOT PARTICIPATED )
    var param = req.body;
    console.log(param);
    var query= "SELECT `cityId`,`userBidAmount`,`b.userBookingId`,`userId`,`userAddress`, `hotelId` ,`userCheckIn`, `userCheckOut`,`guestNo`, `roomNeed`, `roomType`, `bedType` FROM `user_hotel_booking` AS a CROSS JOIN `bidding_master_table` AS b WHERE a.userBookingId=b.userBookingId AND cityId="+`${param.cityId}`+ " AND hotelId!="+`${param.hotelId}`;
    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error)
            return res.json({ error: true, message: error })
        else
            return res.json({ error: false, message: result })
    })
}

function insertParticipatedBids(req, res) {//INSERT BIDS INTO PARTICIPATED TABLE
    var param = req.body;
    console.log(param);
    var query= "SELECT `cityId`,`userBidAmount`,`userId`,`userAddress`, `hotelId` ,`userCheckIn`, `userCheckOut`,`guestNo`, `roomNeed`, `roomType`, `bedType` ,`acceptedByUser` FROM `user_hotel_booking` AS a CROSS JOIN `hotel_bid` AS b WHERE a.userBookingId=b.userBookingId AND cityId="+`${param.cityId}`+ " AND hotelId="+`${param.hotelId}`;
    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error)
            return res.json({ error: true, message: error })

        else
            return res.json({ error: false, message: result })
    })
}
function getUserData(req, res) {
    var param = req.body;
    console.log(param);
    var query= "SELECT `userId`, `userFirstName`, `userLastName`, `userEmail`, `userContactNumber`, `userGender`, `userPassword` FROM `user_master` WHERE userId="+`${param.userId}`
       mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error)
            return res.json({ error: true, message: error })

        else
            return res.json({ error: false, message: result })
    })
}

function sendBid(req, res) {// to send bid take userbooking from table stored b.userbooking id from insertparticipated bids.
    var param = req.body;
    console.log(param); 
    var query =`INSERT INTO hotel_bid(userBookingId, hotelBidAmount, hotelId) VALUES ('${param.userBookingId}','${param.hotelBidAmount}','${param.hotelId}')`
       mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error)
            return res.json({ error: true, message: error })

        else
            return res.json({ error: false, message: result })
    })
}
function BidsForUserTable(req, res) {// to recive all the hotel bids in user bidding table
    var param = req.body;
    console.log(param);
    var query="SELECT hotelBidId`,`hotelBidAmount`,`hotelId`,`acceptedByUser` FROM `user_hotel_booking` AS a CROSS JOIN `hotel_bid` AS b WHERE a.userBookingId=b.userBookingId AND userId="+`${param.userId}`
         mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error)
            return res.json({ error: true, message: error })

        else
            return res.json({ error: false, message: result })
    })
}

function acceptBid(req, res) {// to accept or reject bids from user table
    var param = req.body;
    console.log(param);
    var query= `UPDATE hotel_bid SET acceptedByUser = ${param.rejectAccept} WHERE hotelBidId = ${param.hotelBidId}`
         mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error)
            return res.json({ error: true, message: error })

        else
            return res.json({ error: false, message: result })
    })
}




module.exports = {
    insertBids:insertBids,
    insertParticipatedBids:insertParticipatedBids,
    getUserData:getUserData,
    sendBid:sendBid,
    BidsForUserTable:BidsForUserTable,
    acceptBid:acceptBid
}