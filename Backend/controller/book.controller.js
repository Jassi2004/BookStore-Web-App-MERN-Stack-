const Book = require("./../model/book.model");

async function getBook(req, res){
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

async function publishBook(req, res) {
    try {
        const {name ,price , category , image , title} = req.body;
        const newBook =  new Book({name ,price , category , image , title});
        await newBook.save();
        res.status(200).json(newBook);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Book could not be published"});
    }
}


module.exports = {getBook , publishBook};