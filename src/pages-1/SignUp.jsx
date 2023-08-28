import { useRef , useState } from "react"
import axios from "axios"
import apiUrl from "../apiUrl"
import { Link as Anchor } from "react-router-dom"

export default function SignUp() {
    const name =useRef()
    const lastName =useRef() 
    const mail =useRef() 
    const password =useRef() 
    const country =useRef() 
    const photo =useRef()
    async function handleSignUP() {
        try {
        let data = {
            name: name.current.value,
            lastName: lastName.current.value,
            mail: mail.current.value,
            password: password.current.value,
            country: country.current.value,
            photo: photo.current.value
        }
         await axios.post(
            apiUrl+'users/',
            data
        )
        console.log(data)
        } catch (error) {
          console.log(error)  
        }

    }
  return (
<div className="formulario">
        <form className="form-up">
            <h3>Create account</h3>
            <p>Already have an account? <Anchor to={'/auth/signin'} >Sign in</Anchor></p>
        <input ref={name} type="text" name="name" id="name" placeholder="Name" />
        <input ref={lastName} type="text" name="lastName" id="lastName" placeholder="Last Name" />
        <input ref={mail} type="text" name="mail" id="mail" placeholder="Mail" />
        <input ref={password} type="password" name="password" id="password" placeholder="Password" />
        <input ref={country} type="text" name="country" id="country" placeholder="Country" />
        <input ref={photo} type="text" name="photo" id="photo" placeholder="Photo" />
        <input type="button" value="Sign Up!" onClick={handleSignUP}/>

    </form>
</div>
) 

}
