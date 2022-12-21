import React, {ChangeEvent} from 'react';
import './input.scss';
import classNames from "classnames";

interface InputProps {
    type: string;
    label?: string;
    placeholder?: string;
    styleClass?: string;
    value: number;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({label, type, placeholder, styleClass, value, onChange}: InputProps) => {

    const inputStyle = classNames('input', styleClass)

    return (
        <div className='input_container'>
            {label && <div className='select_title'>{label}</div>}
            <input
                type={type}
                placeholder={placeholder}
                className={inputStyle}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
