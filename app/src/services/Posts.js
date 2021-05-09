import api from './Api';

export const getPosts = (setPosts) => {
  api.get('post').then((response) => {
    if (response.status === 200) setPosts(response.data);
  });
};
