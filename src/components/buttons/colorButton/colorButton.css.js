import styled,{css} from 'react-emotion';
import {ButtonSize} from '../../../styles/global';

export const ButtonBackground = (color) => {
    return css`
        border: 1px solid ${color};
        width: ${ButtonSize.ButtonWidth}px;
        height: ${ButtonSize.ButtonHeight}px;
        border-radius: 10px;

        p {
            color: ${color};
            text-align: center;
        }
    `;
};