import renderer from 'react-test-renderer';
import ProfessorHome from '../../views/ProfessorHome';

describe('Snapshot ProfessorHome view', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<ProfessorHome />).toJSON() 
    expect(tree).toMatchSnapshot()
    })
})