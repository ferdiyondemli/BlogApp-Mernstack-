const express = require("express");
const dotenv = require("dotenv").config();
const { urlencoded } = require("express");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/Auth");
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB is connected");
  })
  .catch((err) => console.log("DB connection error : " + err));
app.use(express.json({ strict: false }));
app.use(express.urlencoded({extended :true}))
app.use("/api/auth/", router);
app.use("/api/users/", require("./routes/User"));
app.use("/api/posts/", require("./routes/Post"));

app.listen(port, () => {
  console.log(`Server listenning on ${port}`);
});
