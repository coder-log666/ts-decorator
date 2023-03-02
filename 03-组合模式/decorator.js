var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function test1(target) {
    console.log('普通模式1');
}
function test2(target) {
    console.log('普通模式2');
}
function test3() {
    console.log('test3--外');
    return function (target) {
        console.log('test3--内');
    };
}
function test4() {
    console.log('test4--外');
    return function (target) {
        console.log('test4--内');
    };
}
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.school = '清华';
    Student = __decorate([
        test1,
        test2,
        test3(),
        test4()
    ], Student);
    return Student;
}());
//# sourceMappingURL=decorator.js.map