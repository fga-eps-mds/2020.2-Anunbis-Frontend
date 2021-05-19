import styled from 'styled-components';
import Button from '../Button';

export const Container = styled.div`
  background-color: var(--lightWhite);
  position: absolute;
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'column')};
  width: min(55vw, 300px);
  height: min(25vh, 185px);
  margin-top: 60px;
  border-radius: 10px;
  font-family: 'Comfortaa', cursive;
  Input {
    width: min(50vw, 280px);
    align-self: flex-start;
  }
  @media (max-height: 330px) {
    display: none;
  }
`;

export const Header = styled.header`
  width: inherit;
  display: flex;
  height: 30px;
  background-color: var(--black);
  color: white;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  @media (max-height: 660px) {
    font-size: 10px;
  }
  div {
    display: flex;
    height: inherit;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Comfortaa', cursive;
  }

  Button {
    margin-top: 0px;
    border-radius: 0;
    border: none;
    background-color: var(--lightRed);
    color: var(--white);
    height: inherit;
    margin-inline-start: 0px;
    margin-inline-end: inherit;

    &:hover,
    &focus {
      color: var(--black);
    }
  }
`;

export const Btn = styled(Button)`
  margin-top: 10px;
  margin-bottom: 15px;
  color: white;
  height: 30px;
  border: none;

  &:focus,
  &:hover {
    background-color: var(--darkBlue);
  }
`;

export const FeedBack = styled.div`
  display: flex;
  align-self: center;
  height: fit-content;
  width: fit-content;
  color: red;
`;

export const MsgLoading = styled.div`
  color: black;
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: center;
`;