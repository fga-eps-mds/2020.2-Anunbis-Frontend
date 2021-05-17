import styled, { keyframes } from 'styled-components';

const translate = keyframes`
    from{
        opacity: 0.7;
        transform: translateY(10%);
    }
    to{
        opacity: 1;
        transform: translateY(0%);
    }
`;

export const Home = styled.div`
  display: grid;
  grid-template-columns: min(30vw, 300px) min(70vw, 800px);
`;

export const BtnHomeProfessor = styled.div`
  background-color: var(--lightWhite);
  margin: 90px 100px 0 0;
  height: 150px;
  width: 250px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 800px) {
    height: 40%;
    width: 70%;
    button {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      height: 30%;
      width: 80%;
    }
  }
`;

export const Container = styled.div`
  border-radius: 20px;
  background: ${(props) => (props.backColor ? props.backColor : '')};
  min-height: 180px;
  height: fit-content;
  box-shadow: ${(props) =>
    props.backColor ? '2px 2px 2px rgba(0, 0, 0, 50%)' : 0};
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  padding-bottom: 20px;
`;

export const ContainerPost = styled.div`
  background-color: #fff9c4;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 50%);
  margin-top: 20px;
  border-radius: 15px;
  height: fit-content;
  width: 97%;
  animation: ${translate} 1s ease;
`;

export const DisciplinePostsStyle = styled.div`
  animation: ${translate} 1.5s ease;
`;

export const ContainerOptions = styled.div`
  display: grid;
  grid-template-columns: min(10vw, 100px) min(40vw, 400px);
  align-items: center;
  justify-content: space-evenly;
  font-weight: bold;
  padding: 5px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const ImageOptions = styled.img`
  height: 45px;
  transition: transform 1s ease;
  transform: ${(props) => (props.rotate ? `rotate(${props.rotate})` : '')};
  @media (max-width: 600px) {
    height: 35px;
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  padding-left: 60px;
`;

export const LoadingBox = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
