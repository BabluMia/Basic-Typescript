// Union Data Types
let userId : number | string | boolean ;

userId = true;

const userInfo =(userId :boolean | number)=>{
    console.log(userId)
} 

userInfo(true)