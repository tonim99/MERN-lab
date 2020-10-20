require('dotenv').config
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require('./DB/connection')
const cors = require('cors')
const corsOptions = require('./configs/cors')
const logger = require('morgan')


app.use(logger('dev'))
app.use(express.json())
app.get("/", (req, res) => {
    res.json({ hello: "Hello World!" });
  });

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

module.exports = app
