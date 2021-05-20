import styled from 'styled-components';

export const Conteiner = styled.div`
  display: ${(props) => (props.display ? props.display : '')};
  flex-direction: column;
  align-items: center;
  width: ${(props) =>
    props.width ? `min(55vw, ${props.width})` : 'min(65vw, 560px)'};
  height: ${(props) =>
    props.height ? `min(55vw, ${props.height})` : 'min(65vh, 560px)'};
  background-color: ${(props) => (props.backColor ? props.backColor : '')};
  border-radius: 20px;
  text-align: ${(props) => (props.txtAlign ? props.txtAlign : '')};

  p {
    font-size: 12px;
    margin-left: 5px;
    margin-top: 14px;
    font-family: 'Comfortaa', cursive;
    flex-wrap: wrap;
    @media (max-height: 660px) {
      font-size: 10px;
    }
  }
`;
