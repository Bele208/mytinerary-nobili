import { Link as Anchor } from "react-router-dom"
export default function Navbar() {
    return (
        <header>
            <Anchor to='/home'>
                <img src="/public/logo-MT.png" alt="" height={50} />
                {/* <h1>My Tinerary</h1> */}
                {/* <p className="text-header">"Find your perfect trip, designed by insiders
            who know and love their cities!</p> */}
            </Anchor>


            <div className="content-ref">
                <Anchor to='/home' >Home</Anchor>
                <Anchor to='/cities' >Cities</Anchor>
                <button className="login-inicio"><img src="/user.png" alt="user" className="user-logo" />Login</button>
            </div>
        </header>
    )
}
