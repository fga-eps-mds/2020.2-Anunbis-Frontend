import { getPosts } from '../../services/Posts';
import mock from '../../mock/index';
import { waitFor, cleanup } from '@testing-library/react';
import { validPost } from '../../mock/fixtures/stored_post';


mock.onGet('post').reply(200,
  validPost
)

afterEach(cleanup);

describe('getPosts function test', () => {
  test('must call the callback on getting Posts', async () => {
    const setPosts = jest.fn();
    getPosts(setPosts);
    await waitFor(() => {
      expect(setPosts).toHaveBeenCalled()
    })
  });
});
