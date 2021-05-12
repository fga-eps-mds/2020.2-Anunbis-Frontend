import React from 'react';
import Feed from '../../components/Feed';
import Select from '../../components/Select';
import api from '../../services/Api';
import { orders } from '../../services/Orders';
import { Conteiner } from './styles';

export default function StudentHome() {
  const [posts, setPosts] = React.useState([]);
  const [order, setOrder] = React.useState(0);

  React.useEffect(() => {
    api.get('/post').then((response) => {
      if (response.status === 200) setPosts(response.data);
    });
  }, [order]);

  return (
    <Conteiner>
      <Feed title="Avaliações Feitas Por Você">
        <Select
          id="orders"
          backColor="var(--transparent)"
          text="Selecione um Ordenação"
          options={orders}
          onChange={(e) => setOrder(e.target.value)}
          width="fit-content"
          display="flex"
        />
        <Feed.PostsBox posts={posts.sort(orders[order].fun)} canReport />
      </Feed>
    </Conteiner>
  );
}
