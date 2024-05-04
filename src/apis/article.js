/**发布文章亲求都在这里 */
import { request } from "@/utils";

//请求频道列表
export const getChannelAPI = () => {
    return request({
        url: '/channels',
        method: 'GET',
    })
}

//发送表单数据

export function createArticleAPI (data) {
    return request({
      url: '/mp/articles?draft=false',
      method: 'POST',
      data
    })
  }