import styled from 'styled-components';
import Button from '../Button';

export const Container = styled.div`
  background-color: var(--lightWhite);
  position: absolute;
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'column')};
  width: 300px;
  height: fit-content;
  margin-top: 60px;
  border-radius: 10px;
  font-family: 'Comfortaa', cursive;

  Input {
    width: 280px;
    margin-top: 20px;
    align-self: flex-start;
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
