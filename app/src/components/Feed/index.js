import React from 'react';
import { Container, DivContent, DivTitle} from './styles';

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