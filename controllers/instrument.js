// const Instrument = require("../models/instruments")
// const { Router } = require('express')
// const router = Router()
// const mongoose = require('mongoose')
// const toId = mongoose.Types.ObjectId

// router.get("/", async (req, res) => {
//    res.json(await Instrument.find({}));
//   });

// router.post("/", async (req, res) => {
//     res.json(await Instrument.create(req.body));
//   })

//   router.put("/:id", async (req, res) => {
//     res.json(await Instrument.findByIdAndUpdate(req.params.id, req.body, { new: true }));
//   })

//   router.delete("/:id", async (req, res) => {
//     res.json(await Instrument.findByIdAndRemove(req.params.id));
//   })

//   module.exports = router