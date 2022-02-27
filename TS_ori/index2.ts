
const zex:number=1;
{
// 字面量赋值
let a:10;
let a1:number;
let b:10=10;
a=10;
a1=10;

// 用 或符号 构成 联合类型
let c:"male"|"female";
c="male";
c="female";

let d:string|number;
d=10;
d="hello";

// 任意类型 - 关闭类型检测
let e:any;
e=10;
e="female";
e=true;

// 隐式any
let f;
f=10;
f="female";
f=true;

// 赋值
// 以下不报错，这导致a的类型检测失效
a1=e;

// unknown同any差不多，但是可解决以上问题，是一个类型安全的any
let g:unknown;
// a=g;报错，应改为

if(typeof g == "number"){
    a1=g;
}

//断言：判断的语言，根据实际情况，把某个变量人为（自己）地断定为某种类型，跳过编译
a1 = g as number;
a1 = <number>g;


//函数的返回值

//返回值为number|string型
function sum(a:number,b:number){
    if(a>b){
        return a+b;
    }else{
        return a+b+"";
    }
}

function sum2(a:number,b:number):number|string{
    if(a>b){
        return a+b;
    }else{
        return a+b+"";
    }
}

// 空返回
function sum3(a:number,b:number):void{
    return;
}
function sum4(a:number,b:number):void{}
function sum5(a:number,b:number):void{
    return undefined;
}

// never：永远不会返回结果
// 没有返回值也是一种返回值，而never是空空
// 在程序报错时，代码立即停止执行，程序结束，函数结束，所以永远不会有值返回，事情不会发生
function err():never{
    throw new Error("err");
}

}

{
// object其实是无用的，因为ts一且皆对象，并没有起到类型限制的作用
let a:object;
a={};
a=function(){};
//以下有效
let b:{name:string};
b={name:"John"};
// b={name:"John",age:12}结构不一致报错
// ？-可选属性
let c:{name:string,age?:number};
c={name:"John",age:12};
c={name:"John"}

// 任意属性：自由添加属性，新属性未知
// 新属性名为字符串，属性值为任意类型，propName命名随意
let d:{name:string,[propName:string]:any}
d={name:"John",str:123}
let d1:{name:string,[propName:string|number]:any}
d1={name:"John",str:123}
d1={name:"John",123:123}

// 限制函数，单Function无意义
let e:(a:number,b:number)=>number

// 数组
let f:string[];
f=["John"]
let f1:Array<number>;
f1=[123];

// 元组：固定长度的数组
let g:[String,String];
// 必须符合给定，不多不少
g=["Hello","Hello"];

//考虑数据存储与表示分离，数据库存储应简短、非字符串，此时Object并不满足要求
// 枚举，默认从0开始
enum Gender{
    male=0,
    female=1
};
let h:{name:string,gender:Gender};
h={name:"Jhon",gender:Gender.female};
console.log(h.gender,h.gender==Gender.female)

// & - 与，类型组合
let i:number&string //无意义
let i1:{name:string}&{age:number};
i1={name:"John",age:18};

// 类型的复用-别名
let j1:number;
let j2:1|2|3|4|5;
let j3:1|2|3|4|5|6;

type myType=number;
type myType2=1|2|3|4|5;
let k1:myType;
let k2:myType2;
let k3:myType2|6;

k3=3
k3=6
// k3=7 报错


}
