import Button from '../Button';
import {
  Container, Header, Title, Content,
} from './styles';

export default function FeedPopup({ close, title, children }) {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Button onClick={close} text="X" radius="0px" padding="2px 5px" backColor="#F44336" />
      </Header>
      <Content>
        {children}
      </Content>

    </Container>
  );
}
