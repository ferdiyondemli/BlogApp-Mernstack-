const router = require("express").Router();
const bcrypt = require("bcrypt");

const User = require("../models/User");

router.post("/register", async (req, res) => {
  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSaltSync(saltRounds);
    const hashedpassword = await bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedpassword,
      profilPic: req.body.profilPic,
    });

    const user = await newUser.save();
    const {password,...others}=user._doc
    res.status(200).json(others);
    res.status(200).json(user);
  } catch (error) {
    res.status(500);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user&&res.status(500).json("User not found")
    const isPassword = bcrypt.compareSync(req.body.password, user.password);

    if (!isPassword) {
        res.status(500).json("Password is wrong")
    }
   const {password,...others}=user._doc
    res.status(200).json(others);
  } catch (error) {
    res.status(500);
  }
});
 


module.exports = router;
