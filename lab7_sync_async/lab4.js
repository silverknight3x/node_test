console.log('before execution')
setTimeout(()=>{
    try{
        throw new Error("HoHo")
    }catch(e){
        console.warn("caught an error, error detail",e)
    }
    console.log("after timeout, do something else")
},2000)
console.log('after return')
//try catch加在附執行緒上