import styled from 'styled-components';
import Button from '../Button';

export const MenuBar = styled.div`
    background-color: #212121;
    display: flex;
    height: 40px;
`

export const Logo = styled.div`
    width: 280px;
`

export const ImageLogo = styled.img`
        max-width: 190px;
        display: inline-block;
`

export const ProfessorSearchStyle = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    width: 400px;
    Input {
        color: #FFFDE7;
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
    margin-top: 10px;
    letter-spacing: 1.5px;
    color: #FFD54F;
    border: none;
    box-shadow: none;
`
export const Container = styled.div`
    background-color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    height: 2px;
    margin-left: auto;
    margin-inline-end: 50px;
    letter-spacing: 1.5px;
    color: #FFD54F;
    box-shadow: none;
`
