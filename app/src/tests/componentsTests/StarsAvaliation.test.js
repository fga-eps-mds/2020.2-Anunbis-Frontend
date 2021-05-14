import renderer from 'react-test-renderer';
import StarsAvaliation from '../../components/StarsAvaliation';

describe('Snapshot StarsAvaliation component', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<StarsAvaliation />).toJSON()
    
    expect(tree).toMatchSnapshot()
    })
})