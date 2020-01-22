// server.js is the initial starting point for node/express server

var express = require("express");
var session = require("express-session");

// express app setup
var app = express();
var PORT = process.env.PORT || 8080;

//requiring models for syncing
// var db = require("./models");

//initializing express session
app.use(session({
    secret: "secretpass",
    resave: false,
    saveUninitialized: false
}));

//setting up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// user routes requirements
// app.use("/", require("./app/routes/registration-api-routes"));
// app.use("/register", require("./app/routes/registration-api-routes"));

//static directory
app.use(express.static(__dirname + "/app/public", {index: "login.html"}));

//routes
require("./app/routes/registration-api-routes")(app);
require("./app/routes/html-routes")(app);

//syncing sequelize models and then starting the express app
// db.sequelize.sync({ force: true }).then(function() {
//     app.listen(PORT, function() {
//         console.log("App listening on PORT " + PORT);
//    });
// });
// temp express app until sequelize models are working

//sequelize db connection test
const sequelize = require("./config/connection.js");

sequelize.authenticate()
    .then(() => console.log("DB connected"))
    .catch(err => console.log("Error: " + err));

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
