import React, { useState } from 'react'
import './Navbar.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from '../../pages/home'
// import Body from '../Body/Body'
import Catalog from '../../pages/catalog'
import Contact from '../../pages/contact'

function Navbar() {
    
    const [clicked, setclicked] = useState(false)

    const onClicked = () => {
        setclicked(!clicked)
    }
    
    return(
        <Router>
            <nav className="navbar"> 
                <div className="nav-container">
                    <h1 className="logo">Organic Era</h1>
                    <ul className={clicked ? "list-items active" : "list-items"}>
                        <li className="item">
                            <Link style={{ textDecoration: 'none' }} to="/">Home</Link>
                        </li>
                        <li className="item">
                            <Link style={{ textDecoration: 'none' }} to="/catalog">Catalog</Link>
                        </li>
                        <li className="item">
                            <Link style={{ textDecoration: 'none' }} to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className={clicked ? "back" : "menu"} onClick={onClicked}>{clicked ? "back" : "menu"}</div>
                </div>
            </nav>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/catalog' component={Catalog}></Route>
                <Route exact path='/contact' component={Contact}></Route>
            </Switch>
        </Router>
    )
}

export default Navbar
