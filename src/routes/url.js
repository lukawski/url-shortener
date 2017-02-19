import express from 'express'
import mongoose from 'mongoose'
import Url from '../models/Url'

const router = express.Router()

router.get('/:url*', (req, res) => {
  let url = req.url.slice(1)
  if (!testUrl(url)) res.send('Invalid url')

  let urlObject = {
    originalUrl: url,
    shortUrl: generateUrl(url)
  }

  res.send(urlObject)
})

function testUrl (url) {
  return (/(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?\w+/).test(url)
}

function generateUrl (url) {
  
  return 0
}

module.exports = router
