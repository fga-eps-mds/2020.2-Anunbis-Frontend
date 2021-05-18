import renderer from 'react-test-renderer';
import mock from '../../mock';
import { validPost } from '../../mock/fixtures/stored_post';
import StudentHome from '../../views/StudentHome';

mock.onGet('post').reply(200,
  validPost
)

describe('Snapshot StudentHome view', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<StudentHome />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
