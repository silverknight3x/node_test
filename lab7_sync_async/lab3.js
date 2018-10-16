try {
    setTimeout(() => {
        throw new Error('haha')
    }, 2000)
    //throw new Error('haha')
} catch (e) {
    console.log('caught an error' + e)
}
//主執行序抓不到副執行序的error