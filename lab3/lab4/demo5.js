console.log("I have"+1+2+"computers")
console.log(1+2+"computers")
console.log("I have "+(1+2)+" computers")
x1 = 'Sunday, Monday, Tuesday'
console.log(x1.indexOf('Monday'))
console.log(x1.indexOf('Sunday'))
console.log(x1.indexOf('Holiday'))
// head, tail all inclode
console.log(x1.substr(5, 5))
console.log(x1.substr(20, 20))
console.log("Sunday".substr(3,3))
console.log("Sunday".slice(3,6))
x2 = 'Sunday,Monday, Tuesday, Wednesday'
y2 = x2.split(",")
y2.forEach(element => {
  console.log('get an element:'+element)  
});
y1 = x1.split(',')
y1.forEach(e=>{
    console.log('[2]get an element:'+e.trim())
})
console.log(typeof y2+', is array?'+Array.isArray(y2)+' content='+y2)