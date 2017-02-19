import express from 'express'
import mongoose from 'mongoose'
import urlRoutes from './routes/url'

const app = express()
const port = process.env.PORT || 3000

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/urls')
  .then(() => console.log('Connected'))
  .catch((err) => console.log(err))

app.use('/new', urlRoutes)

app.listen(port)
console.log(`App running at port ${port}`)
