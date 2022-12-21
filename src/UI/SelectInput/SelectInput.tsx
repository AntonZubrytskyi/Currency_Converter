import React from 'react';
import Select, {StylesConfig, GroupBase, SingleValue, ActionMeta} from 'react-select';
import './select-container.scss';
import {SelectOptions} from "../../types";


interface SelectInputProps {
    styles: StylesConfig<SelectOptions, false, GroupBase<SelectOptions>>;
    options: SelectOptions[];
    onChange: (newValue: SingleValue<SelectOptions>, actionMeta: ActionMeta<SelectOptions>) => void;
    value: SelectOptions;
    selectTitle: string;
    message: string;
}

const SelectInput = ({
                         options,
                         styles,
                         onChange,
                         value,
                         selectTitle,
                         message
                     }: SelectInputProps) => (
        <div className='select_container'>
            {selectTitle && <div className='select_title'>{selectTitle}</div>}
            <Select
                value={value}
                options={options}
                styles={styles}
                onChange={onChange}
                noOptionsMessage={() => message}
            />
        </div>
    )
;
export default SelectInput;
