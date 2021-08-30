import React, { useState } from 'react'
import './Navbar.css'

function Navbar() {
    
    const [clicked, setclicked] = useState(false)

    const onClicked = () => {
        setclicked(!clicked)
    }
    
    return(
        <nav className="navbar"> 
            <div className="nav-container">
                <h1 className="logo">Logoss</h1>
                <ul className={clicked ? "list-items active" : "list-items"}>
                    <li className="item">Home</li>
                    <li className="item">About</li>
                    <li className="item">Contact</li>
                </ul>
                <div className={clicked ? "back" : "menu"} onClick={onClicked}>{clicked ? "back" : "menu"}</div>
            </div>
        </nav>
    )
}

export default Navbar
