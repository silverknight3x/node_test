//console.log(PROGRAM_TITLE)
const PROGRAM_TITLE = 'hello'
//PROGRAM_TITLE += " world"
console.log(PROGRAM_TITLE)

const MAX_NUMBER = 1024;
let i = 100
const CONST2 = i + 1
console.log(CONST2)
i += 20
console.log('i=', i)
console.log('const2=', CONST2)

const MY_ARRAY = [1, 2, 3, 4, 5]
var array1 = [1, 2, 3, 4, 5]
console.log(MY_ARRAY)
console.log(array1)
MY_ARRAY.push(6)//就算是readonly push也可以 因為是free的,可以疊上去
array1.push(6)
console.log(MY_ARRAY)
console.log(array1)
//MY_ARRAY = [6,7] //readonly 這樣會出錯 不可以重新指向
array1 = [6,7]
console.log(array1)