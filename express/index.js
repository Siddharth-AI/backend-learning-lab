//? what is middleware?
// Middleware is a function that has access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
// The next middleware function is commonly denoted by a variable named next.
// Middleware can perform a variety of tasks, such as modifying the request or response objects, ending the request-response cycle, or calling the next middleware function in the stack.
// Middleware functions can be used to execute code, modify the request and response objects, end the
// request-response cycle, and call the next middleware function in the stack.
// Middleware functions can be added to the request-response cycle using the app.use() method or by specifying them as the second argument to a route handler.
// Middleware functions can be used to handle errors, log requests, parse request bodies, and more
// Middleware functions can be added to the request-response cycle using the app.use() method or by
// specifying them as the second argument to a route handler.
// Middleware functions can be used to handle errors, log requests, parse request bodies, and more.

//? what is app.use()
// The app.use() method is used to mount middleware functions on the Express application.
// It can be used to define middleware that applies to all routes in the application or to specific paths.
// The app.use() method takes a path as the first argument and a middleware function as the second argument.
// If no path is specified, the middleware function will be executed for all requests to the application
// The app.use() method can be used to define middleware that applies to all routes in the application or to specific paths.
// If no path is specified, the middleware function will be executed for all requests to the application

const express = require('express');
const server = express();

const birds = require('./birds')

server.use('/birds', birds);

server.get('/', (req, res) => {
  res.send("home page")
})

const port = 3000;

server.listen(port, () => {
  console.log(`server is now running at port ${port}`)
})

