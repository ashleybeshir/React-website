import React from 'react';
import {Background, BackgroundPosition} from './matrixElements.css';
import {Random} from '../../utils/random';

const matrixElements = ({max, maxLength, color}) => {
    var elements = [];
    for(var i=0; i < max; i++){
        var randomNumber = Random.getRandomRange(4,maxLength);
        var elementPosition = (i * 100 / max);
        var elementPosition = elementPosition > 90 ? Random.getRandomRange(0,90) : elementPosition;
        elements.push([Random.getRandomString(randomNumber),elementPosition]);
    };
    return (
        <Background>
            {
                elements.map((x,i) => 
                { return (<p key={i} className={BackgroundPosition(x[1], color)}>{x[0]}</p>)})
            }
        </Background>
    );
}

export default matrixElements;