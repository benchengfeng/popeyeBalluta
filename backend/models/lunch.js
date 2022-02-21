const mongoose = require('mongoose')

const lunchSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
      },
      coordinates: {
        type: Array,
        required: false,
      },
        })

const LunchModel = mongoose.model('lunch',lunchSchema)
module.exports= LunchModel