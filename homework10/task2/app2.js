const http = require('http');
const getGreeting = require('./personalmodule');

http.createServer((request, response) => {
    const date = new Date().toLocaleString('pl-PL', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    
    const htmlResponse = `
        <html>
            <body>
                <p>Date of request: ${date}</p>
                <p>${getGreeting()}</p>
            </body>
        </html>`;

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(htmlResponse);
}).listen(8000);
