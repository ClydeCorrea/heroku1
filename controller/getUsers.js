const config = require("../config");
const sql = require("mssql");
// const oracledb = require("oracledb");


module.exports.get_users = function (req, res) {
    console.log("check_ heroku");
        var request = new sql.Request();
        sql.connect(config, function (err) {
            if (err) console.log(err);
            request.query("SELECT * FROM Pwa_users", function (error, results, fields) {
                if (error) {
                    console.log(error);
                    res.json({
                        status: false,
                        message: "there are some error with query"
                    })
                } else {
                    console.log(results, "pakad");
                    if (results != "" && results != null && results != undefined) {
                        res.json({
                            data: results,
                            status: true,
                            message: "Data get from sql"
                        })
                    }

                }
            })
        })
}