import React from 'react';
import { FieldContainer, Erro, FormContainer, FooterContent } from './styles';

const Field = ({ errorMsg, margin, children }) => (
  <FieldContainer margin={margin}>
    {children}
    <Erro className="error">{errorMsg}</Erro>
  </FieldContainer>
);

const Footer = ({ children }) => <FooterContent>{children}</FooterContent>;

function Form(props) {
  const { onSubmit, children } = props;
  return <FormContainer {...props} onSubmit={onSubmit}>{children}</FormContainer>;
}

Form.Field = Field;
Form.Footer = Footer;
export default Form;
