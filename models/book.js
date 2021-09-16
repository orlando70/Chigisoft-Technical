const mongoose = require('mongoose');
const {Schema} = mongoose

// create a schema
const bookSchema = new Schema({
    title: String,
    author: String,
    description: String
})

// model collection from schema
const books = mongoose.model('books', bookSchema)

module.exports = books;