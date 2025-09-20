//? what is ejs?
// EJS (Embedded JavaScript) is a templating engine that allows you to generate HTML markup with plain JavaScript. It is often used in Node.js applications to render dynamic content on the server side before sending it to the client.
//? why is this useful?
// EJS is useful because it allows developers to create dynamic web pages by embedding JavaScript logic directly within HTML. This makes it easy to generate content based on data from a database or other sources, enabling the creation of interactive and personalized user experiences.

const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs'); // Set EJS as the templating engine
app.set('views', path.join(__dirname, 'views')); // Set the directory for views 
const products = [
  {
    id: 1,
    title: 'Product 1',
    price: 100,
  },
  {
    id: 2,
    title: 'Product 2',
    price: 200,
  },
  {
    id: 3,
    title: 'Product 3',
    price: 300,
  },
]

app.get('/', (req, res) => {
  res.render('home', { title: 'Home Page', products: products });
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Page' });
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});