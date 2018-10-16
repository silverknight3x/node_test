var fs = require('fs')

path1 = 'lab7_sync_async\\data\\CBS_shrink.log'
console.log('program start')
fs.open(path1, 'r', (err, handle) => {
    if (err) {
        return console.log(err)
    }
    console.log("file opened, continue")
    var buffer = new Buffer(10000, 0)
    fs.read(handle, buffer, 0, 10000, null, (err, length) => {
        console.log("total:" + length + " being read")//最後進到fs.read內
        const result = buffer.slice(0, length)
        console.log("data read:" + result.toString())
        fs.close(handle, () => { })

    })
    console.log('inside fopen, program returned')//進到fs.open後 直接跑完
})
console.log('program should end')//main直接跑完