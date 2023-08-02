export default function Navbar() {
  return (
        <header>
            <h1>My Tinerary</h1>
            <div className="content-ref">
                <a href="">Home</a>
                <a href="">Cities</a>
                <button className="login-inicio"><img src="/user.png" alt="user" className="user-logo"/>Login</button>
            </div>
        </header>
  )
}
