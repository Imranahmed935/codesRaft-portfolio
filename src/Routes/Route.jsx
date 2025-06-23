import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
import Services from "../Pages/Services/Services";
import Contact from "../Pages/Contact/Contact";
import App from "../App";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<App/>
            },
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/projects',
                element:<Projects/>
            },
            {
                path:'/services',
                element:<Services/>
            },
            {
                path:'/contact',
                element:<Contact/>
            }
        ]
    }
])

export default router;