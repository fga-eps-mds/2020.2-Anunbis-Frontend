import renderer from 'react-test-renderer';
import Report from '../../components/Report';

describe('Snapshot Report component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Report />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
