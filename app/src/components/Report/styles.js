import styled from 'styled-components';

export const Options = styled.div`
  width: 340px;

  label {
    margin: 10px;
    @media (max-width: 460px) {
      font-size: 11px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  @media (max-width: 460px) {
    width: 70vw;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;

  button {
    font: bold 14px Ubuntu;
    color: #fffde7;
    margin: 15px;
    @media (max-width: 460px) {
      font-size: 11px;
      width: 20vw;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
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
  @media (max-width: 460px) {
    width: 75vw;
  }
`;

export const Details = styled.div``;
