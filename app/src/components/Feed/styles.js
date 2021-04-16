import styled from 'styled-components';

export const Container = styled.div`
  width: 450px;
  height: 450px;
  border-bottom-right-radius: 2%;
  border-bottom-left-radius: 2%;
  background-color: #FFFDE7;
  justify-content: center;
`

export const DivContent = styled.div`
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    overflow-y: auto;
`;

export const DivTitle = styled.div`
    width: inherit;
    height: 25px;
    background-color: #212121;
    color: #FFFDE7;
    display: flex;
    align-items: center;
    justify-content: center;
  `;