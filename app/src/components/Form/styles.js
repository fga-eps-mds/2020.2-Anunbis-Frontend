import styled from 'styled-components';

export const Container = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;
        height: fit-content;

        input {
            margin: 0px;
        }
    `;
export const Erro = styled.div`
    color: #F44336;
    font-size: 10px;
`;

export const Content = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    `;

export const FooterContent = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-around;
    align-self:center;
    `;
