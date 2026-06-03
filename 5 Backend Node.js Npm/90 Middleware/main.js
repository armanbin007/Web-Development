const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
const blog = require('./routes/blog')
// app.use(express.static("public"))

app.use('/blog', blog)

// Middleware Application level
app.use((req, res, next)=>{
    let x = Date.now();
    let y = new Date(x).toLocaleString();
    fs.appendFileSync("log.txt", `${y} is a ${req.method}\n`)
    console.log("Kaj hoye geceee!");
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World! Express')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
