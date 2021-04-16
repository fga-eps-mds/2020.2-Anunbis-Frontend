import styled from 'styled-components';
import bg_app from "../../assets/BG_App.png";

export const Container = styled.div`
    height: 100vh;
    background-image: url(${bg_app});
    display: flex;
    flex-direction: column;
`

export const Main = styled.main`
    width: fit-content;
    margin-top:20px;
    display: flex;
    align-items: space-around;
    align-self: center;
    justify-content: center;
`