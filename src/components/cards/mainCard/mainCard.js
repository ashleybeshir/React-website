import React from 'react'
import Layout from '../layoutCard/layoutCard';
import ColorButton from '../../buttons/colorButton/colorButton';
import MatrixElements from '../../matrix/matrixElements';
import {MainStyles} from './mainCard.css';

const MainCard = ({reference, color, changeColor, refAboutMe, windowHeight}) => 
(
    <Layout ref={reference} windowHeight={windowHeight}>
        <MatrixElements max={20} maxLength={25} color={color}/>
        <MainStyles>
            <ColorButton color={'yellow'} text={'Button 1'} onMouseEnter={changeColor} onClick={ () => {console.log("hello")}} />
            <ColorButton color={'orange'} text={'Button 2'} onMouseEnter={changeColor} onClick={ () => {refAboutMe()} }/>
            <ColorButton color={'white'} text={'Button 3'} onMouseEnter={changeColor}/>
        </MainStyles>
    </Layout>
);

export default MainCard;