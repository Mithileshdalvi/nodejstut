const os = require('os')

// info about current users
const user = os.userInfo()
console.log(user)

// methods returns the system uptime in seconds

// const uptime = os.uptime()
// console.log(uptime)
//cana also write like 
console.log(`the system uptime is : ${os.uptime()} seconds`)

//Getting os info of system
const currentOS = {
    name : os.type(),
    release : os.release(),
    totolMem : os.totalmem(),
    freeMen : os.freemem(),
    ram : os.platform(),
}
console.log(currentOS)