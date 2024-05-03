//对于用户信息的请求都放这里 
import { request } from "@/utils";

//请求登录信息
export const loginAPI = (fromData) => {
    return request({
        url: '/authorizations',
        method: 'POST',
        data: fromData
    })
}

//获取用户信息
export const getUserInfoAPI = () => {
    return request({
        url: '/user/profile',
        method: 'GET',
    })
}
