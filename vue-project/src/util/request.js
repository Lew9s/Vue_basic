/* 定制请求实例 */
//导入axios
import axios from 'axios'

//定义一个变量记录公共前缀
const baseURL = 'http://localhost:8080';
const instance = axios.create({ baseURL })


//添加响应拦截器
instance.interceptors.response.use(
    result => {
        return result.data;
    },
    err => {
        alert('服务异常');
        return Promise.reject(err);//异步状态转化为失败状态
    }
)

export default instance;