import renderer from 'react-test-renderer';
import FeedPopup from '../../components/FeedPopup';

describe('Snapshot FeedPopup component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<FeedPopup />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
