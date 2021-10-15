const path = require('path')

//shows the symbol seprating path

console.log(path.sep)

//Helps in joining the provided paths

const JoinPath = path.join('/content','subfolder','test.txt')
console.log(JoinPath)

//gets the name of last file name or base file name

const base = path.basename(JoinPath)
console.log(base)

//its helps in returning a an absolute or complete paths 

const absolute = path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolute)