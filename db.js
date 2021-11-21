const { Sequelize } = require('sequelize');

const db = new Sequelize('De_NC', 'ajad74494', 'ajad74494', {
    host: '103.96.105.150',
    dialect: 'mssql'
})



module.exports ={Sequelize, db}