import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./moudels/user";

const store = configureStore({
    reducer:{
        //注册子模块
        user: userReducer
    }
})

//导出store
export default store