import renderer from 'react-test-renderer';
import RegisterProfessor from '../../components/RegisterProfessor';

describe('Snapshot RegisterProfessor component', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<RegisterProfessor />).toJSON()
    
    expect(tree).toMatchSnapshot()
    })
})