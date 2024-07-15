import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
    body{
        background-color: ${(props) => props.theme["gray-700"]};
        color:  ${(props) => props.theme["gray-100"]};
        -webkit-font-smoothing:antialiased;
    }
    body,input, textarea,button {
    font:400 1rem "Roboto", sans-serif;
}

`;
export default GlobalStyles;
