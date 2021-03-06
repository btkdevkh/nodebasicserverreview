const http = require('http')
const fs = require('fs')

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html')

  let path = './views/'

  switch (req.url) {
    case '/':
      path += 'index.html'
      res.statusCode = 200
      break
    case '/about':
      path += 'about.html'
      res.statusCode = 200
      break
    case '/about-me':
      res.statusCode = 301
      res.setHeader('Location', '/about')
      res.end()
      break
    default:
      path += 'notFound.html'
      res.statusCode = 404
      break
  }
  
  fs.readFile(path, (err, data) => {
    if(err) {
      console.log(err);
      res.end()
      return
    }

    res.end(data)
  })
})

app.listen(8000, 'localhost', () => console.log('Listening on port 8000'))
