function oops() {
    throw new Error('some bad happen, oops')
}

console.log('before oops')
//oops()
try {
    onpopstate()
} catch (error) {
    console.warn('some ooops happening, program will continue')
}
console.log('finish oops')
//不用try-catch印不出來