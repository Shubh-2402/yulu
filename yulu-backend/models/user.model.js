const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
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
        role: {
            type: DataTypes.ENUM,
            values: ["user", "admin"],
        }
    }, {
        hooks: {
            beforeCreate: async (user) => {
                const hashedPassword = await bcrypt.hash(user.password, 10);
                user.password = hashedPassword;
            }
        },
        defaultScope: {
            attributes: {
                exclude: ['password']
            }
        }
    });

    User.prototype.comparePassword = async function (password) {
        const user = await User.findByPk(this.id, { attributes: ['password'] });
        if (!user) {
            return false;
        }
        return await bcrypt.compare(password, user.password);
    };
    

    return User;
};
