import renderer from 'react-test-renderer';
import Home from '../../views/Home';

describe('Snapshot Home view', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
