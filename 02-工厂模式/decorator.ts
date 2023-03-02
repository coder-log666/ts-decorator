// 装饰器工厂
function test(data) {
    console.log('函数外')
    console.log(data)
    return function(target) {
        console.log('函数内')
        console.log(target)
    }
}

@test({
    'name': 'student'
})
class Student {
    public name: string
    public age: number
    public static school: string = '清华'
}