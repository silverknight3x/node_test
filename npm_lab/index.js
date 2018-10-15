var request = require('request')
request('https://www.uuu.com.tw',function(error,response,body){
    if(console.log(!error && response.statusCode==200)){
        console.log(body)
    }else{
        console.log(error)
        console.log(response.statusCode)
        console.log(body)       
    }
})