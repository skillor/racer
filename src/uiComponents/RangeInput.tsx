import React, { useState } from 'react';

import { NOP } from '../utils';
import { InputContainer } from './InputContainer';

interface Porps {
    label?: string;
    id?: string;
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
    onChange?: (value: number, id?: string) => void;
}

export function RangeInput({ id, label, defaultValue, onChange = NOP, ...props }: Porps) {
    const [displayValue, setDisplayValue] = useState(defaultValue);

    return (
        <InputContainer label={label} id={id}>
            <input
                type="range" id={id} name={id}
                defaultValue={defaultValue} onChange={onInputChange} {...props}
            />
            <input value={displayValue} onChange={NOP}/>
        </InputContainer>
    );

    function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = Number(e.currentTarget.value);

        setDisplayValue(value);
        onChange(value);
    }
}
