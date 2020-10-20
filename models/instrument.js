const { Schema, model } = require("mongoose")

const instrumentSchema = new Schema(
    {
        "family": String,
        "name": String,
        "number": 0
    }
)

const Instrument = model('instrument', instrumentSchema)

module.exports = Instrument