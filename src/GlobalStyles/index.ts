import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, :root { 
    height: 100%;
    width: 100%;
    background-image: linear-gradient( to bottom, var(--orangeStrong), var(--orangeWeak));
  }
  *, button, input {
    font-family: Arial, Helvetica, sans-serif;
  }
  :root {
    --orangeStrong: #FF7F00; 
    --orangeMedium: #FF9300; 
    --orangeWeak: #FFBA00;
  }
`;