const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
fullname: {
  type:String,
  required: true
},

email: {
  type:String,
  required:true,
},

number: {
  type: Number,
  min:1,
  max:12,
  required:true
},

select: {
  type:String,
  enum: ['option1', 'option2', 'option3', 'option4', 'option5'], // Predefined set of values
  required:true

},
textarea: {
  type:String,
  required:true,
  minlength: 10, // Minimum length
    maxlength: 500
}
});
const User = mongoose.model('user', userSchema);
console.log(`USER MODEL LOADED`)

module.exports = User;