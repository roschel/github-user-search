import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <div className="nav-text">
                <NavLink to="/" className="text-link">
                    Bootcamp DevSuperior
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar