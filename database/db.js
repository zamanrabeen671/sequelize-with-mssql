const { Sequelize } = require('sequelize');

const db = new Sequelize('De_SC1', 'ajad74494', 'ajad74494', {
    host: '103.96.105.150',
    dialect: 'mssql',
    pool : {max: 5, min: 0, idle:1000}
})


// (async () => {
//     await db.sync()
// })();
// db.authenticate()
// .then(() => {
//     console.log('connection established')
// })
// .catch(err => {
//     console.log('error'+err.message)
// })
module.exports ={Sequelize, db}