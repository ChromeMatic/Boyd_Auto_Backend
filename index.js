const express = require('express');
const app = express();
const port = process.env.port || 5000;

//import routes
const auth = require('./MiddleWares/auth.js');
const getRoute = require('./MiddleWares/Getdata.js');

//Middlewares
app.use('/api', auth);
app.use('/api', getRoute);

app.listen(port);