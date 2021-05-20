import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  from {
    opacity: 0;
    background-color: rgba(0, 0, 0, 0%)
  }

  to {
    opacity: 1;
    background-color: rgba(0, 0, 0, 75%)
  }
`;

const Popup = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fade} 0.5s ease;
  background-color: rgba(0, 0, 0, 80%);
  z-index: 10;
`;

export default Popup;
