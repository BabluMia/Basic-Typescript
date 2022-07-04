var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// inheritance 
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userName, age, userId) {
        var _this = _super.call(this, userName, age) || this;
        _this.userId = userId;
        return _this;
    }
    return Student;
}(User));
var student1 = new Student("Abdul", 23, 1233);
// console.log(student1.userId)
var FemaleStudent = /** @class */ (function (_super) {
    __extends(FemaleStudent, _super);
    function FemaleStudent(userName, age, userId, favouriteBook, active) {
        var _this = _super.call(this, userName, age, userId) || this;
        _this.display = function () {
            console.log("Name : ".concat(_this.userName, ". Age : ").concat(_this.age, " . Id : ").concat(_this.userId, " . Favourite Book : ").concat(_this.favourtiteBook, " . Attendence : ").concat(_this.active));
        };
        _this.favourtiteBook = favouriteBook,
            _this.active = true;
        return _this;
    }
    return FemaleStudent;
}(Student));
var studentF2 = new FemaleStudent("Aklima", 25, 223445, "chemistry", true);
// console.log(studentF2)
studentF2.display();
