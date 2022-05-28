import React, { useState } from 'react'
import "./togglemenu.css"

const ToggleMenu = () => {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <button className="navbar-toggler" onClick={() => handleToggle()} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className={isActive ? "rotate navbar-toggler-icon" : "navbar-toggler-icon"}></span>
        </button>
    )
}

export default ToggleMenu