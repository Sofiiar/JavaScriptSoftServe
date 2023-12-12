const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((request, responce) => {
  const systemUptime = os.uptime(); 
  const uptimeMinutes = systemUptime / 60;
  
  responce.writeHead(200, {'Content-Type': 'text/html'});
  request.end(`
    <html>
      <head>
        <title>System Information</title>
      </head>
      <body>
        <h1>System information</h1>
        <p>Current user name: ${os.userInfo().username}</p>
        <p>OS type: ${os.type()}</p>
        <p>System work time: ${uptimeMinutes.toFixed(2)} minutes</p>
        <p>Current work directory: ${path.resolve('./')}</p>
        <p>Server file name: ${path.basename(__filename)}</p>
      </body>
    </html>
  `);
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
