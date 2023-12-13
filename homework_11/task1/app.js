const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    if (request.url === '/vote') {
        const timestamp = new Date().toLocaleString('en-GB', { timeZone: 'Europe/Warsaw' });
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end(`Your vote is accepted: ${timestamp}`);
    } else if (request.url === '/') {
        const filePath = path.join(__dirname, 'index.html');
        serveFile(filePath, 'text/html', response);
    } else {
        const filePath = path.join(__dirname, request.url);
        serveFile(filePath, 'application/javascript', response);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

function serveFile(filePath, contentType, response) {
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
