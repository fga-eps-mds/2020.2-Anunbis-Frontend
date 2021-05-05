import styled from 'styled-components';

export const Options = styled.div`
  width: 340px;

  label {
    margin: 10px;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;

  button {
    font: bold 14px Ubuntu;
    color: #fffde7;
    margin: 15px;
  }
`;

export const TxtArea = styled.textarea`
  width: 330px;
  height: 70px;
  border-radius: 10px;
  background-color: #fffde7;
  resize: none;

  &:focus {
    outline-width: 0;
  }
`;

export const Details = styled.div``;
