const express = require('express');
const server = express();

//? application level settings

server.set('view engine', 'ejs');

//? routing

// get
server.get('/', (req, res) => {
  res.send("home page");
})

// post
server.post('/api/data', (req, res) => {
  res.json(
    {
      message: 'data recevied',
      data: req.data,
    }
  )
})

//? error handling middleware

server.use((err, req, res, next) => {
  console.log(err.stack)
  res.status(500).send('something went wrong')
})



const port = 3000
server.listen(port, () => {
  console.log('server is running')
})



