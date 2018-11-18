import styled,{css} from 'react-emotion';

export const MenuBackground = (color) => {
    return css`
        border: 1px solid ${color};
        border-radius: 10px;
        background-color: black;
        width: 60%;
        margin-top: 50px;
        height: 77vh;
        max-height: 80vh;
        overflow: auto;
        p {
            color: ${color};
            text-align: center;
        }
        div:first-child{

        }
    `;
};

export const ExitButton = styled('div')`
    display: flex;
    justify-content: flex-end;

    a{
        text-decoration: unset;
        border: 1px solid white;
        width: 20px;
        height: 20px;
        cursor: pointer;
        color: white;
        text-align: center;
        margin-right: 10px;
        margin-top: 10px;
    }
    
`;