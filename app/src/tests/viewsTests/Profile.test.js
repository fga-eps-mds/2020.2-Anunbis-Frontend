import renderer from 'react-test-renderer';
import Profile from '../../views/Profile/index';

describe('Snapshot Profile view', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Profile />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
