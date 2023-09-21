import "./index.css";
import { BsFillPersonFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import {useLogout} from "../../hooks/useLogout"
import { useAuthContext } from "../../hooks/useAuthContext";



let Navbar = () => {
    let [toggle, setToggle] = useState(false);

    const {user} = useAuthContext();
    const {logout} = useLogout();
    function handleLogout(){
        logout();
    }
    return (
        <section id="Navbar">
            <div id="container">
            <div className="home-main-container py-2">
            <div className="navbar flex flex-row justify-between">
                    <div className="nav-logo">
                        <a href="/"><img src={require("../../img/master-logo.png")} className="nav-logo" /></a>
                    </div>
                    <div className="navbar-items-collection flex flex-row gap-12 items-center justify-between">
                        <a href="/events" ><p>Events</p></a>
                        <a href="/education" ><p>Education</p></a>
                        <a href="/trash" ><p>Trash Tracker</p></a>
                        <a href="/rewards"> <p>Rewards</p></a>
                    </div>
                    
                    <div className="credentials flex flex-row items-center gap-2 justify-end">
                        <BsFillPersonFill size={"1.5rem"} />
                        {user && (<div>                            
                            <span>{user.username}</span>
                            <button onClick={handleLogout} className="logoutBtn">Log Out</button>
                        </div>)}
                        {!user && (
                            <div>
                            <Link to="/login" className="loginLink">Login</Link>
                            <Link to="/register" className="registerLink">Register</Link>                            
                            </div>)}                            
                    </div>
                </div>
                <div className="flex flex-row items-center toggle-buttons">
                        <RxHamburgerMenu size={"1.7rem"} onClick={() => setToggle(!toggle)} className={toggle ? "invincible" : ""} />
                        <MdOutlineCancel size={"1.7rem"} onClick={() => setToggle(!toggle)} className={toggle ? "" : "invincible"} />
                </div>
            </div>
                <div className={toggle ? "navbar-toggle-collection flex flex-col justify-start gap-1" : "invincible"}>
                    <hr />
                    <a className="flex flex-row"><p>Login/Register</p><BsFillPersonFill size={"1.5rem"} /></a>
                    <a href="/events" ><p>Events</p></a>
                    <a href="/education" ><p>Education</p></a>
                    <a href="/trash" ><p>Trash Tracker</p></a>
                </div>
            </div>

        </section>

    )
}
export default Navbar;