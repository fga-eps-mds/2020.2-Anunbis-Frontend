import styled from "styled-components"

export const Container = styled.div`
    border-radius: 20px;
    background-color: var(--yellow);
    height : fit-content;  
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 50%);
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 20px;
    padding-bottom: 20px;
    overflow-y: auto;
`

export const ContainerOptions = styled.div`
    display: grid;
    grid-template-columns: 100px 400px;
    align-items: center;
    justify-content: space-evenly;
    font-weight: bold;
    padding: 5px;

`

export const ImageOptions = styled.img`
    height : 45px;
    transition: transform 1s ease;
    transform: ${props => props.rotate ? `rotate(${props.rotate})` : ""};
    

`
export const ContainerPost = styled.div`
    background-color: #FFF9C4;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 50%);
    margin-top: 20px;
    border-radius: 15px;
    height : fit-content;
    width : 90%;

`

export const ContainerHeader = styled.div`
    display: flex;
    padding-left: 60px;
`

export const BtnHomeProfessor = styled.div `
    background-color: var(--lightWhite);
    margin: 90px 100px 0 0;
    height: 150px;
    width: 250px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
       

`
 export const Home = styled.div `
     display: grid;
     grid-template-columns: 300px 800px;
     
 `
export const LoadingBox = styled.div`
width: 100%;
height: 20vh;
display: flex;
justify-content: center;
align-items: center;
`;