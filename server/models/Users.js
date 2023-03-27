const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
        }, 
    id:{
        type:Number,
        required: true
    },
    username:{
        type:String,
        required: true
    },
    cash:{
        type:Number,
        required:true
    },
    credits:{
        type:Number,
        required:true
    }
  });

  const userModel = mongoose.model("users", userSchema)

  module.exports = userModel