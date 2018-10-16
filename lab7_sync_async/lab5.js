const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            console.log("no error")
            // part1
            //resolve(1000)
            throw new Error('error inside setTimeout, promise')
        } catch (e) {
            reject(e)
        }
    }, 2000)
})
//透過promise 來讓主執行序抓附執行序error
promise.then(result => console.log("OK, return=" + result))
    .catch(error => console.error("generated exception:" + error))