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
  aboutMe: {
    type: String,
    default:"I’ve seen how technology can connect people worldwide, and I’ve led the development of new products to grow that connection. In my next role, I want to work with customers on a global scale and demonstrate the worldwide usability of our company’s products.",
    
  },


},{timestamps:true});

module.exports = mongoose.model("User", Userschema);
