import React from 'react';
import './Layout.css';

const Layout = (props) => {
    return (
        <div className='layout'>
            <main className='layout__main'>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;