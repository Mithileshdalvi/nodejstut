// npm - global commands, comes with nodejs
// npm --version

// local dependency - use it only in this particular project
// npm install (i) <packageName>

// global dependency - use it in any project 
// npm install -g <packageNmae>
// sudo install -g <packageName> (on mac)

// package.json - mannifest filr(stores important info about package/project)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newitems = _.flattenDeep(items);
console.log(newitems)