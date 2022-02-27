"use strict";
// 属性的封装 - 保护类的属性
// 属性可被随意修改将导致对象中的数据变得不安全
// 通过类修饰符解决这个问题
// 默认为public，属性可被随意修改
{
    class Person {
        constructor(name, sex, age) {
            this.name = name;
            this.sex = sex;
            this.age = age;
        }
    }
    // 最强安全性
    // private修饰的属性，只有两种修改方式：
    // 1、构造器传入 
    // 2、调用实例方法修改，这种方法在java中被称为setter
    // 此外，这种方式也给属性的访问带来麻烦，我们同样只能通过方法return该属性来访问，在java中称为getter
    // 这种setter和getter模式在C#中被吸收为语法:
    /**
     * get{
             return _name;
        }
        set{
            _name = value;
        }
     */
    class Person2 {
        constructor(name, sex, age, height) {
            this.name = name;
            this.sex = sex;
            this.age = age;
            this.height = height;
        }
        setName(name) {
            this.name = name;
        }
        getName() {
            return this.name;
        }
    }
    // 此外，private属性也不可以被子类访问，protected可以
    class Person3 extends Person2 {
        showName() {
            // 无法访问name，可以访问height
            // console.log(this.name);
            console.log(this.height);
        }
    }
    // 泛型
    // 当一种类型是什么要在实际中才能确定是，我们使用泛型
    // 泛型就是类型的抽象表示（代表）
    // 当以下函数的参数与返回值类型一致，但是无法确定是什么具体类型时，用泛型
    function fn(a) {
        return a;
    }
    // 能否使用any？不行，一是关掉了类型检查，这将埋下隐患，二是无法体现两者类型一致
    function fn2(a) {
        return a;
    }
    function fn3(a, b, c) {
        return a;
    }
    function fn4(a, b, c) {
        return c;
    }
    // 在调用含泛型函数时，一般会自动推定泛型的类型，我们也可手动指定
    fn2(1);
    fn4(1, "2", 3);
    fn4(1, "2", 3);
}
