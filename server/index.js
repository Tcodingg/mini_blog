const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cors());
const postRoutes = require("./routes/posts.js");

app.use("/posts", postRoutes);

const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@crud.rpq4m.mongodb.net/miniBlog?retryWrites=true`;
mongoose.connect(
   url,
   { useNewUrlParser: true, useUnifiedTopology: true },
   (err, db) => {
      if (err) {
         console.log("error" + err);
      } else {
         console.log("connected to database");
      }
   }
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log("server is running");
});
