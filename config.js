// const sql= require("mssql");

// config for your database
// var connection = mysql.createConnection({
//     host: "192.168.19.188",
//   user: "sa",
//   password: "saipl456",
//   database: "test"
// });
var connection = {
    user: 'sa',
    password: 'saipl456',
    server: '192.168.19.188', 
    database: 'test' 
    };
// var connection = {
//     user: 'apps', 
//     password: 'apps8004',
//     connectString: '192.168.19.12:1541/test'
//     };
module.exports = connection;