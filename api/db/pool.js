const {Sequelize} = require('sequelize')
require('dotenv').config()


const sequelize = new Sequelize(process.env.SQL_DBV, process.env.SQL_NAME, process.env.SQL_PASSWORD,
  {
    dialect:process.env.PG_TYPE
  }
)
module.exports = sequelize;
