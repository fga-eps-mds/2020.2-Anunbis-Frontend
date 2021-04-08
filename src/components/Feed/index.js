import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 450px;
  height: 450px;
  border-bottom-right-radius: 2%;
  border-bottom-left-radius: 2%;
  background-color: #FFFDE7;
  justify-content: center;
`

const DivContent = styled.div`
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    overflow-y: auto;
`;

const DivTitle = styled.div`
    width: inherit;
    height: 25px;
    background-color: #212121;
    color: #FFFDE7;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

const Title = ({ children }) => {
  return (
    <DivTitle>
      {children}
    </DivTitle>
  )
}

const Content = ({ children }) => {
  return (
    <DivContent>
      {children}
    </DivContent>
  )
}

export default function Feed({ title, children }) {
  return (
    <Container>
      <Title>
        Resultado da pesquisa "{title}"
      </Title>
      <Content>
        {children}
      </Content>
    </Container>
  );
}