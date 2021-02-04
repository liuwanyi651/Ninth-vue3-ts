import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
import  nprogress from 'nprogress'

const http: AxiosInstance = axios.create({
    baseURL:'/api',
    timeout:10000
})

http.interceptors.request.use((config:AxiosRequestConfig)=>{
    n
    // 添加token
    return config
},(err:AxiosError)=>{

})