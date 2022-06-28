import React, { useState } from "react"
import { useRef } from "react"
import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import logo from "./logo.png"
import "./navbar.css"

function NavBar() {
    /* Custom Toggler */
    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    };

    /*NavBar fixed*/
    const navButton = useRef(null)
    const linksContainerRef = useRef(null)

    function collapseNav() {
        navButton.current.classList.add('collapsed')
        linksContainerRef.current.classList.remove('show')
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container navbar-container">

                {/* Custom Toggler */}
                <button ref={navButton} className="navbar-toggler" onClick={() => handleToggle()} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className={isActive ? "rotate navbar-toggler-icon" : "navbar-toggler-icon"}></span>
                </button>

                <Link className="navbar-brand" to="/"><img className="img-fluid logo" src={logo} onClick={collapseNav}/></Link>
                <div ref={linksContainerRef} className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
                    <div></div>
                    <ul className="navbar-nav">
                        <li className="dropdown">
                            <Link onClick={collapseNav} className="nav-links" to="/productos" >
                                <span className=""></span>
                                Productos
                            </Link>
                        </li>
                        <li className="dropdown">
                            <Link onClick={collapseNav} className="nav-links" to="/categoria/pc">
                                <span className="pc-icon icons"></span>
                                Pc
                            </Link>
                        </li>
                        <li className="dropdown">
                            <Link onClick={collapseNav} className="nav-links" to="/categoria/playstation">
                                <span className="ps-icon icons"></span>
                                Ps5
                            </Link>
                        </li>
                        <li className="dropdown">
                            <Link onClick={collapseNav} className="nav-links" to="/categoria/xbox">
                                <span className="xbox-icon icons"></span>
                                Xbox Series
                            </Link>
                        </li>
                        <li className="dropdown">
                            <Link onClick={collapseNav} className="nav-links" to="/categoria/switch">
                                <span className="switch-icon icons"></span>
                                Switch
                            </Link>
                        </li>

                    </ul>
                    <CartWidget collapseNav={collapseNav}/>
                </div>
            </div>
        </nav>
    )
}

export default NavBar