const fs = require('fs');
const http = require('http');
const url = require('url');
const { execSync } = require('child_process');

const root = 'C:/Users/Josh/Desktop/Opencode/Simulador E-C';

http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname;
  if (pathname === '/' || pathname === '') pathname = '/index.html';
  
  let filePath = root + pathname.replace(/\//g, '\\');
  if (pathname.includes('..')) {
    res.writeHead(403);
    res.end('403');
    return;
  }
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('404 Not Found');
      return;
    }
    const ext = pathname.split('.').pop().toLowerCase();
    const ct = {
      html: 'text/html',
      js: 'text/javascript',
      css: 'text/css',
      json: 'application/json',
      png: 'image/png',
      jpg: 'image/jpeg',
      jpeg: 'image/jpeg',
      svg: 'image/svg+xml'
    }[ext] || 'text/plain';
    res.writeHead(200, { 'Content-Type': ct });
    res.end(data);
  });
}).listen(8000, () => {
  console.log('Servidor corriendo en http://localhost:8000');
  try {
    execSync('start http://localhost:8000/', { stdio: 'ignore' });
  } catch (e) {}
});
