const { Sequelize, DataTypes, Model } = require('sequelize');
const model = require('../models/Login')

const getAllUser = async (req, res) => {
    try{
        const data = await model.User.findAll()
        console.log(data)
    }  catch(err) {
        console.log(err)
    }
}
module.exports = getAllUser