import http from './index'

export default {
//    login({username,password,query}:{username:string,password:string,query?:string}){
//        if(query){

//        }else{
           
//        }
//    }
    // 登录页面
    login({username,password}:{username:string,password:string}){
        return http.post('/accounts/login', {
            username,
            password
          })
    },
    // 注册
    register
    // 首页轮播图
    banners(){
        // console.log(111)
        return http.get('/scenics/banners') 
    }
}

