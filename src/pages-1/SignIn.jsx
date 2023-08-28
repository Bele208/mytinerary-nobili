import { useRef } from "react"
import { Link as Anchor} from "react-router-dom"

export default function SignIn() {
    const mail_signIn =useRef() 
    const password_signIn =useRef() 
  return (
<div className="formulario">
        <form className="form-in">
            <h3>Hello!</h3>
            <p>Don't have an account? <Anchor to={'/auth/signup'}>Sign up</Anchor></p>
        <input ref={mail_signIn} type="text" name="mail" id="mail" placeholder="Mail" />
        <input ref={password_signIn} type="password" name="password" id="password" placeholder="Password" />
        <input type="button" value="Sign In!"/>
    </form>
</div>
)

}
