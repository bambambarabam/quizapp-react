import React, { Component } from 'react';
import '../Drawer/Drawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { NavLink } from 'react-router-dom';

const links = [
    {
        to: '/',
        label: 'Список',
        exact: true
    },
    {
        to: '/auth',
        label: 'Авторизация',
        exact: false
    },
    {
        to: '/quiz-creator',
        label: 'Создать тест',
        exact: false
    }
]

class Drawer extends Component {

    clickHandler = () => {
        this.props.onClose()
    }
    
    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index} className='drawer__item'>
                    <NavLink
                        className='drawer__link'
                        to={link.to}
                        exact={link.exact}
                        activeClassName={'drawer__link_active'}
                        onClick={this.clickHandler}
                    >
                        {link.label}
                    </NavLink>
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
            <>
                <nav className={cls.join(' ')}>
                    <ul className='drawer__list'>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
            </>
        )
    }
}

export default Drawer;

