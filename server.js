const express = require("express");
const bodyParser = require("body-parser");
var port = process.env.PORT || 8080;
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {

  res.setHeader("Access-Control-Allow-Origin", "*"); // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Credentials", "true"); //Set to true if you need the website to include cookies in the requests sent. to the API (e.g. in case you use sessions)
  // res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH"); //Request methods you wish to allow
  res.setHeader("Access-Control-Allow-Methods", "*"); //Request methods you wish to allow
  // res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"); //Request headers you wish to allow
  res.setHeader("Access-Control-Allow-Headers", "*"); //Request headers you wish to allow

  next(); // Pass to next layer of middleware
});

var addUsers = require("./controller/addUsers");
var getUsers = require("./controller/getUsers");

// //All post methods
// app.post("/api/updatehero", updateHero.updateHero);

app.post("/addUsers", addUsers.add_users);
// app.post("/api/removehero", removeHero.removeHero);

//All get Methods
app.get("/getUsers", getUsers.get_users);
app.get('/', function(req, res) {
	res.json({
		status: true,
		message: "Welcome jayesh"
	})
});

app.listen(port, () => {
  console.log("Server Up"+ port)
});