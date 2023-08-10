import { Link as Anchor } from "react-router-dom"
export default function Footer() {
  return (
    <div className="footer">
      <div>
        <p>MyTinerary</p>
        <p>Find your perfect trip!</p>

      </div>
      <div>
      <Anchor to='/home' >Home</Anchor>
      <Anchor to='/cities' >Cities</Anchor>
      {/* <p>All rights reserved</p> */}
      </div>

    </div>
  )
}
