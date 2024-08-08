const express = require("express");
const {getBook , publishBook} = require("./../controller/book.controller")

const router = express.Router();

router.get('/' , getBook);

router.post('/publish' , publishBook)

module.exports = router;