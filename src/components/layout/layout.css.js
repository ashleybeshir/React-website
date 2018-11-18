import styled,{css,injectGlobal } from 'react-emotion';

injectGlobal`
  body{
    background-attachment: fixed !important;
    background-color: black;
    margin: 0;
  }
`;

export const Background = styled('div')`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackgroundFooter = (color) => css`
  width: 100%;
  height: 50px;
  background: linear-gradient(black 10%, ${color});
  position: fixed;
  bottom: 0;
`;
