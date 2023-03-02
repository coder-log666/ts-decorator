function test(target) {
    // debugger
    // target.school = '清华'
    target.prototype.school = '清华'
    target.prototype.printSchool = () => {
        console.log(`${target.prototype.school}`)
    }
}

// function print() {
//     return (target) => {
//         target.print = () => {
//             console.log(target.name, target.age)
//         }
//     }
// }

interface Student {
    printSchool: () => void
}

@test
// @print()
class Student {
    public static school: string
    name: string
    age: number
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
debugger
// console.log(Student.school)
// Student.printSchool()
let student = new Student('zs', 18)
student.printSchool()
