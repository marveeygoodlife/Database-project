const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
fullname: {
  type:String,
  required: true
},

email: {
  type:String,
  rewuired:true,
},

number: {
  type:String,
  required:true
},

collection: {
  type:String,
  required:true
},
textarea: {
  type:String,
  required:true
},
});

const User = mongoose.model('user', userSchema);
module.exports = User;