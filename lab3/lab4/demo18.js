global.coffee = 'latte'
global.juice = 'lemonade'

function printSomething(name){
    console.time(global[name])
    console.log(global[name])
    console.warn(global[name])
    console.timeEnd(global[name])
}
printSomething('coffee')
printSomething('juice')
printSomething('beverage')