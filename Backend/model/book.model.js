const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number
        },
        category: {
            type: String
        },
        image: {
            type: String
        },
        title: {
            type: String
        }
    }
)

const Book = mongoose.model("Book" , bookSchema);

module.exports = Book;