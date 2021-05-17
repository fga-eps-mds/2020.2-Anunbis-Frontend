import renderer from 'react-test-renderer';
import ProfileProfessor from '../../views/Profile/Professor';

describe('Snapshot Professor Profile view', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<ProfileProfessor.Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('matches the snapshot', () => {
    const tree = renderer.create(<ProfileProfessor.Body />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
