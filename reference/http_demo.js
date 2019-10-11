const http = require('http');

// CREATE SERVER OBJECT
http.createServer((req, res) => {
    res.write('Bankai Christmas');
    res.end();
}).listen(5000, () => console.log('Server Running'));