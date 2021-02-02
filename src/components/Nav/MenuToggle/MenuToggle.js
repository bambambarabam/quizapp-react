import React from 'react'; 
import './MenuToggle.css';

const MenuToggle = ({ onToggle, isOpen }) => {
    const cls = [
        'menu-toggle'
    ] 

    const item = []

    if (isOpen) {
        item.push('🧲')
        cls.push('opened')
    } else {
        item.push('💎')
    }

    return (
        <i className={cls.join(' ')}
            onClick={onToggle}
        >{item}</i>
    )
}

export default MenuToggle;