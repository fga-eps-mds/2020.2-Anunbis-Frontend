import renderer from 'react-test-renderer';
import Post from '../../components/Post';

describe('Snapshot Post component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Post />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
