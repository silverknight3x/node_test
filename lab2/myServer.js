var http = require('http')
function processRecord(request, response) {
    var body = 'Node.JS Tutorials\n'
    var contentLength = body.length
    response.writeHead(200,{
        'Content-Length':contentLength,
        'Content-Type':'text/plain'
    })
    response.end(body)
}
var server = http.createServer(processRecord)
console.log("server created, start listening port 8765")
server.listen(8765)