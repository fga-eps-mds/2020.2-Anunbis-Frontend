import React from 'react';
import styled from 'styled-components';

const Title = ({ children }) => {
  const Title = styled.div`
    width: inherit;
    height: 5%;
    background-color: #212121;
    color: #FFFDE7;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <Title>
      {children}
    </Title>
  )
}

const Content = ({ children }) => {
  const Content = styled.div`
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    overflow-y: auto;
`;

  return (
    <Content>
      {children}
    </Content>
  )
}

export default function Feed({ title, children }) {
  const Feed = styled.div`
    width: 450px;
    height: 600px;
    border-bottom-right-radius: 2%;
    border-bottom-left-radius: 2%;
    background-color: #FFFDE7;
  `
  return (
    <Feed>
      <Title>
        Resultado da pesquisa "{title}"
      </Title>
      <Content>
        {children}
      </Content>
    </Feed>
  );
}