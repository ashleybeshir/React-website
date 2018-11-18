import React from 'react'
import {ButtonBackground} from './colorButton.css';

const ColorButton = ({color, text, onMouseEnter, onClick}) => {
    
    return(
        <a onMouseEnter={() => {onMouseEnter(color)}} onClick={onClick}>
            <div className={ButtonBackground(color)}>
                <p>{text}</p>
            </div>
        </a>
    );
}

export default ColorButton;