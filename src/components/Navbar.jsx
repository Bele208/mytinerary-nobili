import { useState } from "react"
import { Link as Anchor } from "react-router-dom"
export default function Navbar() {
    let [show, setShow] = useState(false)
    return (
        <header>
            <Anchor to='/home'>
                <img src="/logo-MT.png" alt="Logo My Tinerary" className="logo-mt"/>
            </Anchor>
            <div className="cont-resp">
                <p className="menu" onClick={() => setShow(!show)}>☰</p>
                {show ? (
                    <div className="content-ref cont-anchor">
                        <div>
                            <Anchor to='/home' >Home</Anchor>
                            <Anchor to='/cities' >Cities</Anchor>
                        </div>
                    <div>

                    </div>
                        <button className="login-responsive"><img src="/user.png" alt="user" className="user-logo" /></button>
                    </div>
                ) : (null)}
            </div>


            <div className="content-ref menu-hidden">
                <Anchor to='/home' >Home</Anchor>
                <Anchor to='/cities' >Cities</Anchor>
                <button className="login-inicio"><img src="/user.png" alt="user" className="user-logo" /> Login</button>
            </div>
        </header>
    )
}
