var process = require('process')
console.log('current working directory:', process.cwd())
var fs = require('fs')
console.log("program started:")
var data = fs.readFileSync('lab7_sync_async\\data\\CBS_shrink.log')

console.log('data=', data.toString())
console.log("program terminated")