import React from "react";
import { Container, Erro, Content, FooterContent } from './styles';



const Field = ({ errorMsg, children }) => {
    return (
        <Container>
            {children}
            <Erro>{errorMsg}</Erro>
        </Container>
    )
}

const Footer = ({ children }) => {
    return (
        <FooterContent>
            {children}
        </FooterContent>
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