/* In this section contains the model for
 * the database.
 * */
const mongoose = require('mongoose');
const Schema = mongoose.Schema

/*
* User Schema
* - This describe data saves to the db*/
const UserSchema = new Schema({
   username:{
      type:String,
      required:true
   },
   password:{
      type:String,
      required:true
   },
   role:{
      type:String,
      required:true
   },
});

module.exports = mongoose.model('user',UserSchema);
