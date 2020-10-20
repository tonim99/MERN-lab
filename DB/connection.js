require('dotenv').config()


const mongoose = require('mongoose')
const config = { useUnifiedTopology: true, useNewUrlParser: true }
const DB = mongoose.connection

DB.on("open", () => console.log("You are connected to Mongo"))
  .on("close", () => console.log("You are disconnected to Mongo"))
  .on("error", (err) => console.log(err));


module.exports = mongoose