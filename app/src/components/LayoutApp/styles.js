import styled from 'styled-components';
import bg_app from "../../assets/images/BG_App.png";
import Button from '../Button';

export const Container = styled.div`
    width: 100%;
    min-height: 100%;
    background-image: url(${bg_app});
    display: flex;
    flex-direction: column;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    * :-webkit-scrollbar {
    display: none;
    }
`

export const Main = styled.main`
    width: fit-content;
    margin-top: 20px;
    display: flex;
    align-items: space-around;
    align-self: center;
    justify-content: center;
`

export const ProfessorSearchStyle = styled.div`
    display: flex;
    align-items: center;
    width: 400px;
    margin: auto;
    Input {
        color: ${props => props.isValid ? "#FFFDE7" : "red"};
        border-bottom: 1px solid #FFFDE7;
        margin: 0px;   
    }
    input {
            height: 18px;
    }
    input::-webkit-input-placeholder  {
        height: 30px;
        color: rgba(255, 255, 255, 0.603);
    }
`

export const BtnEdition = styled (Button)`
    letter-spacing: 1.5px;
    color: #FFD54F;
    border: none;
    box-shadow: none;
`
export const End = styled.div`
    background-color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    height: ${props => props.height ? props.height : '10px'};
    margin-left: auto;
    margin-inline-end: 50px;
    letter-spacing: 1.5px;
    color: #FFD54F;
    box-shadow: none;
`

