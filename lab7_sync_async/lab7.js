var fs1 = require('fs')
path1 = 'lab7_sync_async\\data\\CBS_shrink.log'
path1_x = 'lab7_sync_async\\data\\CBS_shrink.loggg'
fs1.open(path1_x, 'r', (err, handle) => {
    if (err) {
        return console.log("error, copde=" + err.code + "\n\r, reason=" + err.message)
    }
    console.log("OK, can do something else")
})