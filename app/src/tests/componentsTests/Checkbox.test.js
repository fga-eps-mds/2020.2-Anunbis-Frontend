import renderer from 'react-test-renderer';
import Checkbox from '../../components/Checkbox';

describe('Snapshot Checkbox component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Checkbox />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
