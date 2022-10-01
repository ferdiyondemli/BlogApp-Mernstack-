const express = require("express");
const dotenv = require("dotenv").config();
const { urlencoded } = require("express");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const app = express(); 
const router = require("./routes/Auth");
const multer = require("multer");
 const path = require('path');

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB is connected");
  })
  .catch((err) => console.log("DB connection error : " + err));


app.use(express.json({ strict: false }));
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth/", router);
app.use("/api/users/", require("./routes/User"));
app.use("/api/posts/", require("./routes/Post"));
app.use("/api/categories/", require("./routes/Category"));
 

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    cb(null, req.body.name + "_" + uniqueSuffix);
  },
});



const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File uploaded");
});

// Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'client', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}



app.listen(port, () => {
  console.log(`Server listenning on ${port}`);
});
