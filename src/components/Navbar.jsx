import Swal from "sweetalert2"
import { useState } from "react"
import { Link as Anchor } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import user_actions from "../store/actions/users"
const { signout_token } = user_actions

export default function Navbar() {
    let [show, setShow] = useState(false)
    let [showProfile, setShowProfile] = useState(false)
    const user = useSelector((store) => store.users.user);

    let dispatch = useDispatch();

    const handleLogoutClick = () => {
        Swal.fire({
          title: "Are you sure?",
          text: "Do you want to logout?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, logout!",
          cancelButtonText: "Cancel",
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(signout_token());
          }
        });
      };
    
    return (
        <header>
            <Anchor to='/home'>
                <img src="/logo-MT.png" alt="Logo My Tinerary" className="logo-mt" />
            </Anchor>
            {/* Menú responsive */}
            <div className="cont-resp">
        <div className="menu">
            {user.mail ? (
                <div className="profile-nav-responsive cont-profile-nav">
                    <Anchor to='#' className='img-user' onClick={() => setShowProfile(!showProfile)}>
                        {user.photo ? (
                            <img src={user.photo} alt="photo profile user" title={user.name} />
                         ) : (
                            <img src="/user.png" alt="user" className="user-logo" />
                        )}
                    </Anchor>
                    <div className={`show_profile${showProfile ? ' active' : ''}`}>
                        <Anchor to='/home' >Home</Anchor>
                        <Anchor to='/allcities' >Cities</Anchor>
                        <Anchor to='/profile'>Profile</Anchor>
                        <Anchor to="/" onClick={handleLogoutClick}>Logout</Anchor>
                    </div>
                </div>
            ) : (
                <div className="profile-nav-responsive cont-profile-nav">
                    <Anchor to='#' className='img-user' onClick={() => setShowProfile(!showProfile)}>
                    <button className="login-responsive"><img src="/user.png" alt="user" className="user-logo" /></button>
                    </Anchor>
                    <div className={`show_profile${showProfile ? ' active' : ''}`}>
                        <Anchor to='/home' >Home</Anchor>
                        <Anchor to='/allcities' >Cities</Anchor>
                        <Anchor to='/auth/signin' >Login</Anchor>
                    </div>
                </div>
            )}
        </div>
    </div>
            {/* Menú responsive */}

            <div className="content-ref menu-hidden">
                <Anchor to='/home' >Home</Anchor>
                <Anchor to='/allcities' >Cities</Anchor>

                {
                    user.mail ? (
                        <div className="cont-profile-nav">
                            <Anchor to='#' className='img-user' onClick={() => setShowProfile(!showProfile)}>
                                {user.photo ? (
                                    <img src={user.photo} alt="photo profile user" title={user.name} />
                                ) : (
                                    <img src="/user.png" alt="user" className="user-logo" />
                                )}
                            </Anchor>
                            <div className={`show_profile${showProfile ? ' active' : ''}`}>
                                <Anchor to='/profile'>Profile</Anchor>
                                <Anchor to="/" onClick={handleLogoutClick}>Logout</Anchor>
                            </div>
                        </div>

                    ) :

                        <Anchor to='/auth/signin' >
                            <button className="login-inicio"><img src="/user.png" alt="user" className="user-logo" /> Login</button>
                        </Anchor>
                }

            </div>
        </header>
    )
}