import renderer from 'react-test-renderer';
import Select from '../../components/Select';

describe('Snapshot Select component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Select />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
