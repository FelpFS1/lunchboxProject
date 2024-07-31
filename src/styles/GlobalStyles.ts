import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

a{
    text-decoration: none;
}

div#root{
    min-width: 100vw;
    height: 100vh;
}
body{
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme["gray-700"]};
    color:  ${(props) => props.theme["gray-100"]};
    -webkit-font-smoothing:antialiased;
    }
    body,input, textarea,button {
    font:400 1rem "Roboto", sans-serif;
}

input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
}

`;
export default GlobalStyles;
