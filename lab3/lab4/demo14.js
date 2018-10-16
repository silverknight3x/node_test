var emp1 = {
    username:'Mark',
    role:'R&D',
    location:'Taipei'
}

for (key in emp1){
    console.log('key=',key,'value='+emp1[key])
}
var chosen = [3,5,21,29,32,40,48]
for (idx in chosen){
    console.log('index=',idx,',value=', chosen[idx])
}
for (item of chosen){
    console.log("result=",item)
}