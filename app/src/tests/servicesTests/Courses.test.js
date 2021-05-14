import renderer from 'react-test-renderer';
import { getCourses } from '../../services/Courses';

describe('Snapshot Auth component', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(getCourses).toJSON() 
    expect(tree).toMatchSnapshot()
    })
})