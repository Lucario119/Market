import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    box-sizing: border-box;
    border: 0;
    padding: 0;
    margin: 0;
    outline: none;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;

}
ul{
    list-style: none;
}
html,body{
   max-width: 100vw;
   max-height: 100vh;
}
`;
