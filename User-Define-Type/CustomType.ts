// array of object
// way 1 
const users : Array<{id:number,name:string}> =[{id:1,name:'Aziz'},{id:2,name:'Afif'}]
// way 2 
const users2 : Array<{}> =[{id:1,name:'Aziz'},{id:2,name:'Afif'}]
// way 2
const users3 : object[] =[{id:1,name:'Aziz'},{id:2,name:'Afif'}]

// lests push a object 
const userDemo:{} = {id:3,name:'Jalali'}



// using Type for single object

type User = {id:number,name:string}

const singUser : User = {id:1,name:'Aziz'}

// array 

const users4 : User[] =[{id:1,name:'Jalali'},{id:2,name:'kalali'},{id:3,name:'malali'}]

// another type

type RequestType = "GET" | "POST"

const reqHandler =(requestType : RequestType):void =>{
    console.log(requestType)
}

reqHandler("GET")
