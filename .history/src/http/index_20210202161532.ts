import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import nprogress from 'nprogress'
import { ElMessage } from 'element-plus'

const http: AxiosInstance = axios.create({
    baseURL:'/api',
    timeout:10000
})

http.interceptors.request.use((config:AxiosRequestConfig)=>{
    nprogress.start()
    // 添加token
    //   在登录成功之后 会返回当前用户的token 存在本地
  let token :  = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token
  }
    return config
},(err:any)=>{
    nprogress.done()
    return Promise.reject(err)
})


http.interceptors.response.use((res:AxiosResponse<any>)=>{
    return res.data
},(err:any)=>{
    // 请求失败
    nprogress.done()
    let status = err.response && err.response.status
    // 状态码
    if (status === 400) {
        ElMessage .error('参数错误')
      }
      if (status === 401) {
        ElMessage.error('没有权限')
      }
      if (status === 403) {
        ElMessage.error('登录过期')
      }
      if (status === 404) {
        ElMessage.error('路径错误')
      }
      if (status === 500) {
        ElMessage.error('服务器错误')
      }
      if (status === 503) {
        ElMessage.error('服务器在维护')
      }

    return Promise.reject(err)
})

export default http