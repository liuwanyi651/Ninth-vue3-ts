import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import  nprogress from 'nprogress'
import { ElMessage } from 'element-plus'

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
    // 状态码
    if (status === 400) {
        Message.error('参数错误')
      }
      if (status === 401) {
        Message.error('没有权限')
      }
      if (status === 403) {
        Message.error('登录过期')
      }
      if (status === 404) {
        Message.error('路径错误')
      }
      if (status === 500) {
        Message.error('服务器错误')
      }
      if (status === 503) {
        Message.error('服务器在维护')
      }

    return Promise.reject(err)
})

export default http