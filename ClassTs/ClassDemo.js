var User = /** @class */ (function () {
    function User(userName, age) {
        var _this = this;
        this.display = function () {
            console.log("Name : ".concat(_this.userName, ". Age : ").concat(_this.age));
        };
        this.userName = userName;
        this.age = age;
    }
    return User;
}());
// object of class
var user1 = new User('Ahad', 23);
// user1.display()
console.log(user1.age);
