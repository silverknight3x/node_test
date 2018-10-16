var x1 = function (x, y) {
    return x * y
}
var x2 = (x, y) => {
    return x * y
}
var x3 = (x, y) => x * y
console.log(x1(4, 4))
console.log(x2(5, 5))
console.log(x3(6, 6))