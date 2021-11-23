const router = require('express').Router();
const getAllUser = require('../controller/User')


router.get('/user', getAllUser.getAllUser)

module.exports = router