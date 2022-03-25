import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1>Cocktail</h1>
            <div>
                <a href="/home">Home</a>
                <a href="/contact">Contact</a>
                <a href="/cart">Cart</a>
            </div>
        </div>
    );
};

export default Header;