const express = require('express');
const server = express();
const db = require('./db.js')
const cors = require('cors')

const bookRoute = require("./route/book.route.js")
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors())
 
server.use('/book' , bookRoute);

const PORT = process.env.PORT || 5000
server.listen(PORT , (error)=>{
    if(error) console.log(error);
    console.log(`Listening to port ${PORT}...`);
    
})