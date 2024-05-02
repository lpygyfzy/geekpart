import { Button } from "antd"
import { useEffect } from "react"
import { request } from "@/utils"
const Layout = () => {
    useEffect(() => {
        request.get('/user/profile')
    },[])
    return <div>
        this Layout
        <Button type='primary'>antd</Button>
    </div>
}
export default Layout