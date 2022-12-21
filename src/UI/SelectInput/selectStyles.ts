import { StylesConfig} from 'react-select';
import {IsMulti, SelectOptions} from "../../types";

export const currencySelectStyle: StylesConfig<SelectOptions, IsMulti> = {
    dropdownIndicator: (provided, state:any) => ({
        ...provided,
        transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
    }),
    container: (base) => ({
        ...base,
        width: '100%',
    }),
    control: (base) => ({
        ...base,
        minHeight: '2.5rem',
        background: '#FAFDFF',
        borderRadius: 0,
        height: '1.875rem',
        border: '0.3px solid rgba(140, 159, 195, 0.29)',
        flexWrap: 'nowrap',
    }),
    menu: (base) => ({
        ...base,
        fontSize: 16,
        borderRadius: 0,
        marginTop: 0,
    }),
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#171717' : '#737373',
        background: state.isSelected ? '#DEEBFF' : 'transparent',
        margin: 0,
    }),
    singleValue: (provided) => ({
        ...provided,
        fontSize: 18,
        color: '#171717',
    }),
};
