import { createBrowserRouter } from "react-router-dom";
import GeekLayout from "@/pages/Layout";
import Login from "@/pages/Login";
import AuthRoute from "@/components/AuthRoute/AuthRoute";
import Home from "@/pages/Home";
import Article from "@/pages/Article";
import Publish from "@/pages/Publish";
const router = createBrowserRouter([
    {
        path:"/",
        element: <AuthRoute><GeekLayout/></AuthRoute>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path:'article',
                element: <Article/>
            },
            {
                path:'publish',
                element: <Publish/>
            },
        ]
    },
    {
        path:"/login",
        element: <Login/>
    }
])
export default router