import { Link as Anchor} from "react-router-dom"

export default function Logos() {
  return (
    <>
    <p>Or you can try with:</p>
    <div className="logos">
    <Anchor><img src="/facebook-logo.png" alt="Logo facebook" /></Anchor>
    <Anchor><img src="/google-logo.jpg" alt="Logo google" /></Anchor>
    </div>
    </>

  )
}
