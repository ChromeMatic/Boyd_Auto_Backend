const mongoose = require('mongoose');
const Schema = mongoose.Schema

// Vehicle Schema
const VehicleSchema = new Schema(
    {
        Name:String,
        Type:String,
        gasType:String,
        Year:{type:Number},
        Description:String,
        Price:String
    }
);

module.exports = mongoose.model('Vehicle',VehicleSchema);