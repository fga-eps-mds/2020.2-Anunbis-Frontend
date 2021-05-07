import styled from 'styled-components';

export const ContentExclude = styled.div`
  position: absolute;
  width: 250px;
  height: 100px;
  display: flex;
  flex-direction: column;
  background-color: var(--lightWhite);
  margin-top: 150px;
  border-radius: 10px;
  
  header {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    display: flex;
    background-color: #212121;
    color: white;
    text-align: center;
    font-size: 15px;
    height: 30px;
    align-items: center;
    justify-content: center;
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
    font-weight: bold;
    border: none;
  }
`;