const express = require('express')
const blog = require('./routes/blog')
const app = express()
const port = 3000
app.use(express.static("public"))
app.use('/blog', blog)



app.get('/', (req, res) => {
  res.send('Hello World! Express')
})
app.post('/', (req, res) => {
    console.log("It's a post req");
    res.send('Hello World! Post')
}).put('/', (req, res) => {
    console.log("It's a put req");
    res.send('Hello World! PUT')
})

app.get("/index", (req, res) => {
    console.log("It's File");
    res.sendFile('templates/index.html', {root: __dirname})
})
app.get("/api", (req, res) => {
    res.json({a:10, b:20})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
