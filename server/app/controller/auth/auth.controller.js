var mysqlQuery = require('../../common/mysqlHelper')
// var dateFormat = require('dateformat');

function login(req, res) {
    var param = req.body;
    console.log('param', param);
    if (!param.email_id && !param.password)
        return res.json({ error: true, message: "Please provide valid credentials" })

        var query = "SELECT * FROM employee_master WHERE email_id='" + param.email_id + "' AND password='" + param.password + "'";
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
    login: login
}
