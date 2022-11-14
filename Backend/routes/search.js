const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// Search 
router.post('/', (req,res)=>{
    const { type, query } = req.body;

    Book.find({'type':query})
    .then((books)=>{
        res.send(books)
    });
});



module.exports = router;