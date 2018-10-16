var x = function (a, b) {
    return a * b
}
console.log(x(3, 5))

var token1 = 'abc'
var token = '000'
var y = function() {
    var token = '***'
    var token2 = 'def'
    console.log('token2',token2)
    console.log('token',token)
}
//console.log('token2',token2)
y()
//console.log('token2',token2)
console.log('token1',token1)
console.log('token',token)