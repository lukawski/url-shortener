import mongoose from 'mongoose'

var CounterSchema = new mongoose.Schema({
  _id: String,
  urlCount: Number
})

module.exports = mongoose.model('Counter', CounterSchema)
