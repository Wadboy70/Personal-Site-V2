import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{   
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: #242B66;
    }
    .growOnHover{
        transition: .5s transform;
        :hover{
            transform: scale(1.1, 1.1);
        }
    }
`;

export default GlobalStyle;