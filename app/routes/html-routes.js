var path = require("path");

module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../login.html"));
    });

    app.get("/register", function (req, res) {
        res.sendFile(path.join(__dirname, "../registration.html"));
    });

    app.get("/forgot", function (req, res) {
        res.sendFile(path.join(__dirname, "../forgotpassword.html"));
    });

    app.get("/account", function (req, res) {
        res.sendFile(path.join(__dirname, "../accountview.html"));
    });
};