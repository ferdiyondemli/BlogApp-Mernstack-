const router = require("express").Router();

const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    const user = await User.findById(req.body.userId);
    !user && res.status(401).json("No user found ");

    if (req.body.password) {
      const saltRounds = 10;
      const salt = await bcrypt.genSaltSync(saltRounds);
      req.body.password = await bcrypt.hashSync(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.body.userId,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {}
  } else {
    res.status(401).json("you can update only your account");
  }
});
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.body.userId);

      //DELETE USER'S POSTS
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.body.userId);
        res.status(200).json("User and posts deleted.");
      } catch (error) {}

      //DELETE USER
    } catch (error) {
      res.status(404).json("User not Found");
    }
  } else {
    res.status(401).json("You can delete only your account");
  }
}); 
 
router.get("/:id", async (req, res) => {
  console.log(req.params);
  const user = await User.findById(req.params.id);
  const { password, ...others } = user._doc;
  res.status(200).json(others);
});

module.exports = router;
