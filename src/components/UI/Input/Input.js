import React from 'react';
import './Input.css';

function isInvalid({ valid, touched, shouldValidate }) {
    return !valid && touched && shouldValidate
}

function Input({ label, type, value, onChange, errorMessage, valid, touched, shouldValidate, isValid, required, minLength,
    maxLength }) {

    const inputType = type || 'text';
    const labelClassName = ['input__label']
    const htmlFor = `${inputType}-${Math.random()}`;

    // if (isInvalid({ valid, touched, shouldValidate })) {
    //     labelClassName.push('input_invalid')
    // }

    return (
        <div
            className='input__container'>
            <label
                className={labelClassName.join(' ')}
                htmlFor={htmlFor}
            >
                {label}
            </label>
            <input
                className='input'
                minLength={minLength}
                maxLength={maxLength}
                type={inputType}
                id={htmlFor}
                placeholder={`${label}`}
                value={value}
                onChange={onChange}
                required={required}
            />
            {
                !isValid
                    ?
                    <span
                        className={'input__span'}>
                        {errorMessage}
                    </span>
                    :
                    null
            }
        </div>
    )
}

export default Input;