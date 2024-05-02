import { Navigate } from 'react-router-dom'
import { getToken } from "@/utils"

const AuthRoute = ({children}) => {
    //取出token
    const tonKen = getToken()
    //根据有无tonken 判断是否需要重定向
    console.log('AuthRoute=====:',tonKen);
    if(tonKen) {
        return <>{children}</>
    } else {
        return <Navigate to={'/login'} replace/>
    }
}
export default AuthRoute