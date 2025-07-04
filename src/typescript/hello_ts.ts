// typescript: 是javascript的超集
// 望文生义，具有类型的脚本语言，在代码编写时有类型检查
// 需要编译，编译为js，生成的js中没有类型。
// 目的：在代码编写时进行类型约束，将js运行时会出现的bug提早至代码编写阶段

const motto:string = 'future is current.';
const age:number = 25;
function fun(mes: string): string {
    return "in fun(), message: " + mes;
}
interface Person {
    name:string;
    age:number;
}

const p: Person = {name: 'xiaoming', age: 18};

