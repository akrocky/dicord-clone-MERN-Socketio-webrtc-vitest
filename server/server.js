
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
const authRoutes=require('./routes/auth.route')
const app = express()
app.use(express.json())
app.use(cors())
const port = process.env.PORT ||  process.env.API_PORT ;

// register the routes
app.use('/api/auth', authRoutes)

mongoose.connect(process.env.MONGODBCONNECTIONAPI )
.then(()=>{
       console.log("Mongodb connected");
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
})
.catch(err => {
    console.log("Database connection failed.Server not started")
      console.error(err)
})

