import styled from 'styled-components';
import bg_app from "../../assets/images/BG_App.png";

export const Container = styled.div`
    width: 100%;
    min-height: 100%;
    background-image: url(${bg_app});
    display: flex;
    flex-direction: column;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const Main = styled.main`
    width: fit-content;
    margin-top: 20px;
    display: flex;
    align-items: space-around;
    align-self: center;
    justify-content: center;
`