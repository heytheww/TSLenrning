// tsconfig是ts编译器的配置文件，可以对编译进行自定义
// 不知道可选值可以先给一个错误的值，编译器会列出所有可选的正确配置值

let json = {
  // 初步

  "include":[ //指定哪些目录的ts文件需要被编译，包含目录
    "./src/**/*" //.当前目录 src文件夹 **任意目录 *任意文件
  ],
  "exclude":[],//指定哪些ts文件不被编译，排除目录，有默认值，比如node_modules
  "extends":"./config/base",//继承某个配置文件，配置复用
  "files":[],//指定ts文件编译，包含文件，与include类似

  //进阶
  "compilerOptions":{
    "target":"ES6", //指定ts编译成何种js版本，即目标代码的版本
  //ES2015(ES6)，ES2016...ESNext(最新版ES)
  "module":"ES6",//指定模块化解决方案
   "lib":["dom"],//用来指定项目中使用到的库，一般不写此属性（有默认值），除非代码在nodejs中运行，缺少某些库，如dom。dom库为document
  "outDir":"./dist",//指定编译后文件所在目录。dist即distribution，发行版
  "outFile":"./dis/app.js",//将代码合并为一个文件，若需要把各模块合并为一个文件，只能支持amd and system模块方案
  "allowJs":false, //是否对js进行编译，默认否  - false                             //合并文件一般不用outFile，而是结合打包工具来实现
  "checkJs":false, //是否检查js代码是否符合语法规范
  "removeCommentss":true,//是否移除注释
  "noEmit":false,//执行编译但是不生成编译后的文件，场景是只用到ts编码和类型检查， 不须编译
  "noEmitOnError":false,//发送错误时不生成编后的译文件，默认为false，为的是让js程序员缓慢过渡到ts，建议改为true
 
  "strict":false,//以下三个检查的总开关，建议开发时设为true
  "alwaysStrict":false,//指定编译后的js文件是否使用严格模式。严格模式：语法严格，在browser性能好一些
  "noImplicitAny":false,//Implicit隐式的，开启隐式any的检查，不允许使用
  "noImplicitThis":false,//不允许不明确类型的this
  "strictNullChecks":false,//严格检查空值，若一个变量可能为null，则报错，除非先进行非空判断或box?.addEventListener()





 },
};