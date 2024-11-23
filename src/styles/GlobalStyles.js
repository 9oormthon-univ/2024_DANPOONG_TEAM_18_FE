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
    width: 360px;
    height: 740px;
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
