import renderer from 'react-test-renderer';
import ProfileStudent from '../../views/Profile/Student';

describe('Snapshot Student Profile view', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<ProfileStudent.Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('matches the snapshot', () => {
    const tree = renderer.create(<ProfileStudent.Body />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
