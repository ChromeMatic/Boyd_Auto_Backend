const express = require('express');
const app = express();
const port = process.env.port || 5000;
require('dotenv/config');
const cors = require('cors');
const bodyParser = require('body-parser');
const DB_connection = require('./DB_config/DB_connection.js');

//import routes form middlewares
const Authentication =  require('./Routes/auth.js');
const getRoute = require('./MiddleWares/Getdata.js');
const editRoute =require('./MiddleWares/Editdata.js');
const deleteRoute = require('./MiddleWares/deleteRoute.js');
const PostRoute = require('./MiddleWares/PostRoute.js')

// use middlewares
app.use(cors);
app.use(bodyParser.json());
app.use(express.json());
app.use('./api',Authentication);
app.use('/api', getRoute);
app.use('/api',PostRoute);
app.use('/api', editRoute);
app.use('/api', deleteRoute);

// Connect to database
DB_connection();
app.listen(port);