// Init All Library
const express = require('express')
const app = express()
const cors = require('cors')

// Init Cors
app.use(cors())

// Init Body Parser
app.use(express.json())

// Init PORT
const PORT = 2005 

// Import Routers
const Router = require('./Routers/Routers')

// Routing
app.get('/', (req, res) => {
    res.status(200).send(
        '<h1>Final Project Group 5 System API</h1>'
    )
})

// app.use('/user', Router)

app.listen(PORT, () => console.log('API RUNNING ON PORT ' + PORT))