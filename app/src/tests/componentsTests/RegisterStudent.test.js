import renderer from 'react-test-renderer';
import RegisterStudent from '../../components/RegisterStudent';

describe('Snapshot RegisterStudent component', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<RegisterStudent />).toJSON()
    
    expect(tree).toMatchSnapshot()
    })
})