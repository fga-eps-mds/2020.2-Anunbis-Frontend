import styled from 'styled-components';
import Button from '../../components/Button';

export const Conteiner = styled.div`
  display: ${(props) => (props.display ? props.display : '')};
  flex-direction: column;
  align-items: center;
  width: ${(props) => (props.width ? props.width : 'min(65vw, 560px)')};
  height: ${(props) => (props.height ? props.height : 'min(65vh, 560px)')};
  background-color: ${(props) => (props.backColor ? props.backColor : '')};
  border-radius: 20px;
  text-align: ${(props) => (props.txtAlign ? props.txtAlign : '')};

  p {
    font-size: 12px;
    margin-left: 5px;
    margin-top: 14px;
    font-family: 'Comfortaa', cursive;
    flex-wrap: wrap;
  }

  @media (max-height: 600px) {
    overflow-y: auto;
  }
`;

export const BtnReset = styled(Button)`
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-height: 660px) {
    font-size: 10px;
  }
`;

export const BtnExcluir = styled(Button)`
  color: white;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;

  &:hover,
  &focus {
    color: var(--black);
  }
  @media (max-height: 660px) {
    font-size: 10px;
  }
`;

export const Title = styled.h4`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 40px;
  @media (max-height: 660px) {
    font-size: 14px;
  }
`;