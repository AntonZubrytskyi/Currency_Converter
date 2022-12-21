import React, {useEffect, useState} from 'react';
import './currency-converter.scss';
import Button from "../../UI/Button/Button";
import CurrencyInput from "../CurrencyInput/CurrencyInput";
import {getCurrency} from "../../services/exchange-rate.services";
import {SingleValue} from "react-select";
import {SelectOptions} from "../../types";
import {formatDate} from "../../helpers/formatDate";


const CurrencyConverter = () => {

    const [currencyOptions, setCurrencyOptions] = useState<string[]>([])
    const [fromCurrency, setFromCurrency] = useState<string>('')
    const [toCurrency, setToCurrency] = useState<string>('UAH')
    const [exchangeRate, setExchangeRate] = useState<number>(0)
    const [amount, setAmount] = useState<number>(1)
    const [amountInFromCurrency, setAmountInFromCurrency] = useState<boolean>(true)
    const [date, setDate] = useState('')

    let toAmount, fromAmount
    if (amountInFromCurrency) {
        fromAmount = amount
        toAmount = (amount * exchangeRate)
    } else {
        toAmount = amount
        fromAmount = (amount / exchangeRate)
    }

    useEffect(() => {
        getCurrency('USD').then(data => {
            const firstCurrency = Object.keys(data.rates)[0];
            const currencies = [...Object.keys(data.rates)];
            setDate(data.date);
            setCurrencyOptions(currencies);
            setFromCurrency(data.base);
            setToCurrency(firstCurrency);
            setExchangeRate(data.rates[firstCurrency]);
        })
    }, []);

    useEffect(() => {
        if (fromCurrency != null && toCurrency != null) {
            getCurrency(fromCurrency, toCurrency)
                .then(data => setExchangeRate(data.rates[toCurrency]));
        }
    }, [fromCurrency, toCurrency]);

    const handleFromAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(+e.target.value);
        setAmountInFromCurrency(true);
    };

    const handleToAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(+e.target.value);
        setAmountInFromCurrency(false);
    };

    const handleFromCurrency = (data: SingleValue<SelectOptions>) => {
        setFromCurrency(data.value)
    }
    const handleToCurrency = (data: SingleValue<SelectOptions>) => {
        setToCurrency(data.value)
    };

    const handleSwap = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    const convertedDate = formatDate(new Date());

    const dateStr = `Today: ${convertedDate}`;

    return (
        <div className='converter-container'>
            <span className='converter-date'>{dateStr}</span>
            <div className='converter-select-wrapper'>
                <CurrencyInput
                    selectTitle='From'
                    inputLabel='Change'
                    amount={fromAmount}
                    selectOptions={currencyOptions}
                    selectedCurrency={fromCurrency}
                    onChangeCurrency={handleFromCurrency}
                    onChangeAmount={handleFromAmountChange}
                />
                <Button styleClass='btn__swap' onClick={handleSwap}/>
                <CurrencyInput
                    selectTitle='To'
                    inputLabel='Receive'
                    amount={toAmount}
                    selectOptions={currencyOptions}
                    selectedCurrency={toCurrency}
                    onChangeCurrency={handleToCurrency}
                    onChangeAmount={handleToAmountChange}
                />
            </div>
        </div>
    );
};

export default CurrencyConverter;
