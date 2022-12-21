import React from 'react';
import './app.scss';
import Navbar from "./common/components/Navbar/Navbar";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";


const App = () => {
    return (
        <div className='app-container'>
            <Navbar/>
            <CurrencyConverter/>
        </div>
    );
}

export default App;
