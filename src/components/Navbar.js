import React from 'react';
import './Nav.css';
import logo from "../images/bed.png"

function Navbar() {
    return(
        <nav>
            <img src={logo} alt = "Bed Logo" className="nav--logo"/>
            <h1 className="logo--title">Cozy Space</h1>
            
        </nav>
        
    )
}

export default Navbar;