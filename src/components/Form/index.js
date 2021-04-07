import React from "react";
import styled from 'styled-components';

const Conteiner = styled.div`
        height: fit-content;

        input {
            margin: 0px;
        }
    `
const Erro = styled.div`
    color: #F44336;
    font-size: 10px;
`;

const Field = ({ errorMsg, children }) => {
    return (
        <Conteiner>
            {children}
            <Erro>{errorMsg}</Erro>
        </Conteiner>
    )
}

const Content = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-items: center;
    `;

const Footer = ({ children }) => {
    const Content = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-around;
    align-self:center;
    `;

    return (
        <Content>
            {children}
        </Content>
    )
}

function Form({ children, onSubmit }) {
    return (
        <Content onSubmit={onSubmit}>
            {children}
        </Content>

    );
}


Form.Field = Field;
Form.Footer = Footer;
export default Form;