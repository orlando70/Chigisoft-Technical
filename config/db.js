const mongoose = require('mongoose');

connectionString = 'mongodb://localhost:27017/technical'

module.exports = function () {
    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    }, (err) => {
        if (err) {throw err}
        console.log('Database connection established')
    })
}