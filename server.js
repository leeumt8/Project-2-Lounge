// server.js is the initial starting point for node/express server

var express = require("express");

// express app setup
var app = express();
var PORT = process.env.PORT || 8080;

//requiring models for syncing
// var db = require("./models");

//setting up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static directory
app.use(express.static(__dirname + "/app/public"));

//routes
// require("./app/routes/new-user-api-routes")(app);
require("./app/routes/html-routes")(app);

//syncing sequelize models and then starting the express app
// db.sequelize.sync({ force: true }).then(function() {
//     app.listen(PORT, function() {
//         console.log("App listening on PORT " + PORT);
//    });
// });
// temp express app until sequelize models are working
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
