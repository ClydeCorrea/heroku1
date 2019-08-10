"use strict";
const config = require("../config");
const sql = require("mssql");

module.exports.add_users = function (req, res) {
    if (!req.body.email_id) {
        res.send("Please provide email id")
    } else if (!req.body.device_token) {
        res.send("Please provide device token")
    } else {
        var email = req.body.email_id;
        var deviceT = req.body.device_token;
        sql.connect(config, function (err) {
            if (err) console.log(err);
            // create Request object
            var request = new sql.Request();
            // query to the database and get the data
            request.query("INSERT INTO Pwa_users(email_id, device_t) VALUES ('" + email + "', '" + deviceT + "')", function (error, results, fields) {
                if (error) {
                    console.log(error);
                    res.json({
                        status: false,
                        message: "there are some error with query"
                    })
                } else {
                    console.log(error);
                    res.json({
                        status: true,
                        message: "User added to database"
                    })
                }
            })
        });
    }
}