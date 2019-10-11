// fs MODULE FILE SHARE DEMO 

const fs = require('fs');
const path = require('path');

// CREATE FOLDER
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('Folder created...');
// });

// CREATE and WRITE TO THE FILE CREATED 
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'BANKAI FOREVER!!', err => {

//     if (err) throw err;
//     console.log('File written to...');
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'CHIDORI FOREVER!!', err => {

//         if (err) throw err;
//         console.log('File written to...');


//     });


// });

// READ A FILE
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// RENAME A FILE
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err) => {
    if (err) throw err;
    console.log('File Renamed...');
});