
import React from 'react';
import classNames from 'classnames';
import './button.scss';
import './button.scss';


interface ButtonProps {
    id?: number;
    label?: string | boolean;
    styleClass?: string;
    onClick?: (event?: any) => void;
    disabled?: boolean;
    active?: string;
    children?: any;
    name?: string;
}

const Button = ({
                    id,
                    styleClass,
                    label,
                    disabled,
                    onClick,
                    children,
                    name,
                }: ButtonProps) => {
    const classes = classNames('btn', styleClass);

    return (
        <button
            data-for={id}
            className={classes}
            disabled={disabled}
            onClick={onClick}
            name={name}
        >
            {label} {children}
        </button>
    );
};


export default Button;

