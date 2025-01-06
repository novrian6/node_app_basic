const http = require('http'); // Import the HTTP module

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Check for the /api endpoint and GET method
  if (req.url === '/api' && req.method === 'GET') {
    // Respond with a JSON object
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Welcome to Node.js API' }));
  } else {
    // Respond with a 404 error for other routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});