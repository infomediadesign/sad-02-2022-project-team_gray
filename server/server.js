let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let cors = require('cors');
let path = require('path');

let port = process.env.PORT || 53123; // used to create, sign, and verify tokens
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: 1024102420, type: 'application/json' }));
let auth = require('./app/route/auth/auth.route')
let user_details = require('./app/route/user_details/user_details.route')
let hotel_details = require('./app/route/hotel_details/hotel_details.route')
let city_master =  require('./app/route/city_master/city_master.route')
let user_bid_details = require('./app/route/user_bid_details/user_bid_details.route')

let sqlinjection = require('sql-injection')

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/auth', auth)
app.use('/userDetails', user_details)
app.use('/hotelDetails', hotel_details)
app.use('/cities', city_master)
app.use('/userBid',user_bid_details)


// app.use('/syscon', syscon)
app.use(sqlinjection)

app.listen(port);
console.log('Server running at http://localhost:' + port);
 
