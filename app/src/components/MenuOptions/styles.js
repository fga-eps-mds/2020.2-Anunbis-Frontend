import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: inherit;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  z-index: 2;
  width: min(15vw, 130px);

  Button {
    font-size: 13px;
    margin-bottom: 15px;
    box-shadow: none;
    word-wrap: break-word;
    span:first-child {
      color: red;
    }
    @media (max-width: 550px) {
      font-size: 10px;
      margin-bottom: 13px;
    }
    @media (max-width: 460px) {
      font-size: 8px;
      margin-bottom: 9px;
    }
    @media (max-width: 300px) {
      font-size: 0px;
    }
    @media (max-height: 300px) {
      display: none;
    }
  }
`;
