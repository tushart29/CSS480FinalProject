import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import '../CSS/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/things" activeClassName="active">Things to Read</NavLink></li>
                <li><NavLink to="/additional" activeClassName="active">Additional Info</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
