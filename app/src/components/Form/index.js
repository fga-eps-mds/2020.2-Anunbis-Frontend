import React from 'react';
import { FieldContainer, Erro, FormContainer, FooterContent } from './styles';

const Field = ({ errorMsg, children }) => (
  <FieldContainer>
    {children}
    <Erro className="error">{errorMsg}</Erro>
  </FieldContainer>
);

const Footer = ({ children }) => <FooterContent>{children}</FooterContent>;

function Form({ children, onSubmit }) {
  return <FormContainer onSubmit={onSubmit}>{children}</FormContainer>;
}

Form.Field = Field;
Form.Footer = Footer;
export default Form;
