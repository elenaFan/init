let host = 'http://192.168.1.22:9999'
if (!IS_DEV) {
  host = 'http://www.itheima.com'
}
let baseURL = host +'/api/private/v1/'

// 导入axios
import axios from 'axios'
// 导入路由
import router from '../router/index'
// 弹框
import Vue from 'vue'

// 创建副本
export const managerAxios = axios.create({
  // 基地址
  baseURL
})

// 添加axios拦截器 拦截请求和响应

// 添加请求拦截器
managerAxios.interceptors.request.use(
  function(config) {
    // 请求成功触发
    console.log('请求成功')
    // 添加请求头
    // 添加token
    // config.headers.Authorization = window.localStorage.getItem('token')
    return config
  },
  function(error) {
    // 请求失败触发
    return Promise.reject(error)
  }
)

// 添加响应拦截器
managerAxios.interceptors.response.use(
  function(response) {
    // 响应成功触发
    console.log('响应成功')
    // console.log(response)
    if (
      response.data.meta.status == 400 &&
      response.data.meta.msg == '无效token'
    ) {
      // 伪造的token 坏人
      // 删掉他
      window.localStorage.clear()
      // 打回去
      router.push('/login')
      // 弹框
      new Vue().$message.error('登陆失败')
    }
    return response
  },
  function(error) {
    // 响应失败触发
    return Promise.reject(error)
  }
)