const connection = require('./Database/Connection')
connection.connect(function (err){
    if(err) throw err
    console.log("Database Connection Successful")
})