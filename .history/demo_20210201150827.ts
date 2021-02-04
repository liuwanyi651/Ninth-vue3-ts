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

// 最外层 对象里放数组
interface Obj{
    children:Children[],
    name:string
}

interface Children{
    name:string
}

let obj:Obj={
    children:[
        {
            name:'tom'
        }
    ],
    name:'lucy'
}

// 最外层 数组里面放对象
let arr:Obj[]=[
    {
        name:'',
        children:[
            {
                name:''
            }
        ]
    }
]

// 函数 void 没有返回值
let fn1 = (num1:number,num2:number):void =>{
    console.log(num1)
    console.log(num2)  
} 

// 有返回值
let fn2 = (num1:number,num2:number):number =>{
   return num1 + num2
} 

// 可选参数
// let fn3 = (num1:number,num2:number,num3?:number):number =>{
//     return num1 + num2 + num3
//  } 

let obj1:{name:string,age:number}={
    name:'jack',
    
}
 



