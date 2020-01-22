var User = require("../../models/Registration.js");
var sequelize = require("../../config/connection.js");
var Sequelize = require("sequelize");

//these are api routes for updating the DB with new users

module.exports = function (app) {

    // this is a test route for showing all current users in the db
    //app.get("/api/all", function(req, res) {
    //    User.findAll({}).then(function(results) {
    //        res.json(results);
    //    });
    //});

    //this is a route for adding a new user to the users table
    app.post("/register", function(req, res) {
        console.log("User data: ");
        console.log(req.body);
        User.create({
            user_name: req.body.username,
            user_password: req.body.password,
            user_email: req.body.email
        }).then(res.redirect("/login"))
            .catch(err => console.log(err));
    });

    //this route is for checking the entered credentials
    //app.post("/login", function(req, res) {
    //    console.log("User credentials: ");
    //    console.log(req.body);
    //    var username = req.body.user_name;
    //    var password = req.body.user_password;
    //    if (username && password) {
    //        sequelize.query("SELECT user_name, user_password FROM lounge_db.users WHERE user_name = ? AND user_password = ?", [username, password], function(err, res, fields) {
    //            if (res.length > 0) {
    //                req.session.loggedin = true;
    //                req.session.user_name = user_name;
    //                res.redirect("/account");
    //            } else {
    //                res.send("Incorrect Username/Password!");
    //            }
    //            res.end();
    //        });
    //    } else {
    //        res.send("Please enter Username and Password!");
    //        res.end();
    //    }
    //});


    app.post("/login", function(req, res) {
        console.log("User credentials: ");
        console.log(req.body);
        var username = req.body.user_name;
        var password = req.body.user_password;
        if (username && password) {
            User.findAll({
                where: {
                    user_name: username,
                    user_password: password
                }
            }).then(res.redirect("/account"));
        } else {
            res.send("Please enter your username and password");
        }
    });

};

