import React from 'react';
import {
  Container, Erro, Content, FooterContent,
} from './styles';

const Field = ({ errorMsg, children }) => (
  <Container>
    {children}
    <Erro>{errorMsg}</Erro>
  </Container>
);

const Footer = ({ children }) => (
  <FooterContent>
    {children}
  </FooterContent>
);

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
