import React, {useEffect, useState} from 'react';
import './current-exchange.scss';
import {getCurrency} from "../../../services/exchange-rate.services";

interface CurrentExchangeProps {
    currency: string;
}
const CurrentExchange = ({currency}: CurrentExchangeProps) => {

    const [currencyValue, setCurrencyValue] = useState('');

    const fixedValue = currencyValue.substring(0, 5);

    const currencyStr = `${currency} : ${fixedValue}`

    useEffect(() => {
        getCurrency(currency).then(data => {
            setCurrencyValue(data.rates.UAH.toString())
        })
    }, []);

    return (
        <>
            <span className='currency-name'>
                {currencyStr}
            </span>
        </>
    );
};

export default CurrentExchange;
