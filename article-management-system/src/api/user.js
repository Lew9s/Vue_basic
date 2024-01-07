//导入request.js请求工具
import request from '@/utils/request.js';

//提供调用注册接口的函数
export const UserRegisterService = (registerData) => {
    //借助UrlSearchParams完成传递
    const params = new URLSearchParams()
    for (let key in registerData) {
        params.append(key, registerData[key]);
    }
    return request.post('/user/register', params);
}

//提供调用登录接口的函数
export const UserLoginService = (loginData) => {
    const params = new URLSearchParams()
    for (let key in loginData) {
        params.append(key, loginData[key]);
    }
    return request.post('/user/login', params);
}

//获取用户详细信息
export const UserInfoService = () => {
    return request.get('/user/userinfo')
}

//修改用户个人信息
export const UserInfoUpdateService = (userinfoData) => {
    return request.put('/user/update', userinfoData)
}

//修改头像
export const UserAvatarUpdateService = (avatarUrl) => {
    const params = new URLSearchParams();
    params.append('avatarUrl', avatarUrl)
    return request.patch('/user/updateAvatar', params)
}