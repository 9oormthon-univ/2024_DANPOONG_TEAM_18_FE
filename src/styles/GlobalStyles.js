import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background-color: gray;
    color: #333;
    min-height: 100vh;
    width: 100%;
  }

  body {
    max-width: 480px;
    margin: auto;
    background: linear-gradient(${(props) => props.theme.colors.background}, #FFFFFF);
    height: 100vh;
    overflow: hidden;
    position: relative;
  }

  .logo {
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 150px;
    opacity: 0.2;
  }
`;

export default GlobalStyles;
