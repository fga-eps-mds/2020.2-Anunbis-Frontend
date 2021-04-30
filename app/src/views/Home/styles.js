
import styled, { keyframes } from 'styled-components';
import Button from '../../components/Button';

const backInRight = keyframes`
    0% {
        transform: scale(0.8);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
`

const pulse = keyframes`
    0% {
        transform: scale(1);
    }
  
    50% {
        transform: scale(1.02);
    }

    100%{
        transform: scale(1);
    }
`

export const Container = styled.div`
    height: 100vh;
    background-image: linear-gradient(#26425F, #1D2935); 
    display: flex;
    flex-direction: column;
    *{
    scroll-behavior: smooth !important;
    }
`

export const Main = styled.main`
    overflow-y: scroll;
    -ms-overflow-style: none; 
    display: grid;
    grid-column: 1;
    grid-template-rows: repeat(4, calc(100vh - 45px));
    ::-webkit-scrollbar {
    display: none;
    }
    height: fit-content;
    width: 100vw;
    align-items: center;
    align-self: center;
`

export const Footer = styled.main`
background: #212121;
color: #FFFFFF;
width: 100%;
height: 40px;
margin-top: auto;

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 40px;
        margin-left: 25px;
    }
`
export const Middle = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
margin-left: auto;

    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 50vw;
        align-items: center;
    }
`;

export const LinkMenu = styled.a`

        color: var(--lightWhite);
        display: block;
        padding: 10px;
        text-decoration: ${props => props.isSelected ? "underlinde" : "none"};
     

`

export const BtnEdition = styled(Button)`
    margin: ${props => props.margin ? props.margin : "0px"};
    width: ${props => props.width ? props.width : "80px"};
    padding: 5px;
    font-size: 14px;
    font-style: 'Roboto';
    letter-spacing: 1.5px;
    border: 0px;
    margin-left: auto;
    color: ${props => props.color ? props.color : "var(--black)"};
    background-color: ${props => props.background ? props.background : "var(--yellow)"};
`

export const Content = styled.div`
    display: ${props => props.display ? props.display : 'flex'};
    flex-direction: ${props => props.direction ? props.direction : 'row'};
    align-items: center;
    justify-content: center;
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '100%'};
    max-height: 100%;
    background-color: ${props => props.backColor ? props.backColor : ''};

    text-align: ${props => props.txtAlign ? props.txtAlign : ''};
`;

export const CardContent = styled.div`
    animation: ${props => props.isVisible ? backInRight : 'none'}  1s ease-in;
    height: 20vh;
    width: 90%;
    display: flex;
    flex-flow: row;
    justify-content: space-around;
`

export const Image = styled.img`
    animation: ${props => props.isVisible ? pulse : 'none'}  1s ease-in;
    width: ${props => props.width ? props.width : '60%'};
    height: ${props => props.height ? props.height : '100%'};
    margin: ${props => props.margin ? props.margin : 'auto'};
    border-radius: 0px;
`;

export const Text = styled.div`
    animation: ${props => props.isVisible ? pulse : 'none'} 1s ease-in-out;
    width: ${props => props.width ? props.width : '40%'};
    height: fit-content;
    font-style: 'normal';
    text-align: center;
    margin-inline-start: 40px;

    label{
        margin-top: 100px;
        font-size: 40px;
        color: var(--lightWhite);       
    }

    p{
        margin-top: 5px;
        color: #C4C4C4;
        font-size: 24px;
        line-height: 26px;
        text-align: justify;
        justify-content: baseline;
    }

    a {
        display: block;
        text-decoration: none;
        color: #FFF;
        margin-top: 10px;
        font-size: 16px;
        font-weight: bold;
        text-shadow: 2px 2px 2px black;
        color: var(--lightWhite);
    }
    
`;