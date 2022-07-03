// object define way 1 
var userDetail = {
    id: 221,
    name: "Moklis",
    age: 24
};
// object define way 2 
var userDetail2 = {
    id: 221,
    name: "Moklis",
    age: 24
};
// object define way 3
var userDetail3 = {
    id: 221,
    name: "Moklis",
    age: 24
};
// array of object
// way 1 
var users = [{ id: 1, name: 'Aziz' }, { id: 2, name: 'Afif' }];
// way 2 
var users2 = [{ id: 1, name: 'Aziz' }, { id: 2, name: 'Afif' }];
// way 2
var users3 = [{ id: 1, name: 'Aziz' }, { id: 2, name: 'Afif' }];
// lests push a object 
var userDemo = { id: 3, name: 'Jalali' };
// users3.push(userDemo)
// console.log(users3)
for (var key in users3) {
    console.log("----------" + users[key].name);
}
