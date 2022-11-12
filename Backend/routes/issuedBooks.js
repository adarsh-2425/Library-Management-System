const express = require('express');
const router = express.Router();
const IssuedBook = require('../models/issuedBook');



//Take Book by Member
router.post('/takebook', (req,res)=>{
    let newIssuedBook = new IssuedBook({
        title: req.body.title,
        memberName: req.body.memberName,
        memberEmail: req.body.memberEmail,
    });

    //checking if member already took more than 5 books
    memberName = newIssuedBook.memberName;
    var query = IssuedBook.find({'memberName':memberName});
    query.count(function (err, count) {
    if (err) console.log(err)
    else
    if(count <= 5){

        //Submitting book to librarian
        IssuedBook.addBook(newIssuedBook, (err,book)=>{
            if(err){
                res.json({success: false, msg: 'Failed to Take book'})
            }
            else{
                res.json({success: true, msg: 'Book Submitted to Librarian. You will get an email when your book is issued. Thank You'})
            }
        })
    }
    else{
        res.json({success: false, msg: 'Maximum Number of books taken'});
    }
});


   
    //confirmation email logic

});

//Issue Book By Librarian
router.put('/issuebook',(req,res)=>{
    id = req.body._id,
    memberEmail = req.body.memberEmail,
    dueDate = req.body.dueDate,
    issued = 'true',
    remarks = req.body.remarks,

    IssuedBook.findByIdAndUpdate({'_id':id},
    {
        '$set': {
            'dueDate':dueDate,
            'issued':issued,
            'remarks':remarks
        }
    })
    .then((issued,err)=>{
        if(err){
            res.json({success: false, msg: 'Failed to Issue book  '})
        }
        else{
            res.json({success: true, msg: 'Book Issued. Return within date. A confirmation email also send'})
        }
    })

    //confirmation email logic
});

//Books waiting to be issued
router.get('/waitingforissue', (req,res)=>{
    IssuedBook.find({"issued": { $ne: true}})
    .then((books)=>{
        res.send(books)
    })
});

//Read All Issued Books
router.get('/issuedbooks', (req,res)=>{
    IssuedBook.find({"issued": { $ne: null}})
    .then((books)=>{
        res.send(books)
    })
});

module.exports = router;    