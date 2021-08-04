const express = require('express')
const router = express.Router();

router.post('/user',(req,res)=>{
    res.send('login')
});

module.exports = router;