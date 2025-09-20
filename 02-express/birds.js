//? what is a router?
// A router is a way to organize your Express application into smaller, modular pieces.
// It allows you to define routes and middleware for a specific part of your application, making it easier to manage and maintain.
// Routers can be used to group related routes together, such as all the routes for a specific resource or feature. 
// They can also be used to define middleware that applies to all routes within the router.
// Routers can be created using the express.Router() method, and they can be mounted on a specific path using the app.use() method.
// Routers can be used to handle requests for specific resources, such as users, products, or orders, and can be used to define middleware that applies to all routes within the router.

//? this is a middleware function that will run for all requests to /birds/ok
// It logs the current time to the console
// The next() function is called to pass control to the next middleware function in the stack
// If you don't call next(), the request will hang and the response will not be sent
// This middleware can be used for logging, authentication, or any other pre-processing of requests

//? what is middleware?
// Middleware is a function that has access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
// The next middleware function is commonly denoted by a variable named next.
// Middleware can perform a variety of tasks, such as modifying the request or response objects, ending the request-response cycle, or calling the next middleware function in the stack.
// Middleware functions can be added to the request-response cycle using the app.use() method or by specifying them as the second argument to a route handler.
// Middleware functions can be used to handle errors, log requests, parse request bodies, and more 
// In Node.js, especially when using Express.js, middleware refers to functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
// Execute any code.
// Make changes to the req and res objects.
// End the request-response cycle.
// Call the next() function to pass control to the next middleware.


//? 🚀 Types of Middleware:
//? 1.Application-level Middleware
// Runs for all requests (like authentication, logging).

//? 2.Router-level Middleware
// Runs only for specific routes.

//? 3.Error-handling Middleware
// Catches errors and sends proper responses.

// javascript
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

//? 4.Built-in Middleware (Express)
// express.json() to parse JSON request bodies.
// express.urlencoded() to parse URL-encoded data.

//? 5.Third-party Middleware
// cors for handling cross-origin requests.
// morgan for logging HTTP requests.


const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
  res.send('bird home page')
})

router.use('/ok', (req, res, next) => {
  console.log('time', Date.now())
  next();
})


router.get('/about', (req, res) => {
  res.send('bird about page')
})

module.exports = router;