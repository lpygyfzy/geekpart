import { createBrowserRouter } from "react-router-dom";
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";

const router = createBrowserRouter([
    {
        path:"/Layout",
        element: <Layout/>
    },
    {
        path:"/",
        element: <Login/>
    }
])
export default router