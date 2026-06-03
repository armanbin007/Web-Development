const express = require('express')
const router = express.Router()

// middleware that is specific to this router
// Router level middleware
const timeLog = (req, res, next) => {
    let x = Date.now();
    let y = new Date(x).toLocaleString();
  console.log('Time: ', y)
  next()
}
router.use(timeLog)

// define the home page route
router.get('/', (req, res) => {
  res.send('Blog home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About Blog')
})

module.exports = router
