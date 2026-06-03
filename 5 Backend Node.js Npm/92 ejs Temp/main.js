const express = require('express')
const app = express()
const port = 3000

// ejs template is used to put values from express to template view engine (ejs)
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName = "Nike"
    let searchText = "Search Now"
    // let arr = [10,20,30]
  res.render("index", {siteName: siteName, searchText: searchText})
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Why and when?"
    let blogContent = "It's a good brand"
  res.render("blogpost", {blogTitle: blogTitle, blogContent: blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})