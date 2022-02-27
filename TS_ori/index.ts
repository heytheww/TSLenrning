export const zex: number = 1;

{
    let a: number = 10;
    let b: number = 20;
    console.log(a, b)

    //计算变量类型
    let c = true;

    //计算函数返回值类型
    function sum(a: number, b: number): string {
        return a + b + "";
    }
    let result = sum(a, b);
}