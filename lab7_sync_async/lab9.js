var events = require('events')

var eventEmitter = new events.EventEmitter()

var firstHandler = function doSomethingFirest() {
    console.log("do something when first happen")
    eventEmitter.emit('second')
}

eventEmitter.on('first', firstHandler)

eventEmitter.on('second',function() {
    console.log('data received successfully')
})

eventEmitter.emit('first')
console.log("program main thread ended")