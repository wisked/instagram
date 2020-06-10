
const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');

//simple schema
const CommentSchema = new mongoose.Schema({
  post_id: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  user_id: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  display_src: {
    type: [Array, String],
    required: true,
  },
  text: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  likes: {
    type: [String, Number],
    required: true,
    minlength: 3,
    maxlength: 255
  },
  comments: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255
  },
  //give different access rights if admin or not 
  isAdmin: Boolean
});


const User = mongoose.model('User', PostSchema);
//custom method to generate authToken 
PostSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get('myprivatekey')); //get the private key from the config file -> environment variable
  return token;
}


//function to validate user 
function validateUser(user) {
  const schema = {
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(4).max(255).required().email(),
    password: Joi.string().min(3).max(255).required()
  };

  return Joi.validate(user, schema);
}


// exports.validate = validateUser;
module.exports = User;