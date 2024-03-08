const os = require('os')

const user = os.userInfo()

console.log(user);
console.log((os.uptime())/3600);
const currOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    cpus: os.cpus(),
    hostName: os.hostname(),
    platForm: os.platform(),
    support: os.machine(),
    idk: os.networkInterfaces(),
}
console.log(currOS);