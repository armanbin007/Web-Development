const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public')) // used to give access to public folder files

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Hello It\'s Arman!')
})
app.get('/contact', (req, res) => {
  res.send('Hello Contact me on WhatsApp')
})
app.get('/blog/:slug', (req, res) => { //:slug = url parameters
    console.log(req.params);
    console.log(req.query);
    
  res.send(`Hello ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
