// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// creating User model that matches up with db
var User = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        // autoIncrement: true
    },
    user_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    user_email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    user_password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    user_totalAssets: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, {
    tableName: "users"
});

//syncs with db
User.sync();

// exporting model so other files can use it
module.exports = User;


