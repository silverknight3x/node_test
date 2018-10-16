var fs1 = require('fs')
path1 = 'lab7_sync_async\\data\\CBS_shrink.log'
function FileObject() {
    this.filename = ""
    this.file_exists = function (callback) {
        var holdThis=this
        console.log("about to open:", holdThis.filename)
        fs1.open(holdThis.filename, 'r', function (err, handler) {
            if (err) {
                console.log('can not open:' + holdThis.filename)
                callback(err)
                return
            }
            console.log('the file that we proces is:' + holdThis.filename)
            console.log('now we process handler:', handler)
            fs1.close(handler, function () { })
            callback(null, true)
        })
    }
}

var fo1 = new FileObject()
fo1.filename = path1

fo1.file_exists((err, result) => {
    if (err) {
        console.log("error open file" + JSON.stringify(err))
        return
    }
})