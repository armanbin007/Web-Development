// console.log("Hii");
// var slugify = require('slugify')

// let a = slugify('some string')
// console.log(a);
// const b = slugify('some string', '_')
// console.log(b);

const { createServer } = require('node:http');

const hostname = '127.0.0.69';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/bold');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});