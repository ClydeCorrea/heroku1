"use strict";
const config = require("../config");
const sql = require("mssql");
// const oracledb = require("oracledb");


module.exports.get_users = function (req, res) {
        sql.connect(config, function (err) {
            if (err) {
                console.log("Error while connecting database :- " + err);
                // res.send(err);
            } else {
                // create Request object
                var request = new sql.Request();
                // query to the database
                var query = "select * from Pwa_users";
                request.query(query, function (err, results,fields) {
                    if (err) {
                        console.log("Error while querying database :- " + err);
                        // res.send(err);
                    } else {
                        res.json({
                            data:results,
                            status: true,
                            message: "User added to database"
                        })
                    }
                });
            }
        });
}