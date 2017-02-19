import mongoose from 'mongoose'

const UrlSchema = new mongoose.Schema({
  originalUrl: String,
  shortUrl: String
})

module.exports = mongoose.model('Url', UrlSchema)
