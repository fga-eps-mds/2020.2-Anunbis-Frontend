import styled from 'styled-components';

export const ContentExclude = styled.div`
  position: absolute;
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  background-color: #fff9c4;
  margin-top: 180px;
  border-radius: 10px;

  header {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #212121;
    color: white;
    text-align: center;
  }
`;

export const BtsExclude = styled.div`
  display: flex;
  flex-direction: row;
  background-color: inherit;
  height: inherit;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  Button {
    color: white;
  }
`;