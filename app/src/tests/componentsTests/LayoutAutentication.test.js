import renderer from 'react-test-renderer';
import LayoutAutentication from '../../components/LayoutAutentication';

describe('Snapshot LayoutAutentication component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<LayoutAutentication />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
