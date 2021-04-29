import styled from 'styled-components';
import Button from '../../components/Button';

export const Container = styled.div`
    height: 100vh;
    background-image: linear-gradient(#26425F, #1D2935); 
    display: flex;
    flex-direction: column;
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
        text-decoration: none;
        font-size: 24px;
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