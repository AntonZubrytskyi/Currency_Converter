import React from 'react';
import './navbar.scss';
import CurrentExchange from "../CurrentExchange/CurrentExchange";

const Navbar = () => {
    return (
        <div className='nav-container'>
          <span>Currency Converter</span>
            <div className='nav-currency-wrapper'>
                <CurrentExchange currency='USD'/>
                <CurrentExchange currency='EUR'/>
            </div>
        </div>
    );
};

export default Navbar;
