import React, { Component } from 'react';
import '../Drawer/Drawer.css';

const links = [
    1, 2, 3
]

class Drawer extends Component {
    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index} className='drawer__item'>
                    <a className='drawer__link'>{link}</a>
                </li>
            )
        })
    }

    render() {
        const cls = ['drawer']
        
        if (!this.props.isOpen) {
            cls.push('drawer_close')
        }

        return (
            <nav className={cls.join(' ')}>
                <ul className='drawer__list'>
                    {this.renderLinks()}
                </ul>
            </nav>
        )
    }
}

export default Drawer;

