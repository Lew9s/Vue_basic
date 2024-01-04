/* //导入axios
import axios from 'axios'

//定义一个变量记录公共前缀
const baseURL = 'http://localhost:8080';
const instance = axios.create({ baseURL })
 */
import request from '@/util/request.js';

//获取所有文章数据的函数
export function articleGetAllService() {
    //发送异步请求获取所有文章数据
    //同步等待服务器响应结果并返回，async，await
    return request.get('/article/getAll');
}

//根据文章分类和发布状态搜索的函数
export function articleSearchService(searchConditions) {
    //发送请求完成搜索
    return request.get('/article/search', { params: searchConditions });
}