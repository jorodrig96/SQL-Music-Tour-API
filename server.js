// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')

require('dotenv').config();

// SEQUELIZE CONNECTION
const sequelize = new Sequelize(
    process.env.PG_URI, {
        host: 'localhost',
        dialect: 'postgres'
    });

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
    } finally {
        // Close the Sequelize connection
        await sequelize.close();
    }
}

// Run the test connection function
testConnection();


// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

//CONTROLLERS 

const bandsController = require('./controllers/bands_controller');
app.use('/bands', bandsController);

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})