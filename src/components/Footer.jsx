import { Link as Anchor } from "react-router-dom"
export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <p>MyTinerary</p>
        <p>Find your perfect trip!</p>

      </div>
      <div>
        <Anchor to='/home' >Home</Anchor>
        <Anchor to='/allcities' >Cities</Anchor>
      </div>

    </footer>
  )
}
