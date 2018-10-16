var myFunction = function() {
    throw new Error("oops")
    //console.log("hihihi")
}

function delay(ms){
    return new Promise(resolve=>setTimeout(resolve, ms))
}

console.log("before delay")
delay(3000).then(myFunction).catch((error)=>{
    console.log("error is::=>"+error)
})
console.log("delay return")