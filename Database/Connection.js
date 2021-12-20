const mysql = require('mysql')

// Import .env
require('dotenv').config()

// Create Connection
const db = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
})

// const db = mysql.createConnection({
//     user: 'root',
//     password: 'root',
//     database: '5_parcel',
//     port: 2005
// })

module.exports = db