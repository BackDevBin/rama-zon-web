import React from 'react';
import './Header.css'
import logo from '../../images/favicon.ico'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav >
            <div className='ramDiv'>
            <img src={logo} alt="" />
            <h2>Rama-zon</h2>
            </div>
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>


    );
};

export default Header;