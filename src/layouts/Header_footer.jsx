import NavBar from "../components/Navbar"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"

export default function Header_footer() {
    return (
        <>
            < NavBar />
            < Outlet />
            < Footer />
        </>

    )
}

