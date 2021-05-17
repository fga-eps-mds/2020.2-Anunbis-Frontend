import renderer from 'react-test-renderer';
import Feed from '../../components/Feed';

describe('Snapshot Feed component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Feed />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('matches the snapshot', () => {
    const tree = renderer.create(<Feed.PostsBox />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('matches the snapshot', () => {
    const tree = renderer.create(<Feed.Title />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('matches the snapshot', () => {
    const tree = renderer.create(<Feed.Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
