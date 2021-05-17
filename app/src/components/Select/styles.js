import styled from 'styled-components';

export const SelectStyle = styled.select`
  display: ${(props) => (props.display ? props.display : 'inline-block')};
  border: none;
  border-bottom: ${(props) =>
    props.borderBottom ? props.borderBottom : '1px solid #000000'};
  background: ${(props) => (props.backColor ? props.backColor : 'white')};
  height: fit-content;
  align-self: right;
  cursor: pointer;
  width: ${(props) => (props.width ? props.width : 'inherit')};
  color: ${(props) => (props.error ? 'red' : 'black')};
  outline: none;

  :active {
    color: black;
    &[value=''] {
      display: none;
    }
  }
  @media (max-width: 640px) {
    font-size: 9px;
  }

  @media (max-height: 640px) {
    font-size: 9px;
  }
`;
