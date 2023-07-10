import {createBrowserRouter} from "react-router-dom"
import HomeScreen from "../pages/HomeScreen"
import SortPage from "../pages/SortPage"
import Error2 from "../pages/ErrorPage/Error"


export const mainRoute = createBrowserRouter([
    {
        path:"/",
        element:<HomeScreen/>
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