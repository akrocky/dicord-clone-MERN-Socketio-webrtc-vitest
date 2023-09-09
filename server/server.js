
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
const authRoutes=require('./routes/auth.route')
const friendInvitationRoutes=require('./routes/friendInvitation.route')
const socketServer=require('./socketServer');
const app = express()
const server   = require('http').Server(app);
app.use(express.json())
app.use(cors())
const port = process.env.PORT ||  process.env.API_PORT ;

// register the routes
app.use('/api/auth', authRoutes)
app.use('/api/friend-invitation', friendInvitationRoutes)


socketServer.registerSocketServer(server)
mongoose.connect(process.env.MONGODBCONNECTIONAPI )
.then(()=>{
       console.log("Mongodb connected");
    server.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
})
.catch(err => {
    console.log("Database connection failed.Server not started")
      console.error(err)
})

