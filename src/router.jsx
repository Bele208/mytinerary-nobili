import { createBrowserRouter } from "react-router-dom";
import Home from "./pages-1/Home";
import Header_footer from "./layouts/Header_footer";

import Details from "./pages-1/Details";
import Cities from "./pages-1/Cities";
import SignIn from "./pages-1/SignIn";
import SignUp from "./pages-1/SignUp";
import Profile from "./pages-1/Profile";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Header_footer />,
        children: [
            { path: '/', element: <Home />},  
            { path: '/home', element: <Home />},
            { path: '/index', element: <Home />},
            { path: '/allcities', element: <Cities/>},
            { path: '/cities/:city_id', element: <Details/>},
            { path: '/auth/signin', element: < SignIn /> },
            { path: '/auth/signup', element: < SignUp /> },
            { path: "/profile", element: <Profile /> },
        ],

    }

])
export default router
 