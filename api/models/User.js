const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    
    unique: true,
  },
  profilPic: {
    type: String,
   default:""
  },


},{timestamps:true});

module.exports = mongoose.model("User", Userschema);
