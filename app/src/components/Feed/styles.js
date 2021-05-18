import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: ${(props) => (props.width ? props.width : 'min(70vw, 700px)')};
  min-height: 20vh;
  max-height: 89vh;
  height: fit-content;
  margin: 0 0 40px 0;
  border-radius: ${(props) =>
    props.radius ? props.radius : '0px 0px 20px 20px'};
  background-color: #fffde7;
  justify-content: center;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 50%);
  overflow-y: auto;
  @media (max-width: 760px) {
    width: 100%;
  }
`;

export const DivTitle = styled.div`
  z-index: ${(props) => (props.zIndex ? props.zIndex : '1')};
  position: sticky;
  top: 0;
  width: inherit;
  height: 25px;
  background-color: ${(props) =>
    props.backColor ? props.backColor : 'var(--black)'};
  color: #fffde7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Comfortaa', cursive;
  font-weight: bold;
  @media (max-width: 760px) {
    font-size: 12px;
  }
`;

const translate = keyframes`
from{
  opacity: 0.7;
  transform: translateY(5%);
}
to{
  opacity: 1;
  transform: translateY(0%);
}
`;

export const HeaderStyle = styled.div`
  z-index: 1;
  position: sticky;
  top: 25px;
  background: ${(props) => (props.backColor ? props.backColor : '')};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0 20px 0;
  flex-wrap: wrap;
  border-bottom: ${(props) => props.border || ''};
  button {
    width: 150px;
    font-weight: bold;
    color: var(--black);
  }
  animation: ${translate} 1s ease;

  @media (max-width: 760px) {
    font-size: 11px;
    button {
      width: fit-content;
      font-size: 11px;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: min(20vw, 200px) min(15vw, 150px);

  @media (max-width: 760px) {
    label {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`;

export const DivContent = styled.div`
  padding: 0px 20px 20px 20px;
  margin-bottom: 20px;
  display: flex;
  height: fit-content;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  animation: ${translate} 0.5s ease;
`;

export const OrderDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
