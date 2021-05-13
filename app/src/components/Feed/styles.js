import styled, { keyframes } from 'styled-components';

export const Container = styled.div((props) => ({
  width: props.width ? props.width : '700px',
  'min-height': '20vh',
  height: 'fit-content',
  margin: '0 0 40px 0',
  'border-radius': props.radius ? props.radius : '0px 0px 20px 20px',
  'background-color': '#FFFDE7',
  'justify-content': 'center',
  'box-shadow': '5px 5px 5px rgba(0, 0, 0, 50%)',
}));

export const DivTitle = styled.div`
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0 20px 0;

  button {
    min-width: 150px;
    font-weight: bold;
    color: var(--black);
  }
  animation: ${translate} 1s ease;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 200px 150px;
`;

export const DivContent = styled.div`
  padding: 0px 20px 20px 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  animation: ${translate} 0.5s ease;
`;

export const NotFound = styled.div`
  height: 20vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Comfortaa', cursive;
  font-weight: bold;
`;

export const OrderDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
