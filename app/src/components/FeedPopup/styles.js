import styled from 'styled-components';

export const Container = styled.div`
    width: 372px;
    min-height: 380px;
    height: fit-content;
    background-color: #FFFDE7;
    border-bottom-right-radius: 2%;
    border-bottom-left-radius: 2%;
    display: flex;
    flex-direction: column;

`;

export const Header = styled.div`
    height: 20px;
    width: inherit;
    background-color: #212121;
    display: flex;
    justify-content: center;

    Button {
        margin-inline: 0px;
        color: #FFFDE7;
        border: 0px;
    }
`;

export const Title = styled.div`
    display:flex;
    color: #FFFDE7;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Comfortaa', cursive;
`;

export const Content = styled.main`
align-self: center;
justify-content: center;
`;