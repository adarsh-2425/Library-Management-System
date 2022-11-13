const express = require('express');
const router = express.Router();
const Book = require('../models/book');

//Add Book
router.post('/create', (req,res)=>{
    let newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        image: req.body.image
    });
    Book.addBook(newBook, (err,book)=>{
        if(err){
            res.json({success: false, msg: 'Failed to add book'});
        }
        else{
            res.json({success: true, msg: 'Book added'})
        }
    })
});

//Read All Book
router.get('/read',(req,res)=>{
    Book.find()
    .then((books,err)=>{
        res.send(books);
        if(err) throw err;
    })
});

//Read Individual Book By Email
router.get('/readone/:id', (req,res)=>{
    id = req.params.id;
    Book.findOne({'id':id})
    .then((books)=>{
        res.send(books)
    })
});

//Update Books
router.put('/update',(req,res)=>{
    id = req.body._id,
    title = req.body.title,
    author = req.body.author,
    image = req.body.image,
    Book.findByIdAndUpdate({'_id':id},
    {
        $set: {
            "title":title,
            'author':author,
            'image':image
        }
    })
    .then((book,err)=>{
        if(err){
            res.json({success: false, msg: 'Failed to update book  '})
        }
        else{
            res.json({success: true, msg: 'Book Updated'})
        }
    })
});

//Delete Book
router.delete('/delete/:id',(req,res)=>{
    id = req.params.id;
    Book.findByIdAndDelete({'_id':id})
    .then((book,err)=>{
        if(err){
            res.json({success: false, msg: 'Failed to Delete book  '})
        }
        else{
            res.json({success: true, msg: 'Book Deleted'})
        }
    })
})

module.exports = router;