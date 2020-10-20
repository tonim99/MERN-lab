const { Schema, model } = require("mongoose")

const orchestraSchema = new Schema(
    {
        "conductor": String,
        "piano": String,
        "section": []
    }
)

const Orchestra = model('orchestra', orchestraSchema)

module.exports = Orchestra