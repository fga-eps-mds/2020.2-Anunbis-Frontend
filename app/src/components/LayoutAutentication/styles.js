import styled from 'styled-components';
import BG_FGA from "../../assets/images/BG_FGA.png";

export const Background = styled.div`
    height: 100vh;
    background-image: url(${BG_FGA});
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
`;

export const Base = styled.div`
    background-color: #FFD54F;
    height: 450px;
    width: 800px;
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
`;

export const Imagem = styled.img`
    height: 450px;
    width: 400px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    object-fit: cover;
`;

export const Main = styled.div`
    height: 450px;
    width: 400px;
`;
