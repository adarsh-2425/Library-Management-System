const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const bcrypt = require('bcryptjs');

//REGISTER
router.post('/create', (req,res,next)=>{
    let newUser = new User({
        Name: req.body.Name,
        gender: req.body.gender,
        email: req.body.email,
        phone: req.body.phone,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err,user)=>{
        if(err){
            res.json({success: false, msg:'Failed to register user' })
        }
        else{
            res.json({success: true, msg:'User Registered' })

        }
    })
});

//Show list of users
router.get('/read',function(req,res){
    // Find all except one in mongodb
    // Use $ne for one user db.user.find( {_id:{$ne:"5848e9ecaec0f31372816a26"} })
    User.find()
                    .then(function(users){
                        res.send(users);
                    });   
});

// Update Role as Librarian
router.put('/updateuser',(req,res)=>{

    id=req.body._id,
    role = req.body.role,
   User.findByIdAndUpdate({"_id":id},
                                {$set:{"role":role}})
   .then(function(){
       res.send();
   })
 });

//  Edit Profile
router.put('/update',(req,res)=>{

        id=req.body._id,
        Name= req.body.Name,
        role=req.body.role,
        gender= req.body.gender,
        email= req.body.email,
        about= req.body.about,
        phone=req.body.phone,
        username= req.body.username,
        password = req.body.password

        bcrypt.genSalt(10, (err, salt)=>{
            bcrypt.hash(password, salt, (err, hash)=>{
                if(err) throw err;
                Password = hash;

   User.findByIdAndUpdate({"_id":id},
                                {$set:{
                                    "Name": Name,
                                    'gender': gender,
                                    'email': email,
                                    'role': role,
                                    'about':about,
                                    'phone': phone,
                                    'username': username,
                                    'password': Password
                                }})
   .then(function(err,user){
    res.json({success: true, msg: 'User Updated'})
   })
})
})
 });

//  Delete User
router.delete('/delete/:id', (req,res)=>{
    id = req.params.id;
    User.findByIdAndDelete({"_id":id})
    .then(()=>{
        res.send();
    })
});


// Authenticate
router.post('/authenticate', (req,res,next)=>{
    const email = req.body.email;
    const password = req.body.password;

    User.getUserByEmail(email, (err, user)=>{
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: 'User Not Found'})
        }

        User.comparePassword(password, user.password, (err, isMatch)=>{
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign({data:user}, config.secret, {
                    expiresIn: 604800 //1 Week

                });
                res.json({
                    success:true,
                    token:`Bearer ${token}`,
                    user: {
                        id: user._id,
                        Name: user.Name,
                        username: user.username,
                        email: user.email,
                        role: user.role,
                    }
                });
            }
            else{
            return res.json({success: false, msg: 'Wrong Password'});
            }
        });
    });
});


module.exports = router;