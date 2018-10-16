var fs1 = require('fs')
path1 = 'lab7_sync_async\\data\\CBS_shrink.log'
function FileObject() {
    this.filename = ""
    this.file_exists = function (callback) {
        console.log("about to open:", this.filename)
        fs1.open(this.filename, 'r',  (err, handler) => { //變成arrow ㄙㄧㄟ
            if (err) {
                console.log('can not open:' + this.filename)
                callback(err)
                return
            }
            console.log('the file that we proces is:' + this.filename)
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