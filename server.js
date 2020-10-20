require('dotenv').config
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const logger = require('morgan')

app.use(logger('dev'))

app.get("/", (req, res) => {
    res.json({ hello: "Hello World!" });
  });

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

module.exports = app
