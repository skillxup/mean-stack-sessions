const os = require("os");

console.log(`freemem(): ${os.freemem()}`);
console.log(`homedir(): ${os.homedir()}`);
console.log(`hostname: ${os.hostname()}`);
console.log(`endianess(): ${os.endianness()}`);
console.log(`loadavg(): ${os.loadavg()}`);
console.log(`platform(): ${os.platform()}`);
console.log(`release(): ${os.release()}`);