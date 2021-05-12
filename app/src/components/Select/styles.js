import styled from 'styled-components';

export const SelectStyle = styled.select`
  display: ${(props) => (props.display ? props.display : 'inline-block')};
  border: none;
  border-bottom: 1px solid #000000;
  background: ${(props) => (props.backColor ? props.backColor : 'white')};
  height: inherit;
  align-self: right;
  cursor: pointer;
  width: ${(props) => (props.width ? props.width : 'inherit')};
  color: ${(props) => (props.error ? 'red' : 'black')};

  :active {
    color: black;
    &[value=''] {
      display: none;
    }
  }
`;
