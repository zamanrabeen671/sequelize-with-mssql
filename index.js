const express = require('express')
const cors = require('cors')
const { db, Sequelize } = require('./database/db')
const app = express()

const port = 5000;
require('./database/db')
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// const dbTest = async () => {
//     try {
//         await db.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }

// app.get('/', dbTest,(req, res) => {
//     res.send('server is ok')
// })
// dbTest()
app.listen(port, () => {
    console.log('server is running: 5000');
})