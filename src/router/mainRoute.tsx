import {createBrowserRouter} from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import SortPage from "../pages/SortPage"
import Error2 from "../pages/ErrorPage/Error"


export const mainRoute = createBrowserRouter([
    {
        path:"/",
        element:<LandingPage/>
    },
    {
        path:"/sort",
        element:<SortPage/>
    },
    {
        path:"*",
        element:<Error2/>
    }
])