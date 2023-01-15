import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css"

const Nav = () => {
   
    return (
        <div className="Nav">
            <Link to="/" className="NavLink">Vendor</Link>
            <Link to="/client" className="NavLink">Client</Link>
        </div>
    );
}

export default Nav;