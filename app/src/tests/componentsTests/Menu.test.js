import renderer from 'react-test-renderer';
import Menu from '../../components/Menu';

describe('Snapshot Menu component', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<Menu />).toJSON()
    
    expect(tree).toMatchSnapshot()
    })
})