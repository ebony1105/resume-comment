!function () {
    var person = {
        name: 'frank',
        age: 18
    }
    window.frankGrowUp = function () {
        person.age += 1;
        return person.age;
    }
}.call()


//因为所有的代码已经都被封装成了局部变量，如果要想访问局部变量，我们可以使用window这个对象来存储这样方便函数之间使用了