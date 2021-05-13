import styled, { keyframes } from 'styled-components';

const translate = keyframes`
    from{
        opacity: 0.7;
        transform: translateY(15%);
    }
    to{
        opacity: 1;
        transform: translateY(0%);
    }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 400px;
  animation: ${translate} 1s ease;
`;

export const LoadingBox = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
