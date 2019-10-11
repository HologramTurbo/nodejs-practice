//** */
// const Person = require('./person');
// const person1 = new Person('Clark Kent', 36);
// person1.greeting();
// console.log(__dirname, __filename);


//*** */
// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', (data) => console.log('Called Listener)', data));

// logger.log('Hello Bankai');

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(content);
        })
    }

    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(content);
        })
        // 
        // res.writeHead(200, {
        //     'Content-Type': 'text/html'
        // });
        // res.end('<h1>WATER STYLE WATER DRAGON!!</h1>');
    }

});


const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));