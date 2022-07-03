// object define way 1 
let userDetail: {id:number,name:string,age:number} = {
    id:221,
    name:"Moklis",
    age:24
}
// object define way 2 
let userDetail2: object = {
    id:221,
    name:"Moklis",
    age:24
}
// object define way 3
let userDetail3: {} = {
    id:221,
    name:"Moklis",
    age:24
}

// array of object
// way 1 
const users : Array<{id:number,name:string}> =[{id:1,name:'Aziz'},{id:2,name:'Afif'}]
// way 2 
const users2 : Array<{}> =[{id:1,name:'Aziz'},{id:2,name:'Afif'}]
// way 2
const users3 : object[] =[{id:1,name:'Aziz'},{id:2,name:'Afif'}]

// lests push a object 
const userDemo:{} = {id:3,name:'Jalali'}

// users3.push(userDemo)

// console.log(users3)

for (const key in users3) {
    console.log("----------" + users[key].name)
}