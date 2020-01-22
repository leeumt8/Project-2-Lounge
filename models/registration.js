module.exports = function(sequelize, DataTypes) {
    var newUser = sequelize.define("User", {
       user_name: DataTypes.STRING,
       user_password: DataTypes.STRING,
       user_email: DataTypes.String
    });

    return newUser;
};

//work in progress
