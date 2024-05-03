import { createSlice } from '@reduxjs/toolkit'
import { setToken as _setToken, getToken, removeToken } from '@/utils'
import { getUserInfoAPI, loginAPI } from '@/apis/user'
const userStore = createSlice({
  name: 'user',
  // 数据状态
  initialState: {
    token: getToken() || '',
    useInfo: {}
  },
  // 同步修改方法
  reducers: {
    setToken (state, action) {
      state.token = action.payload
      _setToken(action.payload)
    },
    //修改用户信息
    setUsetInfo (state, action) {
      state.useInfo = action.payload
    },
    //清楚用户信息
    clearUserIfo (state) {
      state.token = ''
      state.useInfo = {}
      removeToken()
    }
  }
})

// 解构出actionCreater
const { setToken, setUsetInfo, clearUserIfo } = userStore.actions

// 获取reducer函数
const userReducer = userStore.reducer

// 异步方法封装
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await loginAPI(loginForm)
    dispatch(setToken(res.data.token))
  }
}

//异步请求用户信息
const fetchUserInfo = () => {
  return async (dispatch) => {
    const res = await getUserInfoAPI()
    dispatch(setUsetInfo(res.data))
  }
}

export { fetchLogin, fetchUserInfo, clearUserIfo }

export default userReducer