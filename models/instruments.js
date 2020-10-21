const { Schema, model } = require("mongoose")
const mongoose = require("../db/connection")

const instrumentSchema = new Schema(
    {
        "family": String,
        "name": String,
        "number": 0,
        "img": String,
        "orchestra": {type: mongoose.Types.ObjectId, ref: "Orchestra"}
    }
)

const Instrument = model('Instrument', instrumentSchema)

module.exports = Instrument