import renderer from 'react-test-renderer';
import Users, { getToken } from '../../services/Users';

describe('Snapshot Api component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(getToken).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('matches the snapshot', () => {
    expect(Users).toMatchSnapshot();
  });
});
