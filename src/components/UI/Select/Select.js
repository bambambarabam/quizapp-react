import React from 'react';
import './Select.css';

const Select = (props) => {
    const htmlFor = `${props.label}-${Math.random()}`
    return (
        <div
            className='select__container'>
            <label
                className='select__label'
                htmlFor={htmlFor}>
                {props.label}
            </label>
            <select
                className='select'
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}>
                {props.options.map((option, index) => {
                    return (
                        <option
                            value={option.value}
                            key={option.value + index}>
                            {option.text}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default Select;