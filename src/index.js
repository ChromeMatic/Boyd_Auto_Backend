const express = require('express');
const app = express();
const port = process.env.port || 5000;

//import routes form middlewares
const Authentication =  require('./Routes/auth.js');
const getRoute = require('./MiddleWares/Getdata.js');
const editRoute =require('./MiddleWares/Editdata');
const deleteRoute = require('./MiddleWares/deleteRoute');

app.use(express.json());
app.use('./api',Authentication);
app.use('/api', getRoute);
app.use('/api/', editRoute);
app.use('/api', deleteRoute);

app.listen(port);