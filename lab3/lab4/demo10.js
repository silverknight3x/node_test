function echoMe(name) {
    console.log("echo:" + name)
}
echoMe('Mark Ho')
echoMe()
echoMe('a','b')
echoMe(['a','b'])
// parameters are not direct pass in
function mySum() {
    var sum = 0
    for (var i=0; i< arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}
console.log("result=",mySum(1,2,3,4,5,6,7))