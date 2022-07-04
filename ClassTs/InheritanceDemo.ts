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

// inheritance 

class Student extends User{
    userId : number;

    constructor(userName : string , age:number,userId : number){
        super(userName,age);
        this.userId = userId
    }
}
const student1 = new Student("Abdul" ,23, 1233)

// console.log(student1.userId)



class FemaleStudent extends Student{
    favourtiteBook : string;
    active : boolean;

    constructor(userName : string , age:number,userId : number,favouriteBook : string , active : boolean){
        super(userName,age,userId)
        this.favourtiteBook = favouriteBook,
        this.active = true
    }

    display = ():void => {
        console.log(`Name : ${this.userName}. Age : ${this.age} . Id : ${this.userId} . Favourite Book : ${this.favourtiteBook} . Attendence : ${this.active}`)
    }
}

const studentF2 = new FemaleStudent("Aklima",25,223445,"chemistry",true)

// console.log(studentF2)

studentF2.display()