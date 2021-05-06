import styled from 'styled-components';
import Button from '../../components/Button';

export const Conteiner = styled.div`
  /* font-family: 'Comfortaa', cursive; */
  display: ${(props) => (props.display ? props.display : '')};
  flex-direction: column;
  align-items: center;
  width: ${(props) => (props.width ? props.width : '460px')};
  height: ${(props) => (props.height ? props.height : '460px')};
  background-color: ${(props) => (props.backColor ? props.backColor : '')};
  border-radius: 20px;
  text-align: ${(props) => (props.txtAlign ? props.txtAlign : '')};

  p {
    font-size: 12px;
    margin-left: 5px;
    margin-top: 14px;
    font-family: 'Comfortaa', cursive;
  }
`;

export const ContentExclude = styled.div`
  position: absolute;
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  background-color: #fff9c4;
  margin-top: 180px;
  border-radius: 10px;

  header {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #212121;
    color: white;
    text-align: center;
  }
`;

export const BtnReset = styled(Button)`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const BtnExcluir = styled(Button)`
  color: white;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Title = styled.h4`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 40px;
`;
