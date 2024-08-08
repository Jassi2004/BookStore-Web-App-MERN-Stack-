require('dotenv').config();

const mongoose = require('mongoose');

const mongoURL = process.env.MongoDb_URI;

mongoose.connect(mongoURL , {
})

const db = mongoose.connection;

db.on('connected' , ()=>{
    console.log("connected to mongoDB server");
})

db.on('error' , (error)=>{
    console.log("Error connecting to mongodb server => " , error);
})

db.on('disconnected' , ()=>{
    console.log("Disconnected to mongodb server");
})

module.exports = db; 