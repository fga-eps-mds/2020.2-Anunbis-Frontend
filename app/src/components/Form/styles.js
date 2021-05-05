import styled from 'styled-components';

export const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: fit-content;
  margin: 0px 0px 25px 0px;
  input {
    margin: 0px;
  }
  .error {
    transform: translateY(100%);
    margin-top: 10px;
  }
`;

export const Erro = styled.div`
  color: #f44336;
  font-size: 10px;
  position: absolute;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterContent = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-self: center;
`;
