import renderer from 'react-test-renderer';
import Routes from '../../routes/routes';

describe('routes test', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Routes />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('matches the snapshot', () => {
    expect(Routes).toMatchSnapshot();
  });
});
