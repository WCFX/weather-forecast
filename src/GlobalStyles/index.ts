import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *, html, body {
    height: 100%;
    width: 100%;
    
  }
  *, button, input {
    font-family: Arial, Helvetica, sans-serif;
  }
  :root {
    --orangeWeak: #FFBA00;
    --orangeStrong: #FF7F00; 
  }
`;