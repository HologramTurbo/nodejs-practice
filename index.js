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
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, {
    //             'Content-Type': 'text/html'
    //         });
    //         res.end(content);
    //     })
    // 
    // res.writeHead(200, {
    //     'Content-Type': 'text/html'
    // });
    // res.end('<h1>WATER STYLE WATER DRAGON!!</h1>');
    // }
    // if (req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, {
    //             'Content-Type': 'text/html'
    //         });
    //         res.end(content);
    //     })
    // }

    // if (req.url === '/api/users') {
    //     const users = [{
    //             name: 'Luke Skywalker',
    //             age: 36
    //         },
    //         {
    //             name: 'Uzumaki Naruto',
    //             age: 27
    //         }
    //     ];
    //     res.writeHead(200, {
    //         'Content-Type': 'application/json'
    //     });
    //     res.end(JSON.stringify(users));
    // }


    // PRACTICAL EXAMPLE BELOW

    // BUILD FILE PATH
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    // EXTENSION OF FILE
    let extName = path.extname(filePath);

    // INITIAL CONTENT TYPE
    let contentType = 'text/html';

    // CHECK THE EXTENSION/FILE TYPE
    switch (exName) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // READ FILE
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code = 'ENOENT')
                // ENOENT = PAGE NOT FOUND
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                    res.end(content, 'utf8');
                })
            else {
                // SOME SERVER ERROR
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // SUCCESS
            res.writeHead(200, {
                'Content-Type': contentType
            });
            res.end(content, 'utf8');
        }
    });
});


const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));