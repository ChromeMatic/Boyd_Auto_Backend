const mongoose = require('mongoose');
const Schema =  mongoose.Schema;


const VehicleImageSchema = new Schema(
    {
        VehicleID:{
          type:String,
          required:true
        },
        Image:{
            type:Image,
            required:true
        }
    }
);

module.exports = mongoose.model('VehicleImage',VehicleImageSchema);