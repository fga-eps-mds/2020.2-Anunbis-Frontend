import renderer from 'react-test-renderer';
import StudentHome from '../../views/StudentHome';

describe('Snapshot StudentHome view', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<StudentHome />).toJSON() 
    expect(tree).toMatchSnapshot()
    })
})