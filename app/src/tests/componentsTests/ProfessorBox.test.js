import renderer from 'react-test-renderer';
import ProfessorBox from '../../components/ProfessorBox';

describe('Snapshot ProfessorBox component', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<ProfessorBox />).toJSON()
    
    expect(tree).toMatchSnapshot()
    })
})