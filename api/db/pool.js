const {Sequelize} = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(PG_DATABASE,PG_USER,PG_PASSWORD,{
    host:PG_HOST,
    dialect:PG_TYPE
})
module.exports = sequelize;
