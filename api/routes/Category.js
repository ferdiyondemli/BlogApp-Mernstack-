const router = require("express").Router();

const User = require("../models/User");
const Cat = require("../models/Category");
const bcrypt = require("bcrypt");

//CREATE CAT
router.post("/", async (req, res) => {
  const newCat = new Cat(req.body);

  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const cats = await Cat.find();
    res.status(200).json(cats);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
