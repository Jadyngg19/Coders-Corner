// Import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// Create connection to our database
let sequelize;

if (process.env.JAWSDB_URL) {
  // If the JAWSDB_URL environment variable exists (indicating the Heroku MySQL add-on)
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // If running locally or on a different environment
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306
  });
}

module.exports = sequelize;
