var user1 = {name:'Mark',location:'Taipei',role:"RD"}
var user0 = {}
console.log(user1, user0)
var user2 = {}
// attribute not yet set
console.log(user2.name)
user2['name']='James'
user2['location']='Hsinchu'
console.log(user2.name, user2.location, user2.role)
user2['role']='FAE'
console.log(user2)
console.log('length for user2',Object.keys(user2).length)
delete user2.name
console.log('length for user2',Object.keys(user2).length)