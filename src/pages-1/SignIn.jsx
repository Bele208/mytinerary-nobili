import { useRef } from "react"
import { Link as Anchor, useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"; 
import user_actions from "../store/actions/users";
const { signin } = user_actions;
import Logos from "../components/Logos"

export default function SignIn() {
  const navigate = useNavigate()
  const mail_signIn = useRef("");
  const password_signIn = useRef("");
  const dispatch = useDispatch();
  async function handleSignIn() {
    let data = {
      mail: mail_signIn.current.value,
      password: password_signIn.current.value,
    };

    let responseDispatch = dispatch(signin({ data }))
    .then (res=>{
      if (res.payload.token){
        Swal.fire({
          icon: 'success',
          title: 'Successfully logged in!',
        })
        navigate('/')
      } else if (res.payload.messages.length>0){
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong!',
          html: res.payload.messages.map(e => `<p>${e}</p>`).join(" ")
        })
      }
    })
    .catch(err=>console.log(err))
  }
  let user = useSelector(store=>store)
  console.log(user);
  return (
<div className="formulario">
        <form className="form-in">
            <h3>Hello!</h3>
            <p>Don't have an account? <Anchor to={'/auth/signup'}>Sign up</Anchor></p>
            <input ref={mail_signIn} type="text" name="mail" id="mail" defaultValue="" placeholder="Mail" />
            <input ref={password_signIn} type="password" name="password" id="password" defaultValue="" placeholder="Password" />
            <input type="button" value="Sign In!" onClick={handleSignIn} />
            < Logos />
        </form>
</div>
)

}
