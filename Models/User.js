const {Model, DataTypes} = require('sequelize');
const sequelize = require('../Config/Connection');
const bycrypt = require('bcrypt');

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
        email: {
            type: {

            }
        }
    }
)