function foo(){
    implyGlobal = 500;
    console.log("before current inside foo,",current)
    var current = 400;
    console.log("before current inside foo,",current)
    console.log("inside , implyGlobal=",implyGlobal)
}

//console.log(implyGlobal)
//console.log(current)

//console.log(implyGlobal)
foo()
console.log(implyGlobal)
//console.log(current)