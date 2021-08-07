const mongoose = require('mongoose')

module.exports = async function connection(){
    try{
        const connection_Params ={
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(process.env.DB_CONNECTION,connection_Params);
        console.log('MongoDB connection established');
    }catch (err){
        console.log(err);
        console.log('MongoDB error '+err);
    }
};