require('dotenv').config
const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3000
const mongoose = require('./db/connection')
const orchestraRouter = require('./controllers/orchestra')



app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.get("/", (req, res) => {
    res.send('hello world')
  });

app.use("/orchestra", orchestraRouter)



app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

