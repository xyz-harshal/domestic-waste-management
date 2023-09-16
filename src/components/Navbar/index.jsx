import "./index.css";
import { BsFillPersonFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";
let Navbar = () => {
    let [toggle, setToggle] = useState(false);
    return (
        <section id="Navbar">
            <div id="container">
            <div className="home-main-container">
            <div className="navbar flex flex-row justify-between">
                    <div className="nav-logo">
                        <p>Government<br />of Kerala 🌿</p>
                    </div>
                    <div className="navbar-items-collection flex flex-row gap-12 items-center justify-between">
                        <a href="/events" ><p>Events</p></a>
                        <a href="/education" ><p>Education</p></a>
                        <a href="/trash" ><p>Trash Tracker</p></a>
                    </div>
                    
                    <div className="credentials flex flex-row items-center gap-2 justify-end">
                        <p>Login/Register</p>
                        <BsFillPersonFill size={"1.5rem"} />
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