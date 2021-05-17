import React from 'react';
import {
  Container,
  DivContent,
  DivTitle,
  Grid,
  HeaderStyle,
  OrderDiv,
} from './styles';
import Post from '../Post';
import Button from '../Button';
import Popup from '../Popup';
import Avaliation from '../Avaliation';
import { orders } from '../../services/Orders';
import Select from '../Select';

const Title = (props) => {
  const { children } = props;
  return <DivTitle {...props}>{children}</DivTitle>;
};

const Header = ({
  professor,
  feedbacks,
  canAvaliate,
  onNewAvaliation,
  backColor,
  border,
}) => {
  const [avaliate, setAvaliate] = React.useState(false);

  function onClose() {
    setAvaliate(false);
    onNewAvaliation();
  }

  return (
    <>
      {avaliate && (
        <Popup>
          <Avaliation professor={professor} close={onClose} />
        </Popup>
      )}
      <HeaderStyle backColor={backColor} border={border}>
        <Grid>
          <label>Nota Geral: </label>
          <label>
            {feedbacks?.rating ? feedbacks.rating.toFixed(2) : 'Não avaliado'}
          </label>
          <label>Didática: </label>
          <label>
            {feedbacks?.didactic ? feedbacks.didactic.toFixed(2) : '0'}
          </label>
          <label>Metodologia: </label>
          <label>{feedbacks?.metod ? feedbacks.metod.toFixed(2) : '0'}</label>
          <label>Avaliações Coerentes: </label>
          <label>
            {feedbacks?.avaliations ? feedbacks.avaliations.toFixed(2) : '0'}
          </label>
          <label>Disponibilidade: </label>
          <label>
            {feedbacks?.disponibility
              ? feedbacks.disponibility.toFixed(2)
              : '0'}
          </label>
        </Grid>
        {canAvaliate && (
          <Button
            text="Avaliar"
            backColor="var(--yellow)"
            onClick={() => setAvaliate(true)}
          />
        )}
      </HeaderStyle>
    </>
  );
};

function PostsBox({ posts, canReport }) {
  const [order, setOrder] = React.useState(0);
  const orderedPost = posts.sort(orders[order].fun);
  return (
    <DivContent>
      {posts.length > 0 && (
        <OrderDiv>
          <Select
            id="orders"
            backColor="var(--transparent)"
            text="Selecione um Ordenação"
            options={orders}
            onChange={(e) => setOrder(e.target.value)}
            width="fit-content"
            display="flex"
          />
        </OrderDiv>
      )}
      {orderedPost.map((post) => (
        <Post key={post.id_post} post={post} canReport={canReport} />
      ))}
    </DivContent>
  );
}

function Feed(props) {
  const { title, children } = props;
  return (
    <Container {...props}>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}

Feed.PostsBox = PostsBox;
Feed.Header = Header;
Feed.Title = Title;
export default Feed;
