var User = require("../../models/Registration.js");

//these are api routes for updating the DB with new users

module.exports = function (app) {

    // this is a test route for showing all current users in the db
    app.get("/api/all", function(req, res) {
        User.findAll({}).then(function(results) {
            res.json(results);
        });
    });

    //this is a route for adding a new user to the users table
    app.post("/register", function(req, res) {
        console.log("User data: ");
        console.log(req.body);
        User.create({
            user_name: req.body.username,
            user_password: req.body.password,
            user_email: req.body.email
        }).then(res.redirect("/account"))
            .catch(err => console.log(err));
    });

};

