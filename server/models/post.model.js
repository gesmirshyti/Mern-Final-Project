const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const postSchema = new mongoose.Schema({
    title: {
      type: String,
      required:[true,"Post Title is required"],
    },
    content: {
      type: String,
      required:[true,"Post Content is required"],
    },
    image: {
      type: String,
    },
    postDescription:{
      type:String,
      required:[true,"Post Description is required"],
    }
,

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    comments: [{
      postedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
      },
      post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
      },
      }],

    likes: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        }],
    // Duhen shtuar te tjera
  }, { timestamps: true });
  
  module.exports = mongoose.model('Post', postSchema);
