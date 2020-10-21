require('dotenv').config()
const mongoose = require('mongoose')
const db = mongoose.connection
const { MONGODBURI } = process.env;
const config = { useUnifiedTopology: true, useNewUrlParser: true }

mongoose.connect(MONGODBURI, config)

db.on("open", () => console.log("You are connected to Mongo"))
  .on("close", () => console.log("You are disconnected from Mongo"))
  .on("error", (err) => console.log(err));


module.exports = mongoose