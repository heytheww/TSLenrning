"use strict";
// 类
class Person {
    constructor() {
        // 实例属性，通过实例访问
        this.name = "默认名字";
        this.age = 18;
    }
    // 类方法
    sayHello(name) {
        return "Hello";
    }
    static sayHi(name) {
        return "Hi";
    }
}
// 类属性，通过类访问
Person.avgAge = 18;
//只读属性
Person.baseName = "张";
;
const per = new Person();
Person.avgAge = 19;
per.age = 20;
// Person.name="三三"; // 报错
// Person.baseName="李"; // 报错
console.log(Person.avgAge, per.age);
// 构造器与this
class Dog {
    constructor(name, age) {
        // this表示当前实例
        this.name = name;
        this.age = age;
    }
    bark() {
        // 当前调用方法的对象，如dog1.bark()，this为dog1
        console.log(this, "旺旺旺");
    }
}
const dog = new Dog("旺财", 3);
// 继承
{
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        bark() {
        }
    }
    class Dog extends Animal {
        bark() {
            console.log(this.name + this.age + "旺旺旺");
        }
        run() {
            console.log("蹦蹦跳跳");
        }
    }
    class Cat extends Animal {
        constructor(name, age, sex) {
            // 调用父类构造器
            super(name, age);
            this.sex = sex;
        }
        bark() {
            // 引用父类的方法
            super.bark();
        }
    }
    const cat = new Cat("小喵", 3, "母");
    //抽象类
    //对于某些类，由于本身拿来实例化是不合适的，且我们也不希望被这样做
    //因此我们就把他设为抽象类，只可以继承，不可以实例化
    class Food {
        //  抽象类须有构造器
        constructor(name, color) {
            this.name = name;
            this.color = color;
        }
    }
    const man = {
        name: "张三",
        age: 18,
        sex: "男"
    };
    class People {
        constructor(name) {
            this.name = name;
        }
        sayHi() {
            console.log(this.name);
        }
    }
    /**
     * 抽象类和接口
     * 抽象类：
     * 1、可以普通方法，也可以抽象方法
     * 2、通过继承来使用，TS 类的设计为单继承
     *
     * 接口：
     * 1、只有抽象方法
     * 2、通过实现来使用，支持多继承
     */
}
