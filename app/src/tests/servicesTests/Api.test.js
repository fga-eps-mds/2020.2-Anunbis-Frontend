import renderer from 'react-test-renderer';
import api from '../../services/Api';

describe('Snapshot Api component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(api).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
