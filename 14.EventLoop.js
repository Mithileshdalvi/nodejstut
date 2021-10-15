//Event Loop => It will comolete the easy task first and after that it will go for the complicated ones.

//EXAMPLE => 01
const { readFile } = require('fs')

console.log('started the first task')
//CHECK FILE PATH!!
readFile('./content/first.txt','utf8', (err, result)=> {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('Completed first task')
})
console.log('Starting with new task')

//OUTPUT(1) => started the first task
//             Starting with new task
//             Hello this is the first test file.
//             Completed first task

//EXAPMLE => 02

//Starting operating system process
console.log('first')
setTimeout(() => {
    console.log('second')
}, 0)
console.log('third')
//Completed and exited operating system

//EXAPMLE => 03

setInterval(() => {
    console.log('Hello World')
}, 2000)
console.log('I will Run first')
// Process stays alive unless we kill process by pressing CTRL+C or there's some unexpected error

// EXAMPLE => 04

const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request event')
    res.end('Hello People')
})

server.listen(5000, () => {
    console.log('Listening to the server on port : 5000...')
})