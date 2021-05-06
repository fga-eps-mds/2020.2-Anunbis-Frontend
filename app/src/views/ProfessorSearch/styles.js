import styled from 'styled-components';

export const Container = styled.div`
  display: ${(props) => (props.hasProfessors ? 'grid' : 'flex')};
  grid-template-columns: 240px 700px;
`;

export const FoundDiv = styled.div`
  margin: 10px;
  background-color: var(--yellow);
  border-radius: 5px;
  box-shadow: 1px 1px rgba(0, 0, 0, 50%);
  padding: 5px;

  * {
    cursor: pointer;
  }
`;

export const FoundHeader = styled.div`
  display: flex;
  flex-direction: row;
  opacity: ${(props) => (props.selected ? '100%' : '60%')};
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
`;

export const Img = styled.img`
  height: 20px;
  transition: transform 0.5s ease;
  transform: ${(props) => `rotate(${props?.rotate})`};
`;

export const Name = styled.div`
  display: inline-block;
  width: 100%;
`;

export const Discipline = styled.div`
  padding: 5px;
  margin: 5px;
  background-color: #fff9c4;
  border-radius: 10px;
  box-shadow: 2px 2px rgba(0, 0, 0, 50%);
  text-align: center;
`;

export const LoadingBox = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
