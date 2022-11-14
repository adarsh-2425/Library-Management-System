const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// Search By Title
router.get('/title/:query',(req,res)=>{
    query = req.params.query;
    Book.find({'title':query})
    .then((books)=>{
        res.send(books)
    })
});

// Search By Author
router.get('/author/:query',(req,res)=>{
    query = req.params.query;
    Book.find({'author':query})
    .then((books)=>{
        res.send(books)
    })
});

module.exports = router;