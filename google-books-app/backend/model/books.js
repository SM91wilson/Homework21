const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({

    title: {
        type: String
    },

    authors: {
        type: String
    },

    description: {
        type: String
    },


    // image: {
    //     type: 
    // },

    link: {

    }
});

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;