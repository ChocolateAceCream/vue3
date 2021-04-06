import axios from 'axios'
import { ElMessage, ElMessageBox  } from 'element-plus';
import { hasToken, getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 60000, // request timeout
  headers: { 'X-Requested-With': 'XMLHttpRequest' } //send ajax request
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (hasToken()) {
      config.headers['Authorization'] = getToken()
    }

    return config
  },

  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
   response => {
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    // if (res.code !== 0) {
    //   Message({
    //     message: res.message || 'error',
    //     type: 'error',
    //     duration: 5 * 1000
    //   })

    //   // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //     // to re-login
    //     MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
    //       confirmButtonText: 'Re-Login',
    //       cancelButtonText: 'Cancel',
    //       type: 'warning'
    //     }).then(() => {
    //       store.dispatch('user/resetToken').then(() => {
    //         location.reload()
    //       })
    //     })
    //   }
    //   return Promise.reject(res.message || 'error')
    // } else {
    //   return res
    // }
   },
   error => {
     console.log(error)
     ElMessage({
       message: error.response.data.message || error.message,
       type: 'error',
       duration: 5000
     })
     return Promise.reject(error)
   }
)

export default service