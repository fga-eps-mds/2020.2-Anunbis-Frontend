import styled from 'styled-components';

export const ContentExclude = styled.div`
  position: absolute;
  width: min(55vw, 250px);
  height: min(20vh, 100px);
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
    @media (max-height: 660px) {
      font-size: 11px;
    }
  }
  @media (max-height: 330px) {
    display: none;
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
  flex-wrap: wrap;

  Button {
    color: white;
    font-weight: bold;
    border: none;
    @media (max-width: 155px) {
      width: 30px;
      height: 30px;
    }
    @media (max-height: 660px) {
      font-size: 11px;
    }
  }
`;
