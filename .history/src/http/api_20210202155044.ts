import http from './index'

export default {
//    login({username,password,query}:{username:string,password:string,query?:string}){
//        if(query){

//        }else{
           
//        }
//    }
    // 登录页面
    login({username,password}:{username:string,password:string}){
        return http.post('/login', {
            username,
            password
          })
    },
    // 首页轮播图
    
}

