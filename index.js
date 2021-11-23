const express = require('express')
const cors = require('cors')
const { db, Sequelize } = require('./database/db')
const app = express()
const router = require('./routes/userRoutes')
const port = 5000;
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const dbTest = async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
dbTest();
app.use(router)
app.get('/', (req, res) => {
    res.send('server is ok')
})
app.listen(port, () => {
    console.log('server is running: 5000');
})