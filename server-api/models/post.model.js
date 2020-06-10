
const config = require('config');
const mongoose = require('mongoose');

//simple schema
const PostSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  user_id: {
    type: mongoose.ObjectId,
    required: true,
  },
  display_src: {
    type: [Array, String],
    required: true,
  },
  caption: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  likes: {
    type: [String, Number],
    required: true,
    minlength: 3,
    maxlength: 255
  },
  comments: {
    type: Array,
    required: true,
    minlength: 3,
    maxlength: 255
  },
});


module.exports = mongoose.model('Post', PostSchema); 