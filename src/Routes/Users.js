const express = require('express');
const userRoute = express.Router();

// GetUser
userRoute.get('/getUsers',(req,res)=>{

});

// GetUser by ID
userRoute.get('/getUsersByID',(req,res)=>{

});

// Edit user
userRoute.patch('/editUser',(req,res)=>{

});

module.exports = userRoute;


