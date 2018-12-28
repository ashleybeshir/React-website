import React from 'react';
import {LayoutStyles} from './layoutCard.css';

const Layout = React.forwardRef((props, ref) => 
{
    return (
        <div className={LayoutStyles(props.windowHeight)} ref={ref}>
            {props.children}
        </div>
    );
});

export default Layout;