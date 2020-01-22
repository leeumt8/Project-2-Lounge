var path = require("path");

module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    app.get("/login", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    app.get("/register", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/registration.html"));
    });

    app.get("/account", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/accountview.html"));
    });

    app.get("/coinflip", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/coinflip.html"));
    });
};