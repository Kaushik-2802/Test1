const os=require('os')

console.log("Platform:",os.platform())
console.log("free memory:",os.freemem())
console.log("totla memory:",os.totalmem())
console.log("host name:",os.hostname())
console.log("networkimg interfaces:",os.networkInterfaces())
console.log("uptime:",os.uptime())