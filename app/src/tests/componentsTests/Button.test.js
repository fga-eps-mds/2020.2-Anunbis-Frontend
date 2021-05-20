import renderer from 'react-test-renderer';
import Button from '../../components/Button';

describe('Snapshot Button component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
