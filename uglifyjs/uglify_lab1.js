var object1 ={
    "foo":200,
    bar:100
};
object1.foo +=object1.bar
console.log(object1.foo);


// uglifyjs uglify_lab1.js
// uglifyjs uglify_lab1.js -c -m --mangle-props
// uglifyjs uglify_lab1.js -c -m --mangle-props reserved=[foo,bar]