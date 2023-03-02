var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function test(target) {
    // debugger
    // target.school = '清华'
    target.prototype.school = '清华';
    target.prototype.printSchool = function () {
        console.log("".concat(target.prototype.school));
    };
}
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student = __decorate([
        test
        // @print()
        ,
        __metadata("design:paramtypes", [Object, Object])
    ], Student);
    return Student;
}());
debugger;
// console.log(Student.school)
// Student.printSchool()
var student = new Student('zs', 18);
student.printSchool();
//# sourceMappingURL=index.js.map