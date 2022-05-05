/*
这个模块是用来封装和所有后端交互的接口

*/
import axios from "axios";

/*创建请求对象 */
const http = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 1000,
    validateStatus: function (status) {
        return true;
    }
});

/*添加请求拦截器*/
http.interceptors.request.use(function (config) {
    //在发送请求前做什么
    console.log('请求拦截器调用了----')
    // 获取sessionStorage中的token值，添加到请求信息中
    const token = window.sessionStorage.getItem('token')
    if (token) {
        config.headers.MyToken = token
    }
    return config;
});




const api = {
// 登录的请求
    loginApi(data) {
        return http.post('/user/login',data)
    },
// 注册的请求
    registerApi(data) {
        return http.post('/user/register',data)
    },
}

export default api