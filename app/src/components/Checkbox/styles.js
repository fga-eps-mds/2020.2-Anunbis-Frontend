import styled from 'styled-components';

export const Checkmark = styled.span`
    height: 20px;
    width: 20px;
    margin-right: 10px;
    border-radius: 5px;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.label`
  font-size: 14px;
  display: flex;
  align-items: center;
  width: fit-content;
  height: fit-content;

  &:hover input ~ ${Checkmark} {
    background-color: #ccc;
  }

  input:checked ~ ${Checkmark} {
    background-color: #26A69A;
  }

  input:checked ~ ${Checkmark}:after {
    content: "";
    left: 10px;
    top: 5px;
    width: 3px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);

  }

  input {
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
  }
`;
