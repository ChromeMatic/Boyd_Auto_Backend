const express = require('express');
const app = express();
const port = process.env.port || 5000;

//import routes
const auth = require('./MiddleWares/auth.js');
const getRoute = require('./MiddleWares/Getdata.js');
const editRoute =  require('./MiddleWares/Editdata.js');
const deleteRoute = require('./MiddleWares/deleteRoute.js');

//Middlewares
app.use(express.json());
app.use('/api', auth);
app.use('/api', getRoute);
app.use('/api/', editRoute);
app.use('/api', deleteRoute);

app.listen(port);