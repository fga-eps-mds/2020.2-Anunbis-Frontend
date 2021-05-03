import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: -apple-system, 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    height: 100%;
    width: 100%;

    
}
    :root{
        --yellow: #FFD54F;
        --black: #212121;
        --darkBlue: #1D2935;
        --white:#FFFFFF;
        --cian: #26A69A;
        --lightRed: #FF6347;
        --transparent: rgb(0,0,0,0); 
        --lightWhite: #FFFDE7; 
    }
`