const mongoose = require('mongoose');
const Schema =  mongoose.Schema;


const VehicleImageSchema = new Schema(
    {
        VehicleID:{
          type:String,
          required:true
        },
        desc:String,
        Image:{
           type: Buffer,
            required:true
        }
    }
);

module.exports = mongoose.model('VehicleImage',VehicleImageSchema);