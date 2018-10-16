function bar(){
    var j=0
    for (let i=j; i<10; i++){
        console.log('got i inside:',i)
    }
    console.log('outside, j=',j)//抓不到i 因為是用let宣告
}
bar()