/**

//! Node.js http Module

//? The http module allows Node.js to create web servers, handle HTTP requests and responses, and make HTTP calls.
//? The http module is built into Node.js, so no installation is needed:
//? req (request) contains details of the incoming request.
//? res (response) is used to send data back to the client.
//? You can handle different routes and request methods.
*/

const http = require('http');


//? Checks req.url and req.method to serve different pages.

const server = http.createServer((req, res) => {
  // console.log(req,'req');
  const url = req.url;
  if (url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('index.page');
  } else if (url === '/about' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('about page');
  } else if (url === '/login' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('login page');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('this page does not exist');
  }
  res.end();
})
const port = 4000
server.listen(port, () => {
  console.log(`server is now listening on http://localhost:${port}`)
})