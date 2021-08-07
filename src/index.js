const express = require('express');
const app = express();
const port = process.env.port || 5000;
const mongoose = require('mongoose');
require('dotenv/config');
const cors = require('cors');
const bodyParser = require('body-parser');


//import routes form middlewares
const Authentication =  require('./Routes/auth.js');
const getRoute = require('./MiddleWares/Getdata.js');
const editRoute =require('./MiddleWares/Editdata');
const deleteRoute = require('./MiddleWares/deleteRoute');

// use middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use('./api',Authentication);
app.use('/api', getRoute);
app.use('/api/', editRoute);
app.use('/api', deleteRoute);

// Connect to database
mongoose.connect(
    process.env.DB_connection+'',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    ()=>{
        console.log('Connected too DB');
    }
);

app.listen(port);