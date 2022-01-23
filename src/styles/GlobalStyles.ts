import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../assets/BACKGROUND.png';

export default createGlobalStyle`
*{
    box-sizing: border-box;
    border: 0;
    padding: 0;
    margin: 0;
    outline: none;
    font-family: 'Passion One', cursive;
    text-decoration: none;

}
button{
    cursor:pointer;
    background: none;
}
ul{
    list-style: none;
}
html,body{

    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url(${backgroundImage}) ;
  
}
:root{
    --white: #ffffff;
    --yellow: #ffb700;
    --red: #ff0000;
    --brown: #542c09;
}
`;
