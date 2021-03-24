import React, { useState, useEffect } from 'react';
import './Layout.css';
import MenuToggle from '../../components/Nav/MenuToggle/MenuToggle';
import Drawer from '../../components/Nav/Drawer/Drawer';

const Layout = ({ children }) => {
    const [isMenuOpened, setMenuOpened] = useState(false);
    const toggleMenuHandler = () => setMenuOpened(!isMenuOpened);

    function menuCloseHandler() {
        setMenuOpened(false)
    }

    useEffect(() => {
        function closeOnEsc(evt) {
            if (evt.key === 'Escape' || evt.key === 'Esc') {
                menuCloseHandler();
            }
        }
        document.addEventListener('keyup', closeOnEsc);
        return () => {
            document.removeEventListener('keyup', closeOnEsc);
        };
    }, []);

    return (
        <div className='layout' >
            <Drawer
                isOpen={isMenuOpened}
                onClose={menuCloseHandler}
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