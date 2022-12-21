import React from 'react';
import './CurrencyInput.scss';
import Input from "../../UI/Input/Input";
import SelectInput from "../../UI/SelectInput/SelectInput";
import {currencySelectStyle} from "../../UI/SelectInput/selectStyles";
import {SelectOptions} from "../../types";
import {ActionMeta, SingleValue} from "react-select";


interface CurrencyInputProps {
    amount: number;
    selectedCurrency: string;
    selectOptions: string[];
    onChangeCurrency: (newValue: SingleValue<SelectOptions>, actionMeta: ActionMeta<SelectOptions> | null) => void;
    onChangeAmount: (e: React.ChangeEvent<HTMLInputElement>) => void;
    selectTitle: string;
    inputLabel: string;
}

const CurrencyInput = ({
                           amount,
                           selectedCurrency,
                           selectOptions,
                           onChangeCurrency,
                           onChangeAmount,
                           selectTitle,
                           inputLabel,
                       }: CurrencyInputProps) => {

    const selectValue = {value: selectedCurrency, label: selectedCurrency};

    const currencyOptions = selectOptions.map(data => {
        return {
            value: data,
            label: data
        }
    })

    return (
        <div className='currency-input-container'>
            <Input
                value={amount}
                onChange={onChangeAmount}
                type='number'
                styleClass='input__currency_value'
                label={inputLabel}
            />
            <SelectInput
                value={selectValue}
                onChange={onChangeCurrency}
                options={currencyOptions}
                styles={currencySelectStyle}
                selectTitle={selectTitle}
            />
        </div>
    );
};

export default CurrencyInput;
