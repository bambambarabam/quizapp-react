import React from 'react';
import './Input.css';


function isInvalid({ valid, touched, shouldValidate }) {
    return !valid && touched && shouldValidate
}

function Input({ label, type, value, onChange, errorMessage }) {

    const inputType = type || 'text';
    const cls = ['input'];
    const htmlFor = `${inputType}-${Math.random()}`;

    if (isInvalid({})) {
        cls.push('input_invalid')
    }

    return (
        <div
            className='input__container'>
            <label
                className='input__label'
                htmlFor={htmlFor}
            >
                {label}
            </label>
            <input
                className={cls.join(' ')}
                type={inputType}
                id={htmlFor}
                value={value}
                onChange={onChange}
            />
            {
                isInvalid({})
                    ?
                    <span
                        className='input__span'>
                        {errorMessage || 'Введите верное значение'}
                    </span>
                    :
                    null
            }
        </div>
    )
}

export default Input;