import React from "react"
import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import logo from "./logo.png"
import "./navbar.css"
import ToggleMenu from "./ToggleMenu"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container navbar-container">
                <ToggleMenu />
                <Link className="navbar-brand" to="/"><img className="img-fluid logo" src={logo} /></Link>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
                    <div></div>
                    <ul className="navbar-nav">
                        <li className="dropdown">
                            <Link className="nav-links" to="/productos">
                                <span className=""></span>
                                Productos
                            </Link>
                        </li>
                        <li className="dropdown">
                            <Link className="nav-links" to="/categoria/pc">
                                <span className="pc-icon icons"></span>
                                Pc
                            </Link>
                        </li>
                        <li className="dropdown">
                            <Link className="nav-links" to="/categoria/playstation">
                                <span className="ps-icon icons"></span>
                                Ps5
                            </Link>
                        </li>
                        <li className="dropdown">
                            <Link className="nav-links" to="/categoria/xbox">
                                <span className="xbox-icon icons"></span>
                                Xbox Series
                            </Link>
                        </li>
                        <li className="dropdown">
                            <Link className="nav-links" to="/categoria/switch">
                                <span className="switch-icon icons"></span>
                                Switch
                            </Link>
                        </li>

                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar