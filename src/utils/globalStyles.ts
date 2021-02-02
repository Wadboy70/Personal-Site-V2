import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{   
        font-family: 'Roboto Mono', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: white;
    }
    body{
        background: #242B66;
    }
    a{
        text-decoration: none;
    }
    .growOnHover{
        transition: .5s transform;
        :hover{
            transform: scale(1.1, 1.1) translateY(-5px);
        }
    }
`;

export default GlobalStyle;