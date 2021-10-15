//Streams:
//They are used to read and write sequentially
//Also used to manipulate streaming data (eg:handling of continuos source or a big files)
//Diff Types: 
//Write,Read,Duplex and Transform
//It is an advance topic in node
//default 64kb
//last buffer - remainder
//highWaterMark - control size

//Readfile:

// const { readFileSync, writeFileSync } = require('fs')
// console.log('start')
// const first = readFileSync('./content/first.txt' , 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
    './content/result-sync.txt','utf8',
    `Here is the result : ${first} ${second}`,
    { flag : 'a' }
)

console.log('done with this task')
console.log('new task')

//New Example
// (step 1)
// const { writeFileSync } = require('fs')
// for (let i = 0; i < 10000; i++) {
//     writeFileSync(
//         './content/big.txt',`hello world ${i}\n`,
//         {flag : 'a'}
// )}

const { createReadStream } = require('fs')

const stream = createReadStream('../content/big.txt')
//Event = 'data'
stream.on('data' , (result) => {
    console.log(result)
})
//Event = 'error'
stream.on('error', (result) => {
    console.log(result)
})
//in above example output will be in buffer chunks or bytes