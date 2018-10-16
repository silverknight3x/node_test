var fs1 = require('fs')
path1 = 'lab7_sync_async\\data\\CBS_shrink.log'
path1_x = 'lab7_sync_async\\data\\CBS_shrink.loggg'
fs1.open(path1_x, 'r', (err, handle) => {
    if (err) {
        return console.log("error, copde=" + err.code + "\n\r, reason=" + err.message)
    }
    console.log("OK, can do something else")
    var buffer = new Buffer(10000, 0)
    fs.read(handle, buffer, 0, 10000, null, (err, length) => {
        console.log("total:" + length + " being read")
        const result = buffer.slice(0, length)
        console.log("data read:" + result.toString())
        fs.close(handle, () => { })

    })
    console.log('inside fopen, program returned')
})