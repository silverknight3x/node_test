x1 = "Foo,foo".replace(/[Ff]/g,'q')
console.log(x1)
x2 = "Foo, foo".replace(/f/ig,'q')
console.log(x2)
x3 = "Foo, foo, Goo, goo".replace(/[fg]/ig,'q')
console.log(x3)
x4 = "Ffoo, fFoo, Foo, foo".replace(new RegExp("[Ff]",'g'),'q')
console.log(x4)
x5 = "Foo, foo for Mark and Frank".replace(/[Ff]oo/g,'qoo')
console.log(x5)