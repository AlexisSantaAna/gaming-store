import React from "react"
import CartWidget from "./CartWidget"
import logo from "./logo.png"
import "./navbar.css"
import ToggleMenu from "./ToggleMenu"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container navbar-container">
                <ToggleMenu />
                <a className="navbar-brand" href="#"><img className="img-fluid logo" src={logo} /></a>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
                    <div></div>
                    <ul className="navbar-nav">
                        <li className="dropdown">
                            <a className="dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown">
                                <span className="pc-icon icons"></span>
                                Pc
                            </a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown">
                                <span className="ps-icon icons"></span>
                                Ps5
                            </a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown">
                                <span className="xbox-icon icons"></span>
                                Xbox Series
                            </a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown">
                                <span className="switch-icon icons"></span>
                                Switch
                            </a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                            </ul>
                        </li>

                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar