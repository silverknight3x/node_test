var util =require('util')
var string1 = 'abcdefg1234567'
var array1 = Array.from(string1)
// debug from here
console.log(string1, array1)
// splice will cut an array, 
// return ==> cutting part
// original array will be changed
var array2 = array1.splice(3, 4)
console.log(array1, array2)
// pop will return from last
console.log(array2.pop(), array2)
console.log(array2.pop(), array2)
// push, will insert from last
array2.push('X')
console.log(array2)
// unshift will insert from head
array2.unshift('p')
console.log(array2)
var array3 = [1, 2, 3, 4, 5]
var result3 = array3.join()
console.log(typeof result3, result3)

// part2
var result4 = array3.join('-')
console.log(typeof result4, result4)
array4 = Array.from('34hello12')
console.log(typeof array4.sort(), array4.sort())
// the variable also changed
console.log(array4)
var sum = 0
array3.forEach(function(element){
    sum += element
}, this)
console.log('sum of array3=', sum)

// array表示式(我寫的)
// array3.forEach(element=>{sum += element})
// console.log('new sum of array3=', sum)

// part3
troubleWord = [undefined, null, 0, false, '']
for (i=0; i<troubleWord.length; i++){
    for (j=i+1; j < troubleWord.length; j++){
        result=util.format('"%s == %s"? "%s"',troubleWord[i],troubleWord[j],
        troubleWord[i]==troubleWord[j])
        console.log(result)
        //console.log(troubleWord[i],'==',troubleWord[j],"??",
        //troubleWord[i]==troubleWord[j])
    }
}