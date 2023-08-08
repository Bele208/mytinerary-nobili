export default function Navbar() {
  return (
    <header>
      <div>
        <h1>My Tinerary</h1>
        <p className="text-header">"Find your perfect trip, designed by insiders
          who know and love their cities!</p>
      </div>

      {/* <img src="/img/logo.png" alt="" height={50}/> */}
      <div className="content-ref">
        <a href="">Home</a>
        <a href="./pages/cities.jsx">Cities</a>
        <button className="login-inicio"><img src="/user.png" alt="user" className="user-logo" />Login</button>
      </div>
    </header>
  )
}
