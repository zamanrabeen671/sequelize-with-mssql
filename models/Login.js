const { Sequelize, DataTypes, Model } = require('sequelize');
const  {db}  = require('../database/db');

const User = db.define('User', {
    SUserID : {
        type: DataTypes.INTEGER
    },
    EmpID : {
        type: DataTypes.STRING
    },
    Password : {
        type: DataTypes.STRING
    },
    EUserID : {
        type: DataTypes.INTEGER
    },
    EDt : {
        type: DataTypes.DATE
    },
    ETime : {
        type: DataTypes.STRING
    },
    UType : {
        type: DataTypes.STRING
    },
},
{
    tableName: 'User'
})
module.exports = User