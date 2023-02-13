//Operating System
const os = require('os');

// platform : returns the os you're using..
// darwin : mac, win32 : windows

console.log(os.platform());

// arch : returns CPU architecture
console.log(os.arch());

//  cpus : returns CPU Core info
console.log(os.cpus());

// freemem : returns free memory
console.log(os.freemem());

// totalmem : returns total memory
console.log(os.totalmem());

// homedir : returns home directory
console.log(os.homedir());

// uptime : returns uptime, i.e. the amount of time your system has been up in seconds 
console.log(os.uptime());
