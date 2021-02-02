import React, { useState } from 'react';
import './Layout.css';
import MenuToggle from '../../components/Nav/MenuToggle/MenuToggle';
import Drawer from '../../components/Nav/Drawer/Drawer';

const Layout = ({ children }) => {
    const [isMenuOpened, setMenuOpened] = useState([]);
    const toggleMenuHandler = () => setMenuOpened(!isMenuOpened);

    return (
        <div className='layout' >
            <Drawer
                isOpen={isMenuOpened}
            />
            <MenuToggle
                onToggle={toggleMenuHandler}
                isOpen={isMenuOpened}
            />
            <main className='layout__main'>
                {children}
            </main>
        </div>
    )
}

export default Layout;