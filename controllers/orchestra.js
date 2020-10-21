const { Router } = require('express')
const {findById } = require('../models/orchestra')
const router = Router()
const Orchestra = require('../models/orchestra')
const Instrument = require('../models/instruments')
const mongoose = require('mongoose')
const toId = mongoose.Types.ObjectId

router.post('/newOrchestra', async (req, res) => {
    res.json(await Orchestra.create(req.body))
})

router.post('/instrument/:orchestraid', async (req, res) => {
    const instrument = await Instrument.create(req.body)
    const orchestra = await Orchestra.findById(req.params.orchestraid)
    instrument.orchestra = orchestra._id
    instrument.save()
    orchestra.instruments.push(instrument._id)
    orchestra.save()
    res.json(instrument)
})

router.get('/', async (req, res) => {
    res.json(await Orchestra.find({}).populate('instruments'))
})

router.get('/instrument', async (req, res) => {
    res.json(await Instrument.find({}))
})

router.put('/instrument/:id', async (req, res) => {
    res.json(await Instrument.findByIdAndUpdate(req.params.id, req.body, { new: true }));
})

router.delete('/instrument/:id', async (req, res) => {
    res.json(await Instrument.findByIdAndRemove(req.params.id));
})

router.put('/orchestra/:id', async (req, res) => {
    res.json(await Orchestra.findByIdAndUpdate(req.params.id, req.body, { new: true }));
})

router.delete('/orchestra/:id', async (req, res) => {
    res.json(await Orchestra.findByIdAndRemove(req.params.id));
})

module.exports = router