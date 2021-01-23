import React from 'react'
import './Button.css'

const Button = ({ children, onClick, disabled, type }) => {
    const cls = ['button', [type]]
    return (
        <button
            onClick={onClick}
            className={cls.join(' ')}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button