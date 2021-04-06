import React from "react";
import styled from 'styled-components';
import BG_FGA from "../../assets/BG_FGA.png";
import Logo from "../../assets/Logo.jpg";

const Background = styled.div`
    height: 100vh;
    background-image: url(${BG_FGA});
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
`;

const Base = styled.div`
    background-color: #FFD54F;
    height: 450px;
    width: 800px;
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
`;

const Imagem = styled.img`
    height: 450px;
    width: 400px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    object-fit: cover;
`;

const Main = styled.div`
    height: 450px;
    width: 400px;
`;

export default function LayoutAutentication({children}){
    return (
        <Background>
            <Base>
                <Main>
                {children}
                </Main>
                <Imagem src={Logo} alt="Logo"/>
            </Base>
        </Background>
    );
}