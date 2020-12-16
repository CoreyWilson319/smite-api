require('dotenv').config()
const mongoose = require("mongoose");
const express = require("express");

const app = express();

mongoose.connect(`${process.env.MONGO_URI}`)

const db = mongoose.connection;

const smite = require('./controllers/smite.js')

app.use('/smite', smite)

db.once("open", () => {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});
  
  db.on("error", (err) => {
    console.log(`Error`, err);
});

app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
    res.send("Hello from Home Route, Backend");
  });




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});


