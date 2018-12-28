import styled,{css} from 'react-emotion';

//vh causes issue on mobile
export const LayoutStyles = (heigth) => css`
    width: 100%;
    min-height: ${heigth}px;
    overflow: hidden;
    position: relative;
    z-index: 1;
`;


