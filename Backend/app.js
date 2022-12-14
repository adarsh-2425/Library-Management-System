const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors =require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')
var session = require('cookie-session');
const schedule = require('node-schedule');

// Connect to Database
mongoose.connect(config.database);


// On Connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to Database');
});
// On Error
mongoose.connection.on('error',(err)=>{
    console.log('Database error:' +err);
});

const app = express();

const users = require('./routes/users');
const books = require('./routes/books')
const issuedBooks = require('./routes/issuedBooks');
const search = require('./routes/search')

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/users', users);
app.use('/books', books);
app.use('/search', search);
app.use('/issuedbooks', issuedBooks);

// Set Static Folderr
app.use(express.static(`./public`));


// Index Route
// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname + '/public/index.html'));
//     });
app.get('/',(req,res)=>{
    res.send('Invalid endpoint')
})

// Start Server
app.listen(process.env.PORT || 3000, function(){
    console.log("server listening on port %d in %s mode", this.address().port, app.settings.env);
});