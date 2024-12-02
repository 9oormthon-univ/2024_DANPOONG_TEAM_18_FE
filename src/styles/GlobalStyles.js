import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Gyeonggi_Batang_Bold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2410-3@1.0/Batang_Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  html, body {
    background-color: gray;
    color: #333;
    font-family: 'Gyeonggi_Batang_Bold';
    min-height: 100vh;
    width: 100%;
  }

  body {
    width: 90vw;
    max-width: 360px;
    height: 90vh;
    max-height: 740px;
    margin: auto;
    background: linear-gradient(${(props) => props.theme.colors.background}, #FFFFFF);
    overflow: hidden;
    position: relative;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo {
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20vw;
    max-width: 150px;
    height: 20vh;
    max-height: 150px;
    opacity: 0.2;
    z-index: 1;
  }
`;

export default GlobalStyles;
