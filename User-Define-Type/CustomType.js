// array of object
// way 1 
var users = [{ id: 1, name: 'Aziz' }, { id: 2, name: 'Afif' }];
// way 2 
var users2 = [{ id: 1, name: 'Aziz' }, { id: 2, name: 'Afif' }];
// way 2
var users3 = [{ id: 1, name: 'Aziz' }, { id: 2, name: 'Afif' }];
// lests push a object 
var userDemo = { id: 3, name: 'Jalali' };
var singUser = { id: 1, name: 'Aziz' };
// array 
var users4 = [{ id: 1, name: 'Jalali' }, { id: 2, name: 'kalali' }, { id: 3, name: 'malali' }];
var reqHandler = function (requestType) {
    console.log(requestType);
};
reqHandler("GET");
