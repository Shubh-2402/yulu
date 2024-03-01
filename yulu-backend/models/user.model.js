const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role:{
            type: DataTypes.ENUM,
            values: ["user", "admin"],
        }
    }, {
        hooks: {
            beforeCreate: async (user) => {
                const hashedPassword = await bcrypt.hash(user.password, 10);
                user.password = hashedPassword;
            }
        }
    });

    User.prototype.comparePassword = async function(password) {
        return await bcrypt.compare(password, this.password);
    };

    return User;
};
