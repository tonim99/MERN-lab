const { Schema, model } = require("mongoose")
const mongoose = require("../db/connection")

const orchestraSchema = new Schema(
    {
        "name": String,
        "conductor": String,
        "instruments": [{type: mongoose.Types.ObjectId, ref: "Instrument"}]
    }
)

const Orchestra = model('Orchestra', orchestraSchema)

module.exports = Orchestra