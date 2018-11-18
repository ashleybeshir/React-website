import React from 'react'
import { Link } from "gatsby";
import {MenuBackground, ExitButton} from './menu.css';

const Menu = ({color, exitLink, children}) => {    
    return(
        <div className={MenuBackground(color)}>
            <ExitButton>
                <Link to={exitLink}>X</Link>
            </ExitButton>
            {children}
        </div>
    );
}

export default Menu;