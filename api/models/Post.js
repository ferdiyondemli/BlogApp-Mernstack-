const mongoose = require("mongoose");

const Postschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required:false

     },
    photo: {
      type: String, 
      default: "",
      required:false
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", Postschema);
