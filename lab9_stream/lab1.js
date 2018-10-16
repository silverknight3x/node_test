var fs = require('fs')
var data = ''

var readerStream = fs.createReadStream('.\\lab9_stream\\node_intro')
readerStream.setEncoding('UTF8')

readerStream.on('data',function(chunk){
    data+=chunk
    console.warn('.')
})
readerStream.on('end',function(){
    console.log('program read success, result=',data)
})

readerStream.on('error',function(error){
    console.log(error.stack)
})

console.log('main program terminated')