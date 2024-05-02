
//定义一个变量
const TOKENNAME = 'token_key'
//封装存token方法
function setToken (val) {
    localStorage.setItem(TOKENNAME,val)
}

//封装取token方法
function getToken () {
    return localStorage.getItem(TOKENNAME)
}

//封装删除token方法
function removeToken() {
    localStorage.removeItem(TOKENNAME)
}
export {
    setToken,
    getToken,
    removeToken
}