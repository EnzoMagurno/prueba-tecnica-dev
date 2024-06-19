const {Sequelize} = require('sequelize')
require('dotenv').config()


const sequelize = new Sequelize(process.env.PG_DATABASE, process.env.PG_USER, process.env.PG_PASSWORD, {
    host: '200.107.98.2',
    dialect: 'postgres',
  });
module.exports = sequelize;
