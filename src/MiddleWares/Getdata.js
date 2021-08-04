const express = require('express');
const GetRouter = express.Router();

GetRouter.get('/get', (req,res)=>{
    res.send('Get data');
});

GetRouter.get('/getByID',(req,res)=>{
    res.send('get by data by Id')
});

module.exports = GetRouter;