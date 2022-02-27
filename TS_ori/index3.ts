// 类

class Person {
    // 实例属性，通过实例访问
    readonly name: string = "默认名字";
    age: number = 18;

    // 类属性，通过类访问
    static avgAge: number = 18;
    //只读属性
    static readonly baseName: string = "张"

    // 类方法
    sayHello(name: string): string {
        return "Hello";
    }
    static sayHi(name: string): string {
        return "Hi";
    }
};

const per = new Person();
Person.avgAge = 19;
per.age = 20;
// Person.name="三三"; // 报错
// Person.baseName="李"; // 报错
console.log(Person.avgAge, per.age);



// 构造器与this
class Dog {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        // this表示当前实例
        this.name = name;
        this.age = age;
    }
    bark() {
        // 当前调用方法的对象，如dog1.bark()，this为dog1
        console.log(this, "旺旺旺");
    }
}

const dog: Dog = new Dog("旺财", 3);


// 继承
{
    class Animal {
        name: string;
        age: number;
        constructor(name: string, age: number) {
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
        sex: string;

        constructor(name: string, age: number, sex: string) {
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

    abstract class Food {
        name: string;
        color: string;

        //  抽象类须有构造器
        constructor(name: string, color: string) {
            this.name = name;
            this.color = color;
        }

        abstract eat(name: string): void;
        abstract cook(name: string): number | string;
    }

    /**
     * 在限制对象的类型上，以下两种方式功能一致
     * 接口，定义了类的结构（属性、方法）
     * 此接口非彼接口，它与Java的接口有点不同
     */

    type myType = {
        name: string,
        age: number
    };

    interface myInterface {
        name: string;
        age: number;
    }

    // 接口可以重复定义，实际效果是同名接口的总和
    interface myInterface {
        sex: string;
    }

    const man: myInterface = {
        name: "张三",
        age: 18,
        sex: "男"
    }

    // 限制类的结构
    interface myInterface2 {
        name: string;

        sayHi(): void;
    }
    interface myInterface3 { }

    class People implements myInterface2, myInterface3 {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHi(): void {
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