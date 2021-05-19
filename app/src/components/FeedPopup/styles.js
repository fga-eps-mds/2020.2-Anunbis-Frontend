import styled from 'styled-components';

export const Container = styled.div`
  width: 372px;
  height: fit-content;
  background-color: #fffde7;
  border-bottom-right-radius: 2%;
  border-bottom-left-radius: 2%;
  display: flex;
  flex-direction: column;
  @media (max-width: 460px) {
    font-size: 13px;
    width: 80vw;
  }
`;

export const Header = styled.div`
  height: 20px;
  width: inherit;
  background-color: #212121;
  display: flex;
  justify-content: center;

  Button {
    margin-inline: 0px;
    color: #fffde7;
    border: 0px;
    box-shadow: none;
  }
`;

export const Title = styled.div`
  display: flex;
  color: #fffde7;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Comfortaa', cursive;
`;

export const Content = styled.main`
  align-self: center;
  justify-content: center;
  margin-bottom: 10px;
  @media (max-width: 460px) {
    width: 100%;
  }
`;
