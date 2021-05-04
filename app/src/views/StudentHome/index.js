import React from 'react';
import Feed from '../../components/Feed'
import api from '../../services/Api';

export default function StudentHome() {
    const [posts, setPosts] = React.useState([])

    React.useEffect(() => {
        api.get("/post")
            .then(response => {
                if(response.status == 200)
                    setPosts(response.data)
            })
    }, [])

  return (
    <Feed title="Avaliações Feitas Por Você">
        <Feed.PostsBox posts={posts} canReport={true} />
    </Feed>
  );
}
