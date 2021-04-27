import styled from "styled-components"


export const Container = styled.div`
    border-radius: 20px;
    background-color: #FFD54F;
    height : 90%;
    width : 90%;
    display : flex;
    justify-content : center;  
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 50%);
`

export const MinorContainer = styled.div`
    margin-top: 20px;
    border-radius: 15px;
    background-color: #FFF9C4;
    height : 45px;
    width : 90%;
    display : flex;
    align-items : center;
    justify-content : space-around;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 50%);
    font-weight: bold;

`

export const ImageOptions = styled.img`
    height : 90%;
    transition: transform 1s ease;
    transform: ${props => props.rotate ? `rotate(${props.rotate})` : "" };
    

`

