const books = require('../models/book.js')

exports.createNewBook = async (req, res) => {
    try {
        newBook = await books.create({
        ...req.body
    })
    newBook.save()
    res.status(200).json({Message: 'Book created successfully'})
    } catch (err) {
        console.log(err)
    }
}

exports.getAllBooks =  async (req, res) => {
    try {
       const allBooks = await books.find()
       res.status(200).json(allBooks)
    } catch (err) {
        console.log(err)
    }
}

exports.getOneBook = async (req,res) => {
    try {
        const singleBook = await books.findById(req.params.id)
    res.status(200).json(singleBook)
    } catch (err) {
        console.log(err)
    }
}

exports.updateOneBook = async (req,res) => {
    try {
        const updatedBook = await books.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description
    })
        updatedBook.save()
        res.status(200).json({message: 'book updated successfully'})
    } catch (err) {
        console.log(err)
    }
    

}

exports.deleteOneBook = async (req,res) => {
    try {
        await books.findByIdAndDelete(req.params.id)
        
        res.status(200).json({message: 'Book deleted successfully'})
    } catch (err) {
        console.log(err)
    }
}