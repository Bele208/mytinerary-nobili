import { createBrowserRouter } from "react-router-dom";
import Home from "./pages-1/Home";
import Header_footer from "./layouts/Header_footer";

import Details from "./pages-1/Details";
import Cities from "./pages-1/cities";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Header_footer />,
        children: [
            { path: '/', element: <Home />},  
            { path: '/home', element: <Home />},
            { path: '/index', element: <Home />},
            { path: '/cities', element: <Cities/>},
            { path: '/cities/:city_id', element: <Details/>}
        ],


    }

])
export default router
 