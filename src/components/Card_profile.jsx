import { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";

import User_info from "../components/User_info";

import user_actions from "../store/actions/users";
const { update_user } = user_actions;

export default function Card_profile() {
    // const navigate = useNavigate()

    const user = useSelector((store) => store.users.user);
    const name = useRef("");
    const lastName = useRef("");
    const country = useRef("");
    const photo = useRef("");
    const password = useRef("");
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    async function handleUpdate() {
        try {
            let data = {};
            if (name.current.value) {
                data.name = name.current.value;
            }
            if (lastName.current.value) {
                data.lastName = lastName.current.value;
            }
            if (country.current.value) {
                data.country = country.current.value;
            }
            if (photo.current.value) {
                data.photo = photo.current.value;
            }
            if (password.current.value) {
                data.password = password.current.value;
            }
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'The update was successful.',
              })
              
            console.log(data);
            dispatch(update_user({ data }));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>  {user && (
            <div>
                <h3>Hi! {user.name} {user.lastName}</h3>
                <div className="card-profile-update">
                    <User_info user={user} show={show} setShow={setShow} />
                    {show && (
                        <form className="form-update">
                            <h3 >Update!</h3>
                            <input
                                ref={name}
                                type="text"
                                name="name"
                                id="name"
                                defaultValue=""
                                placeholder="Type Name"
                            />
                            <input
                                ref={lastName}
                                type="text"
                                name="lastName"
                                id="lastName"
                                defaultValue=""
                                placeholder="Type Last Name"
                            />
                            <input
                                ref={country}
                                type="text"
                                name="country"
                                id="country"
                                defaultValue=""
                                placeholder="Type Country"
                            />
                            <input
                                ref={photo}
                                type="text"
                                name="photo"
                                id="photo"
                                defaultValue=""
                                placeholder="Type Photo"
                            />
                            <input
                                ref={password}
                                type="password"
                                name="password"
                                id="password"
                                defaultValue=""
                                placeholder="Type Password"
                            />
                            <input
                                type="button"
                                value="Update!"
                                onClick={handleUpdate}
                            />
                        </form>
                    ) }
                </div>
            </div>
        )}

        </>

    )
}
