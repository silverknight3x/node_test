var globalVar = 100
implyVar = 200

console.log('global=',globalVar, ', imply global=', implyVar)
delete global.globalVar
delete global.implyVar
console.log('after deletion, global=',globalVar)

function bar() {
    var var1 = 300
    var2 = 400
    console.log(var1, var2)
    delete this.var1
    delete this.var2
    console.log(var1)
    //console.log(var2)
}
bar()