import styled from 'styled-components';

export const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: fit-content;
  margin: ${(props) => (props.margin ? props.margin : '0px 0px 6% 0px')};
  input {
    @media (max-width: 640px) {
      width: 100%;
    }
    margin: 0px;
  }
  select {
    @media (max-width: 300px) {
      width: 100%;
    }
  }
`;

export const Erro = styled.div`
  color: var(--lightRed);
  font-size: 10px;
  @media (max-height: 640px) {
    font-size: 9px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-height: 660px) {
    max-height: 255px;
    overflow-y: auto;
    padding-bottom: 10px;
    input {
      font-size: 11px;
    }
  }
  @media (max-height: 150px) {
    display: none;
  }
`;

export const FooterContent = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-self: center;
  flex-wrap: wrap;
  button {
    @media (max-width: 155px) {
      width: 30px;
      height: 30px;
    }
    @media (max-height: 640px) {
      max-height: 50px;
      font-size: 9px;
    }
  }
`;
