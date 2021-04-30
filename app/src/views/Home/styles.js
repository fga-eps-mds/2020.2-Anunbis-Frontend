import styled from 'styled-components';
import Button from '../../components/Button';

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
    ::-webkit-scrollbar {
    display: none;
    }
    height: 200vh;
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

    a{
        color: var(--lightWhite);
        display: block;
        padding: 10px;
        text-decoration: ${props => props.isSelected ? 'underline' : 'none'};
        font-size: 24px;
    }
    a:visited{
        text-decoration: underline;
    }
    a:hover{
        text-decoration: underline;
    }
    
    
`;

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
    display: ${props => props.display ? props.display : ''};
    flex-direction:row;
    align-items: center;
    justify-content: center;
    width: ${props => props.width ? props.width : '100vw'};
    height: ${props => props.height ? props.height : 'calc(100vh - 40px)'};
    background-color: ${props => props.backColor ? props.backColor : ''};

    text-align: ${props => props.txtAlign ? props.txtAlign : ''};
`;

export const Image = styled.img`
    width: ${props => props.width ? props.width : '60%'};
    height: ${props => props.height ? props.height : '100%'};
    margin: ${props => props.margin ? props.margin : 'auto'};
    border-radius: 0px;
`;

export const Text = styled.div`
    width: ${props => props.width ? props.width : '40%'};
    height: fit-content;
    font-family: 'Roboto';
    font-style: 'normal';
    text-align: center;
    margin-inline-start: 40px;
    label{
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
    
`;