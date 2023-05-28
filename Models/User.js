const {Model, DataTypes} = require('sequelize');
const sequelize = require('../Config/Connection');
const bycrypt = require('bcrypt');
const { beforeUpdate } = require('./Comment');

// Creating the User model and defining the columns and configurations for the table
class User extends Model {
    checkpassword(loginPassword) {
        return bycrypt.compareSync(loginPassword, this.password);
    }
} 

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true
        },
        github: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING, // Use the STRING data type for email attribute
            allowNull: false, // Set allowNull to false if email is required
            unique: true, // Add unique constraint if email should be unique
            // Add other validations if necessary, such as validate: { isEmail: true }
          },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    },

    {
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;