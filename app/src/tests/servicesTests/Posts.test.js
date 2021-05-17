import { getPosts } from '../../services/Posts';
import mock from '../../mock/index';
import { waitFor, cleanup } from '@testing-library/react';


mock.onGet('post').reply(200,
  {
    message: "posts collecteds"
  })

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
