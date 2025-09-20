const express = require('express');
const server = express();

//? root route
server.get('/', (req, res) => {
  res.send("home page")
})

//? get all products
server.get('/products', (req, res) => {
  const products = [
    {
      id: 1,
      title: 'apple'
    },
    {
      id: 2,
      title: 'orange'
    }
  ]
  res.json(products)
})

//? get a single product
server.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id) //getting the id
  const products = [
    {
      id: 1,
      title: 'apple'
    },
    {
      id: 2,
      title: 'orange'
    }
  ]
  const getSingleProduct = products.find(product => product.id === productId)
  if (getSingleProduct) {
    res.json(getSingleProduct)
  }
  else {
    res.status(404).send("product is not found")
  }
})

const port = 3000;
server.listen(port, () => {
  console.log(`server is now running at port ${port}`)
})

