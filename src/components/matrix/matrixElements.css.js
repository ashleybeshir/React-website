import styled,{css} from 'react-emotion';
import {Random} from '../../utils/random';

export const Background = styled('div')`
    p {
        z-index: -1;
        @keyframes scrolldown {
            from {top: 0%; opacity: 1;}
            to {top: 80%; opacity: 0;}
        }
        @keyframes opacity{
            100% {opacity: 0;}
        }
        animation: scrolldown 3s infinite;
        transform: rotate(90deg); 
        position: absolute;
        font-weight: bold;
        text-shadow: 0 0 3px green;
    }
`;

export const BackgroundPosition = (position, color) => { 
    return css`
        left: ${position}%;
        animation-delay: ${Random.getRandomRange(0,3)}s !important;
        color: ${color};
    `
};