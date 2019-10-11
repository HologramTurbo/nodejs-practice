// OS MODULE aka Operating System
const os = require('os');

// PLATFORM  Darwin for Mac Win for Windows
console.log(os.platform());

// CPU Arch
console.log(os.arch());

// CPU CORE INFO
console.log(os.cpus());

// FREE MEMORY
console.log(os.freemem());

// TOTAL MEMORY
console.log(os.totalmem());

// HOME DIR
console.log(os.homedir());

// UPTIME 
console.log(os.uptime());