import styled from 'styled-components';

export const Message = styled.div`
  color: white;
  font-size: 16px;
  border-radius: 2px;
  text-shadow: rgba(0, 0, 0, 50%) 0px 0px 5px;
  font-weight: bold;
  display: block;
  background: #ffab42;
  padding: 10px;
  box-shadow: 2px 2px rgba(0, 0, 0, 25%);
  max-width: 75%;
  text-align: center;
`;

export const VerifyMailStyle = styled.p`
  button {
    background: transparent;
    border: none;
    font: inherit;
    color: inherit;
    text-shadow: inherit;
    text-decoration: underline;
  }
`;