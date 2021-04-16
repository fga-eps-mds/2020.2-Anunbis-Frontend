import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu';
import bg_app from "../../assets/BG_App.png";

const Container = styled.div`
    height: 100vh;
    background-image: url(${bg_app});
    display: flex;
    flex-direction: column;
`

const Main = styled.main`
    /* padding-top: 20px; */
    width: fit-content;
    margin-top:20px;
    display: flex;
    align-items: space-around;
    align-self: center;
    justify-content: center;
`

export default function LayoutApp({ children }) {
    return (
        <Container>
            <Menu />
            <Main>
                {children}
            </Main>
        </Container>
    );
}