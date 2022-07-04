class User {
    // property , function , contractor 
    userName : string;
    age:number;

    constructor(userName : string , age:number){
        this.userName = userName ;
        this.age = age;
    }

    display = ():void => {
        console.log(`Name : ${this.userName}. Age : ${this.age}`)
    }
}




// object of class
const user1 = new User('Ahad',23)

// user1.display()

console.log(user1.age)
