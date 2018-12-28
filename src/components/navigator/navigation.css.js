import styled,{css} from 'react-emotion';

export const NavigationStyles = styled('div')`
    color: white;
    display: flex;
    flex-direction: column;
    font-weight: bold;

    a{
        margin: 3px 0 3px 5px;
        cursor: pointer;
    }

    .active 
    {
        color: red;
    }
`;

export const BackgroundPosition = (height) => css `
    display: flex;
    align-items: center;
    position: fixed;
    height: ${height}px;
    z-index: 10;
`;