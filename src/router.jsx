import { createBrowserRouter } from "react-router-dom";
import Home from "./pages-1/home";
import Header from "./layouts/header";
import Cities from "./pages-1/cities";
import Details from "./pages-1/Details";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Header />,
        children: [
            { path: '/', element: <Home />},  
            { path: '/home', element: <Home />},
            { path: '/index', element: <Home />},
            { path: '/cities', element: <Cities/>},
            { path: '/city/:city_id', element: <Details/>}
        ],


    }

])
export default router
 