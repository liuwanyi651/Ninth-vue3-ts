import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import  nprogress from 'nprogress'

const http: AxiosInstance = axios.create({
    baseURL:'/api',
    timeout:10000
})

http.interceptors.request.use((config:AxiosRequestConfig)=>{
    nprogress.start()
    // 添加token
    return config
},(err:AxiosError)=>{
    nprogress.done()
    return Promise.reject(err)
})


http.interceptors.response.use((res:AxiosResponse<any>)=>{
    return res.data
},(err:AxiosError)=>{
    // 请求失败
    nprogress.done()
    let status = err.response && err.response.status
    // zhuan

    return Promise.reject(err)
})

export default http