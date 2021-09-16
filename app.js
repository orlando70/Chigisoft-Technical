const express = require('express');
const app = express();
const db = require('./config/db')
bookRoute = require('./routes/bookRoutes')


app.use(express.json())

db()

app.use('/', bookRoute)
app.listen(3000, () => {
    console.log('app is running on port 3000');
})