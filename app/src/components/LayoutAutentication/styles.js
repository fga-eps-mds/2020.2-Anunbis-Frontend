import styled from 'styled-components';
import bgFGA from '../../assets/images/BG_FGA.png';

export const Background = styled.div`
  height: 100vh;
  background-image: url(${bgFGA});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

export const Base = styled.div`
  background-color: #ffd54f;
  height: min(500px, 70vh);
  width: min(800px, 70vw);
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
`;

export const Imagem = styled.img`
  @media (max-width: 640px) {
    display: none;
  }
  height: min(500px, 70vh);
  width: min(50%, 400px);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  object-fit: cover;
`;

export const Main = styled.div`
  max-height: 500px;
  max-width: 400px;
`;
