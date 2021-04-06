import React from "react";
import styled from 'styled-components';


const Field = ({ errorMsg, children }) => {
    const Conteiner = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 40px;
    `;

    const Erro = styled.div`
    color: #F44336;
    font-size: 10px;
    `;

    return (
        <Conteiner>
            {children}<br/>
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