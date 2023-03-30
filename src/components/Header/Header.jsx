import React from 'react';
import './Header.css'
import logo from '../../images/favicon.ico'

const Header = () => {
    return (
        <nav >
            <div className='ramDiv'>
            <img src={logo} alt="" />
            <h2>Rama-zon</h2>
            </div>
            <div>
                <a href="Shop">Shop</a>
                <a href="Order Review">Order Review</a>
                <a href="Manage Inventory">Manage Inventory</a>
                <a href="Login">Login</a>
            </div>
        </nav>


    );
};

export default Header;