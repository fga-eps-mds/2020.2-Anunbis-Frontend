import React from "react";
import styled from 'styled-components';


const Field = ({ errorMsg, children }) => {
    const Conteiner = styled.div`
        height: 40px;

        input {
            margin: 0px;
        }
    `;

    const Erro = styled.div`
    color: #F44336;
    font-size: 10px;
    `;

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
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-around;
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