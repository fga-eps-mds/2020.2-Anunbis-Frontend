import styled, { keyframes } from 'styled-components';

const translateY = keyframes`
    0% {
        transform: translateY(0%);
    }
    50% {
        transform: translateY(-150%);
    }
`;

export const Ball = styled.span`
  width: 10px;
  height: 10px;
  background-color: var(--darkBlue);
  border-radius: 50%;
  animation: ${translateY} 1s ease-in-out infinite;
  animation-delay: ${(props) => props.delay};
`;

export const LoadingDiv = styled.div`
  width: 50px;
  height: fit-content;
  display: grid;
  grid-template-columns: auto auto auto;
`;

export const LoadingBox = styled.div`
  width: 100%;
  height: 20vh;
  background: ${(props) => (props.backColor ? props.backColor : '')};
  display: flex;
  justify-content: center;
  align-items: center;
`;
