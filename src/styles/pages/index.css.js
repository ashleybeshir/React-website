import styled,{css} from 'react-emotion';
import {ButtonSize, MobileSize, TabletSize} from '../global';

export const Menu = (color) => css`
    z-index: 2;
    width: 20%;
    min-width: 250px;
    border: 2px solid ${color};
    border-radius: 10px;
    background-color: black;
    margin-top: 20vh;
    
     > div{
        margin-left: auto;
        margin-right: auto;
        width: ${ButtonSize.ButtonWidth}px;
    }
    div:first-child{
        margin-top: 20px;
    }
    div:last-child{
        margin-bottom: 20px;
    }

    @media only screen and (max-width: ${TabletSize.TabletWidth}px) {
       
        
    }

    @media only screen and (max-width: ${MobileSize.MobileWidth}px) {
        
    }
`;

/*
position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);

*/ 