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
                            <Anchor to='/allcities' >Cities</Anchor>
                        </div>
                        <Anchor to='/auth/signup' >
                            <button className="login-responsive"><img src="/user.png" alt="user" className="user-logo" /></button>
                        </Anchor>
                        
                    </div>
                ) : (null)}
            </div>


            <div className="content-ref menu-hidden">
                <Anchor to='/home' >Home</Anchor>
                <Anchor to='/allcities' >Cities</Anchor>
                <Anchor to='/auth/signin' >
                <button className="login-inicio"><img src="/user.png" alt="user" className="user-logo" /> Login</button>
                </Anchor>
            </div>
        </header>
    )
}
