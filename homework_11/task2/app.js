const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 8000;

const authors = [
  'David Flanagan',
  'Kyle Simpson',
  'John Resig',
  'Jeremy Keith'
];

const server = http.createServer((request, response) => {
  if (request.url === '/authors' && request.method === 'GET') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(authors));
  } else {
    let filePath = path.join(__dirname, request.url);
    if (request.url === '/') {
      filePath = path.join(__dirname, 'index.html');
    }
    serveFile(filePath, response);
  }
});

function serveFile(filePath, response) {
  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.json': 'application/json'
  };

  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        response.writeHead(404);
        response.end('Error: File not found');
      } else {
        response.writeHead(500);
        response.end('Error: Internal Server Error');
      }
    } else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.end(content, 'utf-8');
    }
  });
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
