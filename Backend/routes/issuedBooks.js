const express = require('express');
const router = express.Router();
const IssuedBook = require('../models/issuedBook');
const schedule = require('node-schedule');
const nodemailer = require('nodemailer');
require('dotenv').config();

//View all books
router.get('/read',(req,res)=>{
    IssuedBook.find()
    .then((data)=>{
        res.send(data)
    })
});


//MEMBER ROUTES

//Take Book by Member
router.post('/takebook', (req,res)=>{
    let newIssuedBook = new IssuedBook({
        title: req.body.title,
        image: req.body.image,
        memberName: req.body.memberName,
        memberEmail: req.body.memberEmail,
    });

    //checking if member already took more than 5 books
    memberName = newIssuedBook.memberName;
    var query = IssuedBook.find({'memberName':memberName});
    query.count(function (err, count) {
    if (err) throw (err)
    else
    if(count <= 4){

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



//LIBRARIAN ROUTES

//Issue Book By Librarian
router.put('/issuebook',(req,res)=>{
    id = req.body._id,
    title = req.body.title,
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
    .then(()=>{
        res.send();

        
    });

    // Scheduling before due date
    var Test = '2022-11-15'+'T16:13:00.000'; //duedate
    console.log(Test);
    lol='lol ok';
    console.log(lol);
    var TestDatee = '2022-11-15' +'T12:15:00.000Z';
    console.log(TestDatee);

    var datee = new Date(TestDatee);
    var yesterdayy = new Date(datee - 24*60*60*1000);
    var noww = yesterdayy.toISOString().replace('Z', '');
    //let rundate = new Date('2022-11-18T11:44:00.000+5:30');
        
      let testJob = 'test1';
      let Job = schedule.scheduleJob(testJob,noww,()=>{
        //Job Here
        // setup email data with unicode symbols
        console.log(noww);
        console.log('lol');
   
    
                //Stopping the Job
                let current_job = schedule.scheduledJobs[testJob]
                current_job.cancel();   
    })
   

})

//Books waiting to be issued
router.get('/waiting', (req,res)=>{
    IssuedBook.find({"issued": { $ne: true}})
    .then((books)=>{
        res.send(books)
    })
});

//Read All Issued Books
router.get('/issued', (req,res)=>{
    IssuedBook.find({"issued": { $ne: null}})
    .then((books)=>{
        res.send(books)
    })
});

//Delete Returned Books from Issuedbooks DB
router.delete('/delete/:id',(req,res)=>{
    id = req.params.id;
    IssuedBook.findByIdAndDelete({'_id':id})
    .then(()=>{
        res.send();
    })
});


module.exports = router;    