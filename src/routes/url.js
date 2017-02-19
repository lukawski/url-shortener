import express from 'express'
import mongoose from 'mongoose'
import Url from '../models/Url'
import Counter from '../models/Counter'
import generateUrl from '../utilities/urlGenerate'

const router = express.Router()

global.counter = 10001

router.get('/:url*', (req, res) => {
  console.log(req.hostname, req.protocol)
  global.counter++
  let url = req.url.slice(1)
  if (!testUrl(url)) return res.send('Invalid url')

  Url.findOne({originalUrl: url}, (err, data) => {
    if (err) return console.log(`Error finding url in db, ${err}`)
    if (data) {
      res.send(data)
    } else {
      Counter.findOneAndUpdate({_id: 'url_counter'}, {$inc: {urlCount: 1}}, {new: true}, (err, data) => {
        if (err) return console.log(`Error finding counter in db, ${err}`)
        console.log(data.urlCount, data)
        let urlObject = new Url({
          _id: data.urlCount,
          originalUrl: url,
          shortUrl: `${req.protocol}://${req.hostname}/${generateUrl.encodeUrl(data.urlCount)}`
        })

        urlObject.save((err) => {
          if (err) return console.log(`Error saving url in db, ${err}`)

          res.send(urlObject)
        })
      })
    }
  })
})

function testUrl (url) {
  return (/(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?\w+/).test(url)
}

module.exports = router
