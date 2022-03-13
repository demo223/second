// 引入axios
import axios from 'axios'
//判断开发环境是本地还是线上 true是本地 false是线上
//保存base 如果是本地 则base前缀为/api 如果是线上 则base前缀为线上api地址
let base = process.env.NODE_ENV == 'development' ? '/api' : '线上IP地址'
// 配置axios
axios.defaults.baseURL = base /* 给每个请求路径前面加上默认前缀 */
axios.defaults.withCredentials = true /* 配置允许携带凭证 */
axios.defaults.timeout = 10000 /* 设置请求最大时长 */
/* http request 拦截器（所有发送的请求都要从这儿过一次），通过这个，我们就可以把token传到后台，
   这里是使用sessionStorage来存储token等权限信息和用户信息，若要使用cookie可以自己封装一个函数并import便可使用*/
axios.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token') //获取存储在本地的token
    config.data = JSON.stringify(config.data)
    config.headers = {
      // 'Content-Type': 'application/json', //设置跨域头部,虽然很多浏览器默认都是使用json传数据，但咱要考虑IE浏览器。
      'Content-Type': 'application/x-www-form-urlencoded',
    }
    if (token) {
      config.headers.Authorization = 'Token ' + token //携带权限参数
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
//http response 拦截器
axios.interceptors.response.use(
  (response) => {
    /* 根据自己的业务进行修改 */
    const res = response.data
    if (res.code) {
      console.log(res.data.code)
    } else {
      return response.data
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)
// /**
//  * 封装get方法
//  * @param url
//  * @param data
//  * @returns {Promise}
//  */
// export function get(url, params = {}) {
//   return new Promise((resolve, reject) => {
//     axios
//       .get(url, {
//         params: params,
//       })
//       .then((response) => {
//         resolve(response.data)
//       })
//       .catch((err) => {
//         reject(err)
//       })
//   })
// }
// /**
//  * 封装post请求
//  * @param url
//  * @param data
//  * @returns {Promise}
//  */
// export function post(url, data = {}) {
//   return new Promise((resolve, reject) => {
//     axios.post(url, data).then(
//       (response) => {
//         resolve(response.data)
//       },
//       (err) => {
//         reject(err)
//       }
//     )
//   })
// }

export const POST = (url, params) => {
  console.info('POST请求路径' + `${base}${url}`)
  return axios.post(`${base}${url}`, qs.stringify(params)).then((res) => res.data)
}
export const GET = (url, params) => {
  console.info('GET请求路径' + `${base}${url}`)
  //    params.timetext = new Date()
  return axios
    .get(`${base}${url}`, {
      params: params,
    })
    .then((res) => res.data)
}
export const PUT = (url, params) => {
  console.info('PUT请求路径' + `${base}${url}`)

  return axios
    .put(`${base}${url}`, params)
    .then((res) => res.data)
    .catch((error) => error)
}
export const DELETE = (url, params) => {
  console.info('DELETE请求路径' + `${base}${url}`)

  return axios
    .delete(`${base}${url}`, {
      params: params,
    })
    .then((res) => res.data)
    .catch((error) => error)
}
export const PATCH = (url, params) => {
  console.info('PATCH请求路径' + `${base}${url}`)
  return axios
    .patch(`${base}${url}`, params)
    .then((res) => res.data)
    .catch((error) => error)
}
