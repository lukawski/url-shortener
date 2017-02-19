import express from 'express'
import Url from '../models/Url'
import generateUrl from '../utilities/urlGenerate'

const router = express.Router()

router.get('/:shortUrl', (req, res) => {
  let id = generateUrl.decodeUrl(req.params.shortUrl)

  Url.findById(id, (err, doc) => {
    if (err) return console.log(`Error finding url in base, ${err}`)

    if (doc) {
      res.redirect(doc.originalUrl)
    } else {
      res.send(`Sorry, couldn't find given url: ${req.params.shortUrl}`)
    }
  })
})

module.exports = router
