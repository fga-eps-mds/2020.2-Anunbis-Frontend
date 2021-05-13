import React from 'react';
import Feed from '../../components/Feed';
import { getPosts } from '../../services/Posts';
import { Conteiner } from './styles';

export default function StudentHome() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    getPosts(setPosts);
  }, []);

  return (
    <Conteiner>
      <Feed title="Avaliações Feitas Por Você">
        <Feed.PostsBox posts={posts} canReport />
      </Feed>
    </Conteiner>
  );
}
