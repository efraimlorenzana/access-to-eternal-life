import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation-bar.css';

const Navigation = () => {
    return ( 
        <nav className="navigation">
            <span className="navigation__brand">
                <h2>King James Version</h2>
            </span>

            <ul className="navigation__links">
                <li>
                    <NavLink exact to="/">Home</NavLink>
                </li>

                {/* <li>
                    <NavLink exact to="/chapter">Chapter</NavLink>
                </li> */}
            </ul>
        </nav>
    );
}
 
export default Navigation;