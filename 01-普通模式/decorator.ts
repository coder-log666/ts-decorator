// 普通装饰器
function test(target) {
    console.log('test')
    console.log('target', target.school)
}

@test
class Student {
    public name: string
    public age: number
    public static school: string = '清华'
}