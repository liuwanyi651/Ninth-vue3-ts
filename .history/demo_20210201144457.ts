// // 给所有变量和方法 方法的参数给类型 类型都是小写的

// // 如果不给类型 ts会自动推导类型 从初始值推导

// let num:number = 10
// num = 1

// let str:string = '123'

// let bol :boolean = false

// // undefined 和 null 一般不直接给

// // 联合类型

// let n :number | string = 1

// // 常量类型

// // 数组
// let arr:Array<number> = [1,2,3]
// let arr2:number[]=[1,2,3]

// // 对象
// interface Obj {
//     name:string,
//     age:number,
//     sex?:'男'|'女'|'保密' // 可选属性
// }

// let obj:Obj={
//     name:'jack',
//     age:12,
//     // sex:'男'
// }

// 最外层 
interface Obj{
    children:Children[],
    name:string
}

interface Children{
    
}


let obj:Obj={
    children:[
        {
            name:'tom'
        }
    ],
    name:'lucy'
}

