import mongoose from 'mongoose'

const UrlSchema = new mongoose.Schema({
  _id: Number,
  originalUrl: String,
  shortUrl: String
})

module.exports = mongoose.model('Url', UrlSchema)
