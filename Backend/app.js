const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors =require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')
var session = require('cookie-session');

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

// CORS Middleware
app.use(cors());

// bodyparser parses incoming request. eg: parsing content from form
app.use(bodyParser.json());

app.use('/users', users);

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