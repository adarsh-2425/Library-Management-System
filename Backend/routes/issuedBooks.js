const express = require('express');
const router = express.Router();
const IssuedBook = require('../models/issuedBook');


//View all books
router.get('/read',(req,res)=>{
    IssuedBook.find()
    .then((data)=>{
        res.send(data)
    })
});

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
    if (err) throw (err)
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
        res.json({success: false, msg: 'Allotted Number of Books Taken. Contact Your Librarian'});
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

//LIBRARIAN ROUTES

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

//MEMBER ROUTES

//View the books submitted  by member
router.get('/viewsubmittedbooks/:email', (req,res)=>{
    memberEmail = req.params.email;
    //in postman, http://localhost:3000/issuedbooks/viewbooks/adarsh.lol2425@gmail.com
    IssuedBook.find({
        'memberEmail': memberEmail,
        'issued':{$ne: true}
    })
    .then((books)=>{
        res.send(books)
    })
   
});

//View the books issued for member
router.get('/viewissuedbooks/:email', (req,res)=>{
    memberEmail = req.params.email;
    IssuedBook.find({
        'memberEmail': memberEmail,
        'issued':{$ne: null}
    })
    .then((books)=>{
        res.send(books)
    })
   
});


module.exports = router;    